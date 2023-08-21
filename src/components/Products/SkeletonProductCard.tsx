import { HiHeart } from "react-icons/hi";

const SkeletonProductCard = () => {
  return (
    <li
      className="relative min-h-[268px] h-full list-none bg-white/20
      border border-slate-200 rounded-lg flex flex-col px-4 pt-10
      pb-4 justify-between items-center gap-y-3"
    >
      {/* btn to like */}
      <span
        className="absolute top-3 right-3 rounded-full 
        p-1 text-gray-300 bg-gray-100 
        animate-[pulse_2.5s_ease-out_infinite]"
      >
        <HiHeart size={20} />
      </span>

      {/* product image */}
      <span
        className="animate-pulse skeleton-bg-gradient rounded-md
        w-1/2 h-1/2 bg-gray-300 mb-4"
      ></span>

      {/* product title */}
      <span
        className="animate-shine skeleton-bg-gradient rounded-md
        bg-gray-300 h-7 w-[90%]"
      ></span>

      {/* product price */}
      <span
        className="animate-shine skeleton-bg-gradient rounded-md
        bg-gray-300 h-7 w-20"
      ></span>

      {/* add to card manager */}
      <span
        className="animate-shine skeleton-bg-gradient rounded-xl
        bg-gray-300 h-10 w-full"
      ></span>
    </li>
  );
};

export default SkeletonProductCard;
