import { useMemo } from "react";
import AddToCartManager from "./AddToCartManager";

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
    <li className="flex justify-between">
      {/* left content - checkbox, image, title... */}
      <div className="flex gap-x-3">
        {/* checkbox, image */}
        <div className="flex items-center gap-x-2">
          <img
            src={image}
            alt={title}
            className="border min-w-[64px] w-16 min-h-[64px] h-16 object-contain"
          />
        </div>

        {/* title and addToCartManager */}
        <div className="flex flex-col justify-between">
          <p className="line-clamp-1 max-w-[180px] w-full border">{title}</p>
          <AddToCartManager />
        </div>
      </div>

      {/* price and free-ship or discount */}
      <div className="border-l flex flex-col">
        <p className="flex flex-col gap-y-1">
          <span className="font-bold text-slate-700">{price}</span>

          {hasADiscount && (
            <span className="text-sm line-through">{priceBeforeDiscount}</span>
          )}
        </p>

        {hasADiscount ? (
          <span className="flex items-center justify-between px-3 py-1 text-sm
          font-medium whitespace-nowrap">
            Discount
          </span>
        ) : (
          <span className="flex items-center justify-between px-3 py-1 text-sm
          font-medium whitespace-nowrap">
            Free shipping
          </span>
        )}
      </div>
    </li>
  );
};

export default ShoppingCartItem;
