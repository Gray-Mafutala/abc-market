import { useState } from "react";
import { Link } from "react-router-dom";

import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import MobileSearchBar from "./MobileSearchBar";

//import { HiOutlineHeart } from "react-icons/hi";
//import { FiUser, FiShoppingCart } from "react-icons/fi";
//import { BiSolidPackage } from "react-icons/bi";
import UserItems from "./UserItems";

const Navbar = () => {
  const [mobileSearchBox, setMobileSearchBox] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="px-4 bg-white border-b border-b-[#ededed]">
      {/* center inner wrapper */}
      <div
        className="centered-container py-3 mobileL:py-5 flex items-center 
        justify-between gap-x-8"
      >
        {/* left content - logo and menu btn */}
        <div className="flex items-center gap-x-4">
          <MobileMenu open={mobileMenu} setOpen={setMobileMenu} />

          <h1 className="text-2xl text-primary-blue/80 font-bold 
            duration-300 hover:opacity-80 whitespace-nowrap">
            <Link
              to="/"
            >
              ABC <span className="text-slate-400">Market</span>
            </Link>
          </h1>
        </div>

        {/* center content - SearchBox */}
        <SearchBar addStyles="hidden mobileL:flex" />

        {/* right content - UserItems */}
        <div
          className="hidden mobileXL:flex items-center justify-center gap-x-5
          text-base leading-[18px] font-medium text-slate-500
          [&>*]:hidden 
          mobileXL:[&>*:nth-child(4)]:flex
          tabletM:[&>*]:flex"
        >
          <UserItems
            itemStyles="item relative min-w-[68px] w-full flex flex-col 
            items-center gap-y-1 
            [&>*:not(.notif)]:hover:text-primary-blue/80"
            notifStyles="absolute text-white font-semibold text-xs
            -top-2 -right-[10px] bg-red-400 rounded-xl pt-[1px] text-center
            px-[6px] truncate min-w-[28px] max-w-[36px] notif"
            iconStyles="text-2xl duration-300"
            titleStyles="duration-300"
          />
        </div>

        {/* btn to show SearchBar for mobile screens */}
        <MobileSearchBar open={mobileSearchBox} setOpen={setMobileSearchBox} />
      </div>
    </nav>
  );
};

export default Navbar;
