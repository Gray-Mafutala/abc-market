import { NavLink } from "react-router-dom";

import { HiOutlineHeart } from "react-icons/hi";
import { FiShoppingCart, FiUser } from "react-icons/fi";

import { BiSolidPackage } from "react-icons/bi";

const userItems = [
  { title: "Account", link: "/account", icon: <FiUser /> },
  { title: "Orders", link: "/orders", icon: <BiSolidPackage /> },
  { title: "Favorites", link: "/favorites", icon: <HiOutlineHeart /> },
  { title: "Cart", link: "/cart", icon: <FiShoppingCart /> },
];

type UserItemsProps = {
  itemStyles: string;
  activeItemStyles: string;
  notifStyles: string;
  iconStyles: string;
  titleStyles: string;
  hideMobileMenu?: () => void;
};

const UserItems = ({
  itemStyles,
  activeItemStyles,
  notifStyles,
  iconStyles,
  titleStyles,
  hideMobileMenu,
}: UserItemsProps) => {
  return (
    <>
      {userItems.map(({ title, link, icon }) => (
        <NavLink
          key={title}
          onClick={hideMobileMenu}
          to={link}
          className={({ isActive }) =>
            isActive ? `${activeItemStyles}` : `${itemStyles}`
          }
        >
          <span className={notifStyles}>5</span>
          <span className={iconStyles}>{icon}</span>
          <span className={titleStyles}>{title}</span>
        </NavLink>
      ))}
    </>
  );
};

export default UserItems;
