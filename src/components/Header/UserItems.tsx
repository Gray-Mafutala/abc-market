import { Link } from "react-router-dom";

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
  notifStyles: string;
  iconStyles: string;
  titleStyles: string;
};

const UserItems = ({
  itemStyles,
  notifStyles,
  iconStyles,
  titleStyles,
}: UserItemsProps) => {
  return (
    <>
      {userItems.map(({ title, link, icon }) => (
          <Link key={title} to={link} className={itemStyles}>
          <span className={notifStyles}>5</span>
          <span className={iconStyles}>{icon}</span>
          <span className={titleStyles}>{title}</span>
        </Link>
      ))}
    </>
  );
};

export default UserItems;
