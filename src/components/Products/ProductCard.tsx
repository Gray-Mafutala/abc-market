import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { selectAuth } from "../../redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectIsLiked,
  toggleFavorite,
} from "../../redux/slices/favoritesSlice";

import AddToCartManager from "./AddToCartManager";
import StarRating from "../UI/StarRating";

import { HiHeart } from "react-icons/hi";
import { TbDiscountCheckFilled } from "react-icons/tb";

import { ProductType } from "../../types";

const ProductCard = (details: ProductType) => {
  const { id, title, price, image, rating } = details;

  const { currentUser } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const isLiked = useAppSelector((state) => selectIsLiked(state, id));

  const navigate = useNavigate();
  const handleToggleFavorite = () => {
    currentUser ? dispatch(toggleFavorite(details)) : navigate("/login");
  };

  // generate a fake discount % between 10-50 (or not, randomly)
  const discountPercentage = useMemo(() => {
    return Math.random() < 0.4 ? 0 : Math.floor(Math.random() * (50 - 10) + 10);
  }, []);

  const getPriceBeforeDiscount = (price: number, discountPer: number) =>
    parseFloat((price * (1 + discountPer / 100)).toFixed(2));

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
          <TbDiscountCheckFilled size={16} /> - {discountPercentage}%
        </span>
      )}

      {/* like btn */}
      <button
        onClick={handleToggleFavorite}
        className={
          currentUser && isLiked
            ? `absolute top-2 right-2 bg-blue-light rounded-full p-1
            duration-500 ease-out text-rose-500 active:animate-ping`
            : `absolute top-2 right-2 bg-blue-light rounded-full p-1
            duration-500 ease-out text-slate-300 hover:text-rose-300
            active:animate-ping `
        }
      >
        <HiHeart size={20} />
      </button>

      {/* will display product details when clicked */}
      <div className="flex flex-col">
        {/* product image */}
        <img
          src={image}
          alt={title}
          loading="lazy"
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
              {/* prices after reduction */}
              <span
                className="bg-primary-blue/80 text-white px-[6px]
                rounded-md font-semibold text-[1.3rem] leading-[1.4]
                pt-[2px]"
              >
                ${price}
              </span>
              {/* prices before reduction */}
              <span
                className="text-[1rem] font-medium text-slate-400 
                relative after:absolute after:h-[1px] after:w-full 
                after:bg-red-400 after:left-0 after:top-[48%]"
              >
                ${getPriceBeforeDiscount(price, discountPercentage)}
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
        <AddToCartManager
          id={id}
          title={title}
          image={image}
          price={price}
          priceBeforeDiscount={getPriceBeforeDiscount(
            price,
            discountPercentage
          )}
        />
      </div>
    </li>
  );
};

export default ProductCard;
