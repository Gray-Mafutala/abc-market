import {
  AnyAction,
  MiddlewareAPI,
  Dispatch,
  configureStore,
} from "@reduxjs/toolkit";

import authSlice from "./slices/authSlice";
import productFilteringSlice from "./slices/productFilteringSlice";
import searchBarSlice from "./slices/searchBarSlice";
import mobileMenuSlice from "./slices/mobileMenu";

import shoppingCartSlice, {
  CART_LOCAL_STORAGE_KEY,
} from "./slices/shoppingCartSlice";

import favoritesSlice, {
  FAVORITES_LOCAL_STORAGE_KEY,
} from "./slices/favoritesSlice";

// middleware for saving favorites to localStorage
const getFavoritesListFromLocalStorage =
  (store: MiddlewareAPI) => (next: Dispatch) => (action: AnyAction) => {
    const result = next(action);
    localStorage.setItem(
      FAVORITES_LOCAL_STORAGE_KEY,
      JSON.stringify(store.getState().favorites.favoritesList)
    );
    return result;
  };

// middleware for saving shopping cart items to localStorage
const getCartItemsFromLocalStorage =
  (store: MiddlewareAPI) => (next: Dispatch) => (action: AnyAction) => {
    const result = next(action);
    localStorage.setItem(
      CART_LOCAL_STORAGE_KEY,
      JSON.stringify(store.getState().shoppingCart.shoppingCartItemsList)
    );
    return result;
  };

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    shoppingCart: shoppingCartSlice.reducer,
    favorites: favoritesSlice.reducer,
    searchBar: searchBarSlice.reducer,
    productFiltering: productFilteringSlice.reducer,
    mobileMenu: mobileMenuSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(getFavoritesListFromLocalStorage)
      .concat(getCartItemsFromLocalStorage),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
