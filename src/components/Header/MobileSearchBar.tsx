import ModalWrapper from "../Wrappers/ModalWrapper";
import SearchBar from "./SearchBar";

import { LuSearch } from "react-icons/lu";
import {
  closeMobileSearchBar,
  openMobileSearchBar,
  selectMobileSearchBarIsOpen,
} from "../../redux/slices/searchBarSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const MobileSearchBar = () => {
  const dispatch = useAppDispatch();
  const mobileSearchBarIsOpen = useAppSelector(selectMobileSearchBarIsOpen);

  return (
    <>
      {/* SearchBar wrapper */}
      <ModalWrapper
        isOpen={mobileSearchBarIsOpen}
        onClose={() => dispatch(closeMobileSearchBar())}
        modalWrapperAddStyles={
          mobileSearchBarIsOpen
            ? "inset-0 duration-300"
            : "inset-0 -translate-y-[150%] duration-300"
        }
        closeBtnAddStyles="-top-12 right-4"
        innerWrapperStyles="relative max-w-xl mx-auto mt-16 px-3 mobileM:px-4"
      >
    <SearchBar />
    </ModalWrapper>

      {/* btn to show SearchBar wrapper */}
      <button
        onClick={() => dispatch(openMobileSearchBar())}
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
