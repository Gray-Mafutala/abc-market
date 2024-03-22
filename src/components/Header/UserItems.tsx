import { NavLink } from "react-router-dom";

import ShoppingCart from "../ShoppingCart";

import { HiOutlineHeart } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { BiSolidPackage } from "react-icons/bi";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { closeMobileMenu } from "../../redux/slices/mobileMenu";
import { selectFavoritesCount } from "../../redux/slices/favoritesSlice";
import { selectAuth } from "../../redux/slices/authSlice";

const userItems = [
  { title: "Account", link: "/account", icon: <FiUser /> },
  { title: "Orders", link: "/orders", icon: <BiSolidPackage /> },
  { title: "Favorites", link: "/favorites", icon: <HiOutlineHeart /> },
];

type UserItemsProps = {
  itemStyles: string;
  activeItemStyles: string;
  notifStyles: string;
  iconStyles: string;
  titleStyles: string;
};

const UserItems = ({
  itemStyles,
  activeItemStyles,
  notifStyles,
  iconStyles,
  titleStyles,
}: UserItemsProps) => {
  const { currentUser } = useAppSelector(selectAuth);
  const favoritesCount = useAppSelector(selectFavoritesCount);

  const dispatch = useAppDispatch();

  return (
    <>
      {userItems.map(({ title, link, icon }) => (
        <NavLink
          key={title}
          onClick={() => dispatch(closeMobileMenu())}
          to={link}
          className={({ isActive }) =>
            isActive ? `${activeItemStyles}` : `${itemStyles}`
          }
        >
          {title === "Favorites" && currentUser && favoritesCount > 0 && (
            <span className={notifStyles}>{favoritesCount}</span>
          )}
          <span className={iconStyles}>{icon}</span>
          <span className={titleStyles}>{title}</span>
        </NavLink>
      ))}

      <ShoppingCart
        cartBtnStyles={{ itemStyles, notifStyles, iconStyles, titleStyles }}
      />
    </>
  );
};

export default UserItems;
