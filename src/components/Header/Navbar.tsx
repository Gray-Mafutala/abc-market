import { useState } from "react";

import SearchBar from "./SearchBar";
import MobileSearchBar from "./SearchBar/MobileSearchBar";

import { HiOutlineHeart } from "react-icons/hi";
import { CgMenuLeft } from "react-icons/cg";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { BiSolidPackage } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileSearchBox, setMobileSearchBox] = useState(false);

  return (
    <nav className="px-4 border-b border-b-[#ededed]">
      {/* container */}
      <div
        className="centered-container py-3 mobileL:py-5 flex items-center 
        justify-between gap-x-8"
      >
        {/* left content - logo and menu btn */}
        <div className="flex items-center gap-x-4">
          <button
            className="px-[6px] py-[6px] rounded-[4px] flex items-center justify-center
            bg-blue-light text-primary-blue/80 duration-300 
            hover:bg-primary-blue/80 hover:text-white active:bg-transparent
            active:text-primary-blue active:shadow-[0_0_0_2px_#008ecc] 
            focus:shadow[0_0_0_2px_#008ecc]"
          >
            <CgMenuLeft size={24} />
          </button>

          <Link
            to="/"
            className="text-2xl text-primary-blue/80 font-bold 
            duration-300 hover:text-primary-blue/50 whitespace-nowrap"
          >
            ABC Market
          </Link>
        </div>

        {/* center content - SearchBox */}
        <SearchBar addStyles="hidden mobileL:flex" />

        {/* right content */}
        <div
          className="hidden mobileXL:flex items-center justify-center gap-x-5
          text-base leading-[18px] font-medium text-slate-500"
        >
          <Link
            to="/account"
            className="hidden tabletM:flex flex-col items-center gap-y-1
          [&>.item]:hover:text-primary-blue/80"
          >
            <FiUser size={24} className="text-primary-blue/80" />
            <span className="item duration-300">Account</span>
          </Link>

          <Link
            to="/orders"
            className="hidden tabletM:flex flex-col items-center gap-y-1
          [&>.item]:hover:text-primary-blue/80"
          >
            <BiSolidPackage size={24} className="text-primary-blue/80" />
            <span className="item duration-300">Orders</span>
          </Link>

          <Link
            to="/favorites"
            className="relative hidden tabletM:flex flex-col items-center gap-y-1
            [&>.item]:hover:text-primary-blue/80"
          >
            <span
              className="absolute text-white font-semibold text-xs
              -top-2 right-[4px] bg-red-400 rounded-xl pt-[1px]
              px-[6px] truncate min-w-[28px] max-w-[36px] text-center"
            >
              5
            </span>
            <HiOutlineHeart size={24} className="text-primary-blue/80" />
            <span className="item duration-300">Favorites</span>
          </Link>

          <Link
            to="/cart"
            className="relative flex flex-col items-center gap-y-1
            [&>.item]:hover:text-primary-blue/80"
          >
            <span
              className="absolute text-white font-semibold text-xs
              -top-2 -right-[10px] bg-red-400 rounded-xl pt-[1px]
              px-[6px] truncate min-w-[28px] max-w-[36px] text-center"
            >
              20
            </span>
            <FiShoppingCart size={24} className="text-primary-blue/80" />
            <span className="item duration-300">Cart</span>
          </Link>
        </div>

        {/* btn to show searchbar for mobile screens */}
        <MobileSearchBar open={mobileSearchBox} setOpen={setMobileSearchBox} />
      </div>
    </nav>
  );
};

export default Navbar;
