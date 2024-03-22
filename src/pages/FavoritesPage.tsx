import UserItemsPageWrapper from "../components/Wrappers/UserItemsPageWrapper";
import ProductCard from "../components/Products/ProductCard";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  clearFavorites,
  selectFavorites,
} from "../redux/slices/favoritesSlice";

import {
  selectSearchValue,
  setSearchValue,
} from "../redux/slices/searchBarSlice";
import { selectSortingOption } from "../redux/slices/productFilteringSlice";

import { ProductType } from "../types";
import filterAndSortProducts, {
  sortingOptionsType,
} from "../helpers/productFiltering";

import { TbHeartMinus } from "react-icons/tb";
import { MdDeleteSweep } from "react-icons/md";
import { useEffect } from "react";

const FavoritesPage = () => {
  const dispatch = useAppDispatch();
  const { favoritesList } = useAppSelector(selectFavorites);

  useEffect(() => {
    dispatch(setSearchValue(""));
  }, [dispatch]);

  // to apply filters on favorites list (search by product title and description and sorting by one option)
  const valueToSearch = useAppSelector(selectSearchValue);
  const sortingOption = useAppSelector(selectSortingOption);

  const filteredFavoritesList =
    favoritesList &&
    filterAndSortProducts({
      products: favoritesList as ProductType[],
      valueToSearch,
      sortingOption: sortingOption as sortingOptionsType,
    });

  const favoritesCount = filteredFavoritesList.length;

  return (
    <UserItemsPageWrapper
      title="My wish list"
      labelForItemsCount="favorites"
      itemsCount={favoritesCount}
      bodyContentStyles={
        favoritesCount === 0
          ? "flex flex-col text-center gap-x-3"
          : "grid grid-cols-1 gap-6 mobileXL:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4"
      }
      btnClearItems={
        <button
          onClick={() => dispatch(clearFavorites())}
          className=" flex items-center gap-x-1 px-2 py-1 rounded-md font-medium
          bg-primary-blue text-white hover:bg-slate-700 hover:text-white/90 duration-300"
        >
          <MdDeleteSweep className="text-2xl mobileM:text-3xl" />
          <span className="hidden mobileM:block">Clear all</span>
        </button>
      }
    >
      {favoritesCount === 0 ? (
        <div className="mt-4 flex flex-col items-center text-center gap-y-2">
          <TbHeartMinus className="text-8xl text-slate-300" />
          <p className="text-lg text-slate-400 font-medium tracking-wide">
            You don&apos;t have any favorites yet.
          </p>
        </div>
      ) : (
        filteredFavoritesList.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
      )}
    </UserItemsPageWrapper>
  );
};

export default FavoritesPage;
