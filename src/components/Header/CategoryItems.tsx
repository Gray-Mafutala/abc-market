import { TbCategory2 } from "react-icons/tb";
import { MdOutlinePhonelink } from "react-icons/md";
import { RiShirtFill } from "react-icons/ri";
import { GiBigDiamondRing, GiLargeDress } from "react-icons/gi";
import { LuStars } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const categories = [
  { title: "All categories", icon: <TbCategory2 />, link: "all" },
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
  { title: "Featured products", icon: <LuStars />, link: "featured" },
];

type CategoryItems = {
  withIcon?: boolean;
  itemStyles: string;
  activeItemStyles: string;
  hideMobileMenu?: () => void;
};

const CategoryItems = ({
  withIcon = false,
  itemStyles,
  activeItemStyles,
  hideMobileMenu,
}: CategoryItems) => {
  return (
    <>
      {categories.map(({ title, icon, link }) => (
        <li key={title} onClick={hideMobileMenu}>
          <NavLink
            to={`/products/category/${link}`}
            className={({isActive}) =>
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
