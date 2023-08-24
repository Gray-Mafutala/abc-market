import AddToCartManager from "./AddToCartManager";
import { TbTruckDelivery, TbDiscount2 } from "react-icons/tb";

type ShoppingCartItemProps = {
  id: number;
  title: string;
  price: number;
  hasADiscount: boolean;
  priceBeforeDiscount: number;
  image: string;
};

const ShoppingCartItem = ({
  //  id,
  title,
  price,
  hasADiscount,
  priceBeforeDiscount,
  image,
}: ShoppingCartItemProps) => {
  return (
    <li className="flex justify-between gap-x-4">
      {/* left content - checkbox, image, title... */}
      <div className="flex gap-x-3">
        {/* checkbox, image */}
        <div className="flex items-center gap-x-2">
          <img
            src={image}
            alt={title}
            className="border p-1 rounded-md min-w-[64px] w-16 min-h-[96px] h-16 object-contain"
          />
        </div>

        {/* title and free-ship or discount */}
        <div className="flex flex-col justify-between">
          <p className="line-clamp-2 max-w-[140px] w-full">{title}</p>
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

      {/* price and component AddToCartManager */}
      <div className="border-l pl-4 flex-grow flex flex-col justify-between">
        <p className="flex flex-col">
          <span className="font-bold text-slate-700">{price}</span>

          {hasADiscount && (
            <span className="text-sm line-through">{priceBeforeDiscount}</span>
          )}
        </p>

        <AddToCartManager />
      </div>
    </li>
  );
};

export default ShoppingCartItem;
