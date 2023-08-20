import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { RxCaretSort } from "react-icons/rx";

type SearchBarProps = {
  addStyles?: string;
};

const sortingOptions = [
  { label: "Sort by relevance", value: "revelance" },
  { label: "Price: Low to High", value: "low-to-high" },
  { label: "Price: High to Low", value: "high-to-low" },
  { label: "Avg. Customer Review", value: "avg-review" },
];

const SearchBar = ({ addStyles }: SearchBarProps) => {
  const [sortBox, setSortBox] = useState(false);

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
        className="pl-12 pr-14 w-full h-12 leading-[18px] rounded-[10px] 
        border-2 border-transparent hover:border-primary-blue/40 
        focus:border-primary-blue/80 duration-300 text-gray-500 
        bg-transparent outline-none"
      />

      {/* container sorting options */}
      <div
        className={
          sortBox
            ? "relative [&>.list-sorting-options]:hover:scale-y-100"
            : "relative"
        }
      >
        {/* sorting btn */}
        <button
          onBlur={() => setSortBox(false)}
          onClick={() => setSortBox(true)}
          className="absolute -top-[11px] right-3 text-primary-blue 
          rounded-[4px] duration-300 hover:bg-primary-blue/80 
          hover:text-white active:bg-transparent active:text-primary-blue
          active:shadow-[0_0_0_2px_#008ecccc] z-[1]"
        >
          <RxCaretSort size={24} />
        </button>

        {/* list of sorting options */}
        <ul
          className="absolute top-0 right-0 bg-blue-light
          rounded-b-[10px] px-5 pt-8 pb-3 flex flex-col gap-y-3 
          text-gray-500 text-[14px] mobileM:text-base font-medium 
          shadow-[#2123261a_0px_10px_10px_-10px] 
          scale-y-0 duration-300 list-sorting-options"
        >
          {sortingOptions.map(({ label, value }) => (
            <li
              role="option"
              key={value}
              className="cursor-pointer whitespace-nowrap  list-none duration-300 
              hover:text-primary-blue/80"
            >
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
