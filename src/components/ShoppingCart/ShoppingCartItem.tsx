import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import {
  removeItemFromShoppingCart,
  selectPriceBeforeDiscountOfSpecificItem,
  selectQtyOfSpecificItem,
} from "../../redux/slices/shoppingCartSlice";
import AddToCartManager from "./AddToCartManager";
import { TbTruckDelivery, TbDiscount2 } from "react-icons/tb";
import { FaDeleteLeft } from "react-icons/fa6";

type ShoppingCartItemProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const ShoppingCartItem = ({
  id,
  title,
  price,
  image,
}: ShoppingCartItemProps) => {
  const dispatch = useDispatch();

  const qtyOfSpecificItem = useAppSelector((state) =>
    selectQtyOfSpecificItem(state, id)
  );
  const priceBeforeDiscount = useAppSelector((state) =>
    selectPriceBeforeDiscountOfSpecificItem(state, id)
  );
  const hasADiscount =
    priceBeforeDiscount !== null && priceBeforeDiscount !== price;

  return (
    <li className="flex flex-col gap-y-2 mobileM:flex-row justify-between gap-x-4 relative">
      {/* btn to delete individual item from shopping cart */}
      <button
        className="absolute right-0 top-0 h-7 w-7
        flex items-center justify-center text-gray-400 
        hover:text-primary-blue duration-200"
        title="Delete this good"
        onClick={() => dispatch(removeItemFromShoppingCart(id))}
      >
        <FaDeleteLeft size={20} />
      </button>

      {/* left content - checkbox, image, title... */}
      <div className="flex gap-x-3">
        {/* image */}
        <img
          src={image}
          alt={title}
          className="border p-1 rounded-md object-contain w-24 h-20 
          min-w-[96px] min-h-[80px] mobileM:min-w-[64px] mobileM:w-16
          mobileM:min-h-[96px] mobileM:h-24"
        />

        {/* title and free-ship or discount */}
        <div className="flex flex-col justify-between">
          <p className="line-clamp-2 pr-10 mobileM:w-36 mobileM:pr-0">
            {title}
          </p>
          {hasADiscount ? (
            <span
              className="flex items-center gap-x-2 px-2 py-1 text-sm
              font-medium whitespace-nowrap bg-sky-100 text-sky-500
              rounded-[4px] self-start"
            >
              Discount
              <TbDiscount2 size={20} />
            </span>
          ) : (
            <span
              className="flex items-center gap-x-2 px-2 py-1 text-sm
              font-medium whitespace-nowrap bg-green-100 text-green-500
              rounded-[4px] self-start"
            >
              Free shipping
              <TbTruckDelivery size={20} />
            </span>
          )}
        </div>
      </div>

      {/* right content - price and component AddToCartManager */}
      <div
        className="flex-grow flex gap-x-4 gap-y-2 flex-wrap justify-between 
        mobileM:flex-col mobileM:border-l mobileM:pl-4 mobileM:gap-0"
      >
        <p
          className="min-w-[96px] text-center flex justify-center
          gap-x-2 items-center mobileM:flex-col mobileM:items-start
          mobileM:justify-start order-1 mobileM:-order-1"
        >
          {hasADiscount && (
            <span className="text-sm line-through">
              ${(priceBeforeDiscount * qtyOfSpecificItem).toFixed(2)}
            </span>
          )}

          <span className="text-lg font-bold text-slate-600">
            ${(price * qtyOfSpecificItem).toFixed(2)}
          </span>
        </p>

        <AddToCartManager productId={id} />
      </div>
    </li>
  );
};

export default ShoppingCartItem;
