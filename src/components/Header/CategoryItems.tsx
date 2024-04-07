import { NavLink } from "react-router-dom";

import { useAppDispatch } from "../../redux/hooks";
import { setSearchValue } from "../../redux/slices/searchBarSlice";
import { closeMobileMenu } from "../../redux/slices/mobileMenu";

import {
  SortingOptionsValue,
  setSortingOption,
} from "../../redux/slices/productFilteringSlice";

import { MdOutlinePhonelink } from "react-icons/md";
import { RiShirtFill } from "react-icons/ri";
import { GiBigDiamondRing, GiLargeDress } from "react-icons/gi";

const categories = [
  {
    title: "Electronics",
    icon: <MdOutlinePhonelink />,
    link: "electronics",
  },
  { title: "Jewelery", icon: <GiBigDiamondRing />, link: "jewelery" },
  { title: "Men's clothing", icon: <RiShirtFill />, link: "men's clothing" },
  {
    title: "Women's clothing",
    icon: <GiLargeDress />,
    link: "women's clothing",
  },
];

type CategoryItems = {
  withIcon?: boolean;
  itemStyles: string;
  activeItemStyles: string;
};

const CategoryItems = ({
  withIcon = false,
  itemStyles,
  activeItemStyles,
}: CategoryItems) => {
  const dispatch = useAppDispatch();

  const resetSearchBarFilters = () => {
    dispatch(setSearchValue(""));
    dispatch(setSortingOption(SortingOptionsValue.DEFAULT));
  };

  return (
    <>
      {categories.map(({ title, icon, link }) => (
        <li key={title} onClick={() => dispatch(closeMobileMenu())}>
          <NavLink
            to={`/products/category/${link}`}
            onClick={resetSearchBarFilters}
            className={({ isActive }) =>
              isActive
                ? `${activeItemStyles} flex items-center gap-x-4`
                : `${itemStyles} flex items-center gap-x-4`
            }
          >
            {withIcon && (
              <span className="text-[24px] mobileL:text-[28px]">{icon}</span>
            )}

            {title}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default CategoryItems;
