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
import {
  SortingOptionsValue,
  selectSortingOption,
  setSortingOption,
} from "../redux/slices/productFilteringSlice";

import { ProductType } from "../types";
import filterAndSortProducts from "../helpers/productFiltering";

import { TbHeartMinus } from "react-icons/tb";
import { RiDeleteBinFill } from "react-icons/ri";

import { useEffect } from "react";

const FavoritesPage = () => {
  const dispatch = useAppDispatch();
  const { favoritesList } = useAppSelector(selectFavorites);

  useEffect(() => {
    dispatch(setSearchValue(""));
    dispatch(setSortingOption(SortingOptionsValue.DEFAULT));
  }, [dispatch]);

  // to apply filters on favorites list (search by product title and description and sorting by one option)
  const valueToSearch = useAppSelector(selectSearchValue);
  const sortingOption = useAppSelector(selectSortingOption);

  const filteredFavoritesList =
    favoritesList &&
    filterAndSortProducts({
      products: favoritesList as ProductType[],
      valueToSearch,
      sortingOption: sortingOption as SortingOptionsValue,
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
          title="Clear all favorites"
          className="text-slate-500 hover:text-primary-blue p-1 duration-200"
        >
          <RiDeleteBinFill size={24}  />
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
