import {
  AnyAction,
  MiddlewareAPI,
  Dispatch,
  configureStore,
} from "@reduxjs/toolkit";

import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";
import favoritesSlice, {
  FAVORITES_LOCAL_STORAGE_KEY,
} from "./slices/favoritesSlice";

// middleware for saving favorites to localStorage
const localStorageMiddleware =
  (store: MiddlewareAPI) => (next: Dispatch) => (action: AnyAction) => {
    const result = next(action);
    localStorage.setItem(
      FAVORITES_LOCAL_STORAGE_KEY,
      JSON.stringify(store.getState().favorites.favoritesList)
    );
    return result;
  };

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    favorites: favoritesSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
