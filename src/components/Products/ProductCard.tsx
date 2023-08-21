import { useMemo } from "react";
import AddToCartManager from "./AddToCartManager";
import { HiHeart } from "react-icons/hi";
import { TbDiscountCheckFilled } from "react-icons/tb";
import StarRating from "../ui/StarRating";

type ProductCardProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: { rate: number; count: number };
};

const ProductCard = ({
//  id,
  title,
//  description,
  price,
  image,
  rating,
}: ProductCardProps) => {
  // generate a fake discount % between 10-50 (or not, randomly)
  const discountPercentage = useMemo(() => {
    return Math.random() < 0.4 ? 0 : Math.floor(Math.random() * (50 - 10) + 10);
  }, []);

  const getPriceBeforeDiscount = (price: number, discountPer: number) =>
    parseFloat((price + (price * discountPer) / 100).toFixed(2));

  return (
    <li
      className="relative min-h-[268px] h-full list-none bg-white
      border border-slate-200 rounded-lg flex flex-col pt-10 pb-4
      px-4"
    >
      {/* fake discount % */}
      {discountPercentage > 0 && (
        <span
          className="absolute top-2 left-2 flex items-center gap-x-1
          text-sm font-bold bg-red-50 text-red-500 px-1 py-[2px]
          rounded-md"
        >
          <TbDiscountCheckFilled size={16} /> -{discountPercentage}%
        </span>
      )}

      {/* like btn */}
      <button
        className="absolute top-2 right-2 bg-blue-light rounded-full
          p-1 text-slate-300 hover:text-rose-400 active:animate-ping
          duration-500 ease-out"
      >
        <HiHeart size={20} />
      </button>

      {/* will display product details when clicked */}
      <div className="flex flex-col">
        {/* product image */}
        <img
          src={image}
          alt={title}
          className="w-full h-[100px] object-contain"
        />

        {/* title */}
        <h3
          className="text-lg font-medium text-slate-600 text-center
          line-clamp-1 leading-[1.3] mt-4 mb-3"
        >
          {title}
        </h3>

        {/* prices */}
        <p className="flex justify-center items-baseline gap-x-5">
          {discountPercentage > 0 ? (
            <>
              {/* prices before and after reduction */}
              <span
                className="bg-primary-blue/80 text-white px-[6px]
                rounded-md font-semibold text-[1.3rem] leading-[1.4]
                pt-[2px]"
              >
                ${getPriceBeforeDiscount(price, discountPercentage)}
              </span>
              <span
                className="text-[1rem] font-medium text-slate-400 
                relative after:absolute after:h-[1px] after:w-full 
                after:bg-red-400 after:left-0 after:top-[48%]"
              >
                ${price}
              </span>
            </>
          ) : (
            //  regular price
            <span className="font-semibold text-[1.4rem] text-slate-600">
              ${price}
            </span>
          )}
        </p>
      </div>

      {/* rating */}
      <div className="mt-3 px-4 flex items-center justify-center cursor-pointer">
        <StarRating rate={rating.rate} />
        <span className="text-sm font-medium text-slate-500 ml-4">
          ({rating.count})
        </span>
      </div>

      {/* add to cart manager */}
      <div className="mt-5">
        <AddToCartManager />
      </div>
    </li>
  );
};

export default ProductCard;
