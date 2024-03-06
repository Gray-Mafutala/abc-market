import { useAppSelector } from "../../redux/hooks";
import {
  selectPriceBeforeDiscountOfSpecificItem,
  selectQtyOfSpecificItem,
} from "../../redux/slices/cartSlice";
import AddToCartManager from "./AddToCartManager";
import { TbTruckDelivery, TbDiscount2 } from "react-icons/tb";

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
  const qtyOfSpecificItem = useAppSelector((state) =>
    selectQtyOfSpecificItem(state, id)
  );
  const priceBeforeDiscount = useAppSelector((state) =>
    selectPriceBeforeDiscountOfSpecificItem(state, id)
  );
  const hasADiscount =
    priceBeforeDiscount !== null && priceBeforeDiscount !== price;

  return (
    <li className="flex flex-col gap-y-2 mobileM:flex-row justify-between gap-x-4">
      {/* left content - checkbox, image, title... */}
      <div className="flex gap-x-3">
        {/* checkbox, image */}
        <div className="flex items-center gap-x-2">
          <img
            src={image}
            alt={title}
            className="border p-1 rounded-md object-contain
            w-24 h-20 min-w-[96px] min-h-[80px]
            mobileM:min-w-[64px] mobileM:w-16 mobileM:min-h-[96px]
            mobileM:h-24 "
          />
        </div>

        {/* title and free-ship or discount */}
        <div className="flex flex-col justify-between">
          <p className="line-clamp-2 mobileM:max-w-[140px] w-full">{title}</p>
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
        className="flex-grow flex justify-between mobileM:flex-col mobileM:border-l 
        mobileM:pl-4"
      >
        <p
          className="min-w-[96px] text-center flex justify-center
          gap-x-2 items-center mobileM:flex-col mobileM:items-start
          mobileM:justify-start"
        >
          {hasADiscount && (
            <span className="text-sm line-through">${(priceBeforeDiscount * qtyOfSpecificItem).toFixed(2)}</span>
          )}

          <span className="text-lg font-bold text-slate-600">${(price * qtyOfSpecificItem).toFixed(2)}</span>
        </p>

        <AddToCartManager productId={id} />
      </div>
    </li>
  );
};

export default ShoppingCartItem;
