import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ProductType } from "../../types";

export const FAVORITES_LOCAL_STORAGE_KEY = "wishlist";

interface FavoritesState {
  favoritesList: ProductType[];
}

const storedFavorites = localStorage.getItem(FAVORITES_LOCAL_STORAGE_KEY);
const initialState: FavoritesState = {
  favoritesList: storedFavorites ? JSON.parse(storedFavorites) : [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,

  reducers: {
     toggleFavorite: (state, action: PayloadAction<ProductType>) => {
      if (
        !state.favoritesList.find((product) => product.id === action.payload.id)
      ) {
        state.favoritesList.push(action.payload);
      } else {
        state.favoritesList = state.favoritesList.filter(
          (product) => product.id !== action.payload.id
        );
      }
    },

    clearFavorites: (state) => {
      state.favoritesList = [];
    },
  },
});

export const { toggleFavorite, clearFavorites } =
  favoritesSlice.actions;
export const selectFavorites = (state: RootState) => state.favorites;
export const selectIsLiked = (state: RootState, id: number) =>
state.favorites.favoritesList.some((product) => product.id === id);
export const selectFavoritesCount = (state: RootState) => state.favorites.favoritesList.length;

export default favoritesSlice;
