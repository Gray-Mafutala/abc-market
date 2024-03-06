import { NavLink } from "react-router-dom";

import ShoppingCart from "../ShoppingCart";

import { HiOutlineHeart } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { BiSolidPackage } from "react-icons/bi";

import { selectFavoritesCount } from "../../redux/slices/favoritesSlice";
import { useAppSelector } from "../../redux/hooks";

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
  shoppingCartIsOpen: boolean;
  setOpenShoppingCart: React.Dispatch<React.SetStateAction<boolean>>;
  hideMobileMenu?: () => void;
};

const UserItems = ({
  itemStyles,
  activeItemStyles,
  notifStyles,
  iconStyles,
  titleStyles,
  shoppingCartIsOpen,
  setOpenShoppingCart,
  hideMobileMenu,
}: UserItemsProps) => {
  const favoritesCount = useAppSelector(selectFavoritesCount);

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
          {title === "Favorites" && favoritesCount > 0 && (
            <span className={notifStyles}>{favoritesCount}</span>
          )}
          <span className={iconStyles}>{icon}</span>
          <span className={titleStyles}>{title}</span>
        </NavLink>
      ))}

      <ShoppingCart
        open={shoppingCartIsOpen}
        setOpen={setOpenShoppingCart}
        hideMobileMenu={hideMobileMenu}
        cartBtnStyles={{ itemStyles, notifStyles, iconStyles, titleStyles }}
      />
    </>
  );
};

export default UserItems;
