import React, { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  closeMobileSearchBar,
  selectMobileSearchBarIsOpen,
  selectSearchValue,
  setSearchValue,
} from "../../redux/slices/searchBarSlice";

import { LuSearch } from "react-icons/lu";
import { RxCaretSort } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import {
  selectSortingOption,
  setSortingOption,
  sortingOptionsValue,
} from "../../redux/slices/productFilteringSlice";

type SearchBarProps = {
  addStyles?: string;
};

const sortingItems = [
  { label: "Sort by relevance", value: sortingOptionsValue.DEFAULT },
  { label: "Price: Low to High", value: sortingOptionsValue.LOW_TO_HIGH },
  { label: "Price: High to Low", value: sortingOptionsValue.HIGH_TO_LOW },
  {
    label: "Avg. Customer Review",
    value: sortingOptionsValue.AVG_CUSTOMER_REVIEW,
  },
];

const SearchBar = ({ addStyles }: SearchBarProps) => {
  const searchValue = useAppSelector(selectSearchValue);
  const sortingValue = useAppSelector(selectSortingOption);
  const mobileSearchBarIsOpen = useAppSelector(selectMobileSearchBarIsOpen);
  const dispatch = useAppDispatch();

  const [sortBox, setSortBox] = useState(false);

  const setSortingOptionAndHideSortBox = (option: string) => {
    dispatch(setSortingOption(option));
    setSortBox(false);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.currentTarget.value));
  };

  const toCloseMobileSearchBar = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // will only be called if mobileSearchBar is open
    if (e.key === "Enter" && mobileSearchBarIsOpen)
      dispatch(closeMobileSearchBar());
  };

  return (
    <div
      className={`relative flex items-center justify-between max-w-xl 
      w-full bg-blue-light rounded-[10px] ${addStyles}`}
    >
      {/* search icon */}
      <LuSearch size={20} className="absolute left-4 text-primary-blue/80" />

      {/* input search */}
      <input
        type="search"
        placeholder="Search in market..."
        onChange={handleSearch}
        onKeyDown={toCloseMobileSearchBar}
        value={searchValue}
        className="pl-12 pr-14 w-full h-12 leading-[18px] rounded-[10px] 
        border-2 border-transparent hover:border-primary-blue/40 
        focus:border-primary-blue/80 duration-300 text-slate-500 
        bg-transparent font-medium text-lg outline-none"
      />

      {/* container sorting options */}
      <div
        className={
          sortBox
            ? "relative [&>.list-sorting-options]:hover:scale-y-100 z-[1]"
            : "relative"
        }
      >
        {/* sorting btn */}
        <button
          onBlur={() => setSortBox(false)}
          onMouseDown={() => setSortBox(true)}
          className="absolute -top-[11px] right-3 text-primary-blue 
          rounded-[4px] duration-300 hover:bg-primary-blue/80 
          hover:text-white active:bg-transparent active:text-primary-blue
          active:shadow-[0_0_0_2px_#008ecccc] z-[1]"
        >
          <RxCaretSort size={24} />
        </button>

        {/* list of sorting options */}
        <ul
          className="absolute top-0 right-0 bg-blue-light rounded-b-[10px]
          pt-8 pb-3 flex flex-col gap-y-1 text-gray-500 text-[14px]
          mobileM:text-base font-medium shadow-[#2123261a_0px_10px_10px_-10px]
          scale-y-0 duration-200 ease-out list-sorting-options"
        >
          {sortingItems.map(({ label, value }) => (
            <li
              role="option"
              key={value}
              onMouseDown={() =>
                value !== sortingValue && setSortingOptionAndHideSortBox(value)
              }
              className={
                value === sortingValue
                  ? `cursor-pointer whitespace-nowrap list-none duration-300 
                    text-primary-blue font-bold px-5 py-2`
                  : `cursor-pointer whitespace-nowrap list-none duration-300 
                    hover:text-primary-blue/80 px-5 py-2`
              }
            >
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* clear search btn */}
      {searchValue !== "" && (
        <button
          onClick={() => dispatch(setSearchValue(""))}
          className="absolute top-[15px] right-11 text-primary-blue 
          rounded-[4px] duration-300 hover:bg-primary-blue/80
          hover:text-white active:bg-transparent active:text-primary-blue
          active:shadow-[0_0_0_2px_#008ecccc] z-[2]"
        >
          <CgClose size={20} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
