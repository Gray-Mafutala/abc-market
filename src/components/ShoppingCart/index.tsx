import React, { useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import ModalWrapper from "../Wrappers/ModalWrapper";
import ShoppingCartItem from "./ShoppingCartItem";

import { FiShoppingCart } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";
import { LiaOpencart } from "react-icons/lia";

type ShoppingCartProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  hideMobileMenu?: () => void;
  cartBtnStyles: {
    itemStyles: string;
    notifStyles: string;
    iconStyles: string;
    titleStyles: string;
  };
};

const ShoppingCart = ({
  open,
  setOpen,
  hideMobileMenu,
  cartBtnStyles,
}: ShoppingCartProps) => {
  const showShoppingCart = () => {
    hideMobileMenu !== undefined && hideMobileMenu();
    setOpen(true);
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

  // en attendant de developper le contexte
  const closeShoppingCart = () => setOpen(false);
  const cartItems = [
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 4.6, count: 400 },
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 3.9, count: 70 },
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 3, count: 400 },
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 1.9, count: 100 },
    },
  ];
  const cartSumItemsQty = 10;
  const cartTotalPrice = 200;
  const clearCart = () => alert("cart cleared");
  const hasADiscount = () => Math.random() > 0.4;

  return (
    <>
      <ModalWrapper
        isOpen={open}
        onClose={closeShoppingCart}
        modalWrapperAddStyles={
          open
            ? "inset-0 duration-300"
            : "inset-0 translate-x-[100%] duration-300"
        }
        closeBtnAddStyles="top-4 left-3 mobileM:-left-10"
        innerWrapperStyles="relative w-full mobileM:max-w-[400px]
        min-h-screen ml-auto bg-white text-gray-500 font-medium
        py-4 px-5 flex flex-col gap-y-6"
      >
        {/* header - title and btn to clear shopping cart */}
        <header
          className="flex items-center justify-between border-b
            border-b-[#ededed] pb-3 mobileM:pb-1"
        >
          <h1
            className="text-2xl mobileL:text-3xl text-slate-500
            font-bold flex items-center gap-x-2
            ml-10 mobileM:ml-0"
          >
            Shopping Cart
            <span
              className="text-sm font-semibold text-slate-400
              whitespace-nowrap"
            >
              {cartSumItemsQty}
            </span>
          </h1>

          {/* btn to remove all */}
          {cartSumItemsQty > 0 && (
            <button
              onClick={clearCart}
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
            <LiaOpencart className="text-9xl" />
            <p className="text-xl">Nothing here yet</p>
          </div>
        )}

        {/* if shopping cart contains items */}
        {cartSumItemsQty > 0 && (
          <>
            <ul
              ref={rootWrapper}
              className={
                isIntersecting
                  ? `max-h-[280px] overflow-y-auto flex flex-col gap-y-6 
                    pr-4 overflow-x-hidden scrollbar-w-2 relative`
                  : `max-h-[280px] overflow-y-auto flex flex-col gap-y-6 
                    pr-4 overflow-x-hidden scrollbar-w-2 relative
                    shadow-[-8px_-16px_14px_-16px#00000073_inset]`
              }
            >
              {cartItems.map((item) => (
                <ShoppingCartItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  hasADiscount={hasADiscount()}
                  priceBeforeDiscount={100}
                />
              ))}

              {/* watcher for intersection observer */}
              <li ref={observerRef}></li>
            </ul>

            {/* subtotal, shipping... and btn to place order */}
            <div className="pt-4 border-t border-t-[#ededed] flex flex-col">
              {/* subtotal */}
              <p className="flex items-center justify-between gap-x-8">
                <span className="text">Subtotal</span>
                <span className="font-bold text-slate-700">$188</span>
              </p>

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
                  Total
                </span>
                <span className="text-2xl font-bold text-slate-700">
                  ${cartTotalPrice}
                </span>
              </p>

              <button
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

      {/* btn to show shopping basket */}
      <button onClick={showShoppingCart} className={cartBtnStyles.itemStyles}>
        <span className={cartBtnStyles.notifStyles}>5</span>
        <span className={cartBtnStyles.iconStyles}>
          <FiShoppingCart />
        </span>
        <span className={cartBtnStyles.titleStyles}>Cart</span>
      </button>
    </>
  );
};

export default ShoppingCart;
