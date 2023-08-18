import React, { useState } from "react";

import ModalWrapper from "../ModalWrapper";
import CategoryItems from "./CategoryItems";
import UserItems from "./UserItems";

import { CgMenuLeft } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { TbTruckDelivery, TbCategory2, TbDiscount2 } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";

type MobileMenuProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const verticalNavItems = [
  { icon: <FiUser />, position: 1 },
  { icon: <TbTruckDelivery />, position: 2 },
  { icon: <TbCategory2 />, position: 3 },
];

const MobileMenu = ({ open, setOpen }: MobileMenuProps) => {
  const [current, setCurrent] = useState(1);

  return (
    <>
      {/* searchbox wrapper */}
      {open && (
        <ModalWrapper
          onClose={() => setOpen(false)}
          modalWrapperAddStyles="inset-0"
          closeBtnAddStyles="top-3 right-3 mobileM:-right-10"
          innerWrapperStyles="relative flex justify-between max-w-[400px] 
          min-h-screen bg-white text-gray-500 font-medium"
        >
          {/* vertical nav */}
          <div className="flex flex-col border-r border-r-gray-200 py-14">
            {verticalNavItems.map(({ icon, position }) => (
              <button
                key={position}
                onClick={() => setCurrent(position)}
                className={
                  position === current
                    ? `after:block after:w-6 after:h-[1px] after:mx-auto
                        after:mt-2 after:bg-gray-200 px-2 py-1 mobileL:px-3 
                        mobileL:py-2 border-l-4 border-l-primary-blue/80
                        text-2xl mobileL:text-4xl text-primary-blue/80`
                    : `after:block after:w-6 after:h-[1px] after:mx-auto
                        after:mt-2 after:bg-gray-200 px-2 py-1 mobileL:px-3 
                        mobileL:py-2 border-l-4 border-l-transparent
                        text-2xl mobileL:text-4xl text-slate-400
                        hover:text-primary-blue/80 duration-300`
                }
              >
                {icon}
              </button>
            ))}
          </div>

          {/* 1 - account, orders, ... */}
          {current === 1 && (
            <div
              className="flex-grow px-4 pt-16 pb-8 flex flex-col items-start 
              gap-y-5"
            >
              <UserItems
                itemStyles="relative w-full flex items-center gap-x-4
                [&>*:not(.notif)]:hover:text-primary-blue/80"
                notifStyles="absolute right-0 font-semibold text-white
                bg-red-400 text-sm rounded-full px-[6px] py-1 truncate 
                min-w-[28px] max-w-[48px] text-center notif"
                iconStyles="text-[24px] mobileL:text-[28px] duration-300"
                titleStyles="text-base mobileL:text-lg duration-300"
              />
            </div>
          )}

          {/* 2 - welcome, location,... */}
          {current === 2 && (
            <div
              className="flex-grow px-4 pt-16 pb-8 flex flex-col items-start
              gap-y-5 text-base mobileL:text-lg"
            >
              <p className="font-normal">Welcome to worldwide ABC Market!</p>

              <button
                className="flex items-center gap-x-4 duration-300
                hover:text-primary-blue"
              >
                <MdLocationOn
                  className="text-primary-blue text-[24px]
                  mobileL:text-[28px]"
                />
                <span>Select your location</span>
              </button>

              <button
                className="flex items-center gap-x-4 duration-300
                hover:text-primary-blue"
              >
                <TbTruckDelivery
                  className="text-primary-blue text-[24px]
                  mobileL:text-[28px]"
                />
                <span>Track your order</span>
              </button>

              <button
                className="flex items-center gap-x-4 duration-300
                hover:text-primary-blue"
              >
                <TbDiscount2
                  className="text-primary-blue text-[24px]
                  mobileL:text-[28px]"
                />
                <span>All Offers</span>
              </button>
            </div>
          )}

          {/* 3 - categories */}
          {current === 3 && (
            <ul
              className="flex-grow px-4 pt-16 pb-8 flex flex-col items-start 
              gap-y-5 text-base mobileL:text-lg"
            >
              <CategoryItems
                withIcon={true}
                itemStyles="leading-[18px] whitespace-nowrap duration-300
                hover:text-primary-blue/80"
              />
            </ul>
          )}
        </ModalWrapper>
      )}

      {/* btn to show mobile menu */}
      <button
        onClick={() => setOpen(true)}
        className="px-[6px] py-[6px] rounded-[4px] flex items-center 
        justify-center odd:bg-blue-light text-primary-blue/80 duration-300 
        hover:bg-primary-blue/80 hover:text-white active:bg-transparent
        active:text-primary-blue active:shadow-[0_0_0_2px_#008ecc]
        focus:shadow[0_0_0_2px_#008ecc]
        tabletM:hidden"
      >
        <CgMenuLeft size={24} />
      </button>
    </>
  );
};

export default MobileMenu;