import { Link } from "react-router-dom";

import { TbCategory2 } from "react-icons/tb";
import { MdOutlinePhonelink } from "react-icons/md";
import { RiShirtFill } from "react-icons/ri";
import { GiBigDiamondRing, GiLargeDress } from "react-icons/gi";
import { LuStars } from "react-icons/lu";

const categories = [
  { title: "All categories", icon: <TbCategory2 />, link: "/" },
  { title: "Electronics", icon: <MdOutlinePhonelink />, link: "/" },
  { title: "Jewelery", icon: <GiBigDiamondRing />, link: "/" },
  { title: "Men's clothing", icon: <RiShirtFill />, link: "/" },
  { title: "Women's clothing", icon: <GiLargeDress />, link: "/" },
  { title: "Featured products", icon: <LuStars />, link: "/" },
];

type CategoryItems = {
  withIcon?: boolean;
  itemStyles: string;
  //  activeItemStyles: string;
};

const CategoryItems = ({
  withIcon = false,
  itemStyles,
}: //  activeItemStyles,
CategoryItems) => {
  return (
    <>
      {categories.map(({ title, icon, link }) => (
        <li key={title}>
          <Link
            to={link}
            className={`${itemStyles} flex items-center gap-x-4`}
          >
            {withIcon && (
              <span className="text-[24px] mobileL:text-[28px]">{icon}</span>
            )}

            {title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default CategoryItems;
