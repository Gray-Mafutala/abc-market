import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import ModalWrapper from "../Wrappers/ModalWrapper";
import ShoppingCartItem from "./ShoppingCartItem";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  clearShoppingCart,
  openShoppingCart,
  closeShoppingCart,
  selectShoppingCart,
  selectShoppingCartIsOpen,
  selectShoppingCartSumDiscount,
  selectShoppingCartSumItemsQty,
  selectShoppingCartTotalPrice,
} from "../../redux/slices/shoppingCartSlice";

import {
  closeMobileMenu,
  selectMobileMenuIsOpen,
} from "../../redux/slices/mobileMenu";

import { FiShoppingCart } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";
import { LiaOpencart } from "react-icons/lia";

type ShoppingCartProps = {
  cartBtnStyles: {
    itemStyles: string;
    notifStyles: string;
    iconStyles: string;
    titleStyles: string;
  };
};

const ShoppingCart = ({ cartBtnStyles }: ShoppingCartProps) => {
  const { shoppingCartItemsList } = useAppSelector(selectShoppingCart);
  const shoppingCartIsOpen = useAppSelector(selectShoppingCartIsOpen);
  const cartSumItemsQty = useAppSelector(selectShoppingCartSumItemsQty);
  const cartTotalPrice = useAppSelector(selectShoppingCartTotalPrice);
  const cartSumDiscount = useAppSelector(selectShoppingCartSumDiscount);

  const dispatch = useAppDispatch();
  const mobileMenuIsOpen = useAppSelector(selectMobileMenuIsOpen);

  // show shopping cart and close mobile menu if is open
  const showShoppingCart = () => {
    mobileMenuIsOpen && dispatch(closeMobileMenu());
    dispatch(openShoppingCart());
  };

  /* to add a shadow to indicate that there are more items at the bottom, 
  and when we scroll to the bottom of the list, we remove the shadow */
  const rootWrapper = useRef(null);
  const observerRef = useRef<HTMLLIElement | null>(null);
  const entry = useIntersectionObserver(observerRef, {
    root: rootWrapper.current,
    threshold: 1,
  });
  const isIntersecting = !!entry?.isIntersecting;

  const navigate = useNavigate();
    const placeOrder = () => {
      
        
    closeShoppingCart();
    navigate("/orders", { state: { orderPlaced: true } });
  };

  return (
    <>
      <ModalWrapper
        isOpen={shoppingCartIsOpen}
        onClose={() => dispatch(closeShoppingCart())}
        modalWrapperAddStyles={
          shoppingCartIsOpen
            ? "inset-0 duration-300"
            : "inset-0 translate-x-[100%] duration-300"
        }
        closeBtnAddStyles="top-4 left-3 mobileL:-left-10"
        innerWrapperStyles="relative w-full mobileL:max-w-[480px]
        min-h-screen ml-auto bg-white text-gray-500 font-medium
        py-4 px-5 flex flex-col gap-y-6"
      >
        {/* header - title and btn to clear shopping cart */}
        <header
          className="flex items-center justify-between border-b
          border-b-[#ededed] pb-3 mobileL:pb-2"
        >
          <h1
            className="text-2xl mobileL:text-3xl text-slate-500
            font-bold flex items-center gap-x-2 ml-10 mobileL:ml-0"
          >
            Shopping Cart
            {cartSumItemsQty > 0 && (
              <span className="text-sm font-semibold text-slate-400 whitespace-nowrap">
                {cartSumItemsQty}
              </span>
            )}
          </h1>

          {/* btn to clear shopping cart */}
          {cartSumItemsQty > 0 && (
            <button
              onClick={() => dispatch(clearShoppingCart())}
              title="Clear shopping cart"
              className="hover:text-primary-blue duration-200 px-1"
            >
              <RiDeleteBinFill size={24} />
            </button>
          )}
        </header>

        {/* if shopping cart is empty */}
        {!(cartSumItemsQty > 0) && (
          <div
            className="flex flex-col gap-y-3 items-center
            justify-center"
          >
            <LiaOpencart className="text-8xl text-slate-300" />
            <p className="text-lg text-slate-400 font-medium tracking-wide">
              Nothing here yet.
            </p>
          </div>
        )}

        {/* if shopping cart contains items */}
        {cartSumItemsQty > 0 && (
          <>
            <ul
              ref={rootWrapper}
              className={
                isIntersecting
                  ? `max-h-[240px] overflow-y-auto flex flex-col gap-y-6 
                    pr-4 overflow-x-hidden scrollbar-w-2 relative`
                  : `max-h-[240px] overflow-y-auto flex flex-col gap-y-6 
                    pr-4 overflow-x-hidden scrollbar-w-2 relative
                    shadow-[0_-12px_14px_-16px_#00000073_inset]`
              }
            >
              {shoppingCartItemsList.map((item) => (
                <ShoppingCartItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              ))}

              {/* watcher for intersection observer */}
              <li ref={observerRef}></li>
            </ul>

            {/* subtotal, discount, shipping... and btn to place order */}
            <div className="pt-4 border-t border-t-[#ededed] flex flex-col">
              {/* total qty products */}
              <p className="flex items-center justify-between gap-x-8">
                <span className="text">Goods ({cartSumItemsQty})</span>
                <span className="font-bold text-slate-700">
                  ${cartTotalPrice}
                </span>
              </p>

              {/* discount */}
              {parseInt(cartSumDiscount) > 0 && (
                <p className="flex items-center justify-between gap-x-8 mt-2">
                  <span className="text">Discount</span>
                  <span className="font-bold text-green-500">
                    - ${cartSumDiscount}
                  </span>
                </p>
              )}

              {/* shipping */}
              <p
                className="flex items-center justify-between gap-x-8
                mt-2 mb-4"
              >
                <span className="text">Shipping</span>
                <span className="font-bold text-slate-700">--</span>
              </p>

              {/* total to pay */}
              <p
                className="flex items-center justify-between gap-x-8
                pt-6 border-t border-t-[#ededed]"
              >
                <span className="text-xl font-semibold text-slate-600">
                  Total to pay
                </span>
                <span className="text-2xl font-bold text-primary-blue">
                  ${cartTotalPrice}
                </span>
              </p>

              <button
                onClick={placeOrder}
                className="mt-4 px-5 py-[6px] rounded-md text-white
                bg-primary-blue text-lg font-medium border-2
                border-transparent hover:text-primary-blue
                hover:bg-white hover:border-primary-blue
                active:bg-primary-blue active:text-white 
                duration-200"
              >
                Place a order
              </button>
            </div>
          </>
        )}
      </ModalWrapper>

      {/* btn to show shopping cart */}
      <button onClick={showShoppingCart} className={cartBtnStyles.itemStyles}>
        {cartSumItemsQty > 0 && (
          <span className={cartBtnStyles.notifStyles}> {cartSumItemsQty}</span>
        )}
        <span className={cartBtnStyles.iconStyles}>
          <FiShoppingCart />
        </span>
        <span className={cartBtnStyles.titleStyles}>Cart</span>
      </button>
    </>
  );
};

export default ShoppingCart;
