import React from "react";

import ModalWrapper from "../../ModalWrapper";
import SearchBar from ".";

import { LuSearch } from "react-icons/lu";

type MobileSearchBarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileSearchBar = ({ open, setOpen }: MobileSearchBarProps) => {
  return (
    <>
      {/* searchbox wrapper */}
      {open && (
        <ModalWrapper
          onClose={() => setOpen(false)}
          modalWrapperAddStyles="inset-0"
          modalContentContainerStyles="flex justify-center items-center 
          pt-16 px-4"
        >
          <SearchBar />
        </ModalWrapper>
      )}

      {/* btn to show searchbox wrapper */}
      <button
        onClick={() => setOpen(true)}
        className="block mobileL:hidden px-[6px] py-[6px] rounded-[4px]
        text-primary-blue/80 active:bg-primary-blue/80
        active:text-white duration-300"
      >
        <LuSearch size={24} />
      </button>
    </>
  );
};

export default MobileSearchBar;
