import { Link } from "react-router-dom";

const CategoriesBottomBar = () => {
  return (
    <ul
      className="px-4 hidden tabletM:flex items-center justify-center py-4 
      gap-x-6 text-sm leading-[18px] text-slate-600 font-medium 
      whitespace-nowrap border-b border-b-[#ededed]"
    >
      <li
        className="bg-blue-light rounded-[18px] duration-300
        hover:bg-primary-blue/80 hover:text-white active:bg-transparent
        active:text-primary-blue active:shadow-[0_0_0_2px_#008ecc] 
        focus:shadow[0_0_0_2px_#008ecc]"
      >
        <Link to="/" className="px-[14px] py-[10px] inline-flex">
          All categories
        </Link>
      </li>

      <li
        className="bg-blue-light rounded-[18px] duration-300
        hover:bg-primary-blue/80 hover:text-white active:bg-transparent
        active:text-primary-blue active:shadow-[0_0_0_2px_#008ecc] 
        focus:shadow[0_0_0_2px_#008ecc]"
      >
        <Link to="/" className="px-[14px] py-[10px] inline-flex">
          Electronics
        </Link>
      </li>

      <li
        className="bg-blue-light rounded-[18px] duration-300
        hover:bg-primary-blue/80 hover:text-white active:bg-transparent
        active:text-primary-blue active:shadow-[0_0_0_2px_#008ecc] 
        focus:shadow[0_0_0_2px_#008ecc]"
      >
        <Link to="/" className="px-[14px] py-[10px] inline-flex">
          Jewelery
        </Link>
      </li>

      <li
        className="bg-blue-light rounded-[18px] duration-300
        hover:bg-primary-blue/80 hover:text-white active:bg-transparent
        active:text-primary-blue active:shadow-[0_0_0_2px_#008ecc] 
        focus:shadow[0_0_0_2px_#008ecc]"
      >
        <Link to="/" className="px-[14px] py-[10px] inline-flex">
          Men's clothing
        </Link>
      </li>

      <li
        className="bg-blue-light rounded-[18px] duration-300
        hover:bg-primary-blue/80 hover:text-white active:bg-transparent
        active:text-primary-blue active:shadow-[0_0_0_2px_#008ecc] 
        focus:shadow[0_0_0_2px_#008ecc]"
      >
        <Link to="/" className="px-[14px] py-[10px] inline-flex">
          Women's clothing
        </Link>
      </li>

      <li
        className="bg-blue-light rounded-[18px] duration-300
        hover:bg-primary-blue/80 hover:text-white active:bg-transparent
        active:text-primary-blue active:shadow-[0_0_0_2px_#008ecc] 
        focus:shadow[0_0_0_2px_#008ecc]"
      >
        <Link to="/" className="px-[14px] py-[10px] inline-flex">
          Featured products
        </Link>
      </li>
    </ul>
  );
};

export default CategoriesBottomBar;
