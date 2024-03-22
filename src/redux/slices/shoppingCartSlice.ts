import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export const CART_LOCAL_STORAGE_KEY = "SHOPPING_CART";

interface ProductTypeForShoppingCartState {
  id: number;
  title: string;
  image: string;
  price: number;
  priceBeforeDiscount: number;
  quantity: number;
}

interface ShoppingCartState {
  shoppingCartItemsList: ProductTypeForShoppingCartState[];
  shoppingCartIsOpen: boolean;
}

const storedShoppingCart = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
const initialState: ShoppingCartState = {
  shoppingCartItemsList: storedShoppingCart ? JSON.parse(storedShoppingCart) : [],
  shoppingCartIsOpen: false,
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,

  reducers: {
    addItemToShoppingCart: (
      state,
      {
        payload: { id, title, image, price, priceBeforeDiscount, quantity },
      }: PayloadAction<ProductTypeForShoppingCartState>
    ) => {
      if (!state.shoppingCartItemsList.find((item) => item.id === id)) {
        const productToAdd = {
          id,
          title,
          image,
          price,
          priceBeforeDiscount,
          quantity,
        };
        state.shoppingCartItemsList.push(productToAdd);
      }
    },

    increaseItemQty: (state, action: PayloadAction<number>) => {
      const index = state.shoppingCartItemsList.findIndex(
        (item) => item.id === action.payload
      );

      if (index !== -1) {
        state.shoppingCartItemsList[index].quantity += 1;
      }
    },

    decreaseItemQty: (state, action: PayloadAction<number>) => {
      const index = state.shoppingCartItemsList.findIndex(
        (item) => item.id === action.payload
      );

      if (index !== -1) {
        state.shoppingCartItemsList[index].quantity -= 1;
      }
    },

    removeItemFromShoppingCart: (state, action: PayloadAction<number>) => {
      state.shoppingCartItemsList = state.shoppingCartItemsList.filter(
        (item) => item.id !== action.payload
      );
    },

    clearShoppingCart: (state) => {
      state.shoppingCartItemsList = [];
    },

    openShoppingCart: (state) => {
      state.shoppingCartIsOpen = true;
    },

    closeShoppingCart: (state) => {
      state.shoppingCartIsOpen = false;
    },
  },
});

export const {
  addItemToShoppingCart,
  increaseItemQty,
  decreaseItemQty,
  removeItemFromShoppingCart,
  clearShoppingCart,
  openShoppingCart,
  closeShoppingCart,
} = shoppingCartSlice.actions;

export const selectShoppingCart = (state: RootState) => state.shoppingCart;

export const selectShoppingCartIsOpen = (state: RootState) =>
  state.shoppingCart.shoppingCartIsOpen;

export const selectQtyOfSpecificItem = (state: RootState, id: number) =>
  state.shoppingCart.shoppingCartItemsList.find((item) => item.id === id)?.quantity ||
  0;

export const selectPriceBeforeDiscountOfSpecificItem = (
  state: RootState,
  id: number
) =>
  state.shoppingCart.shoppingCartItemsList.find((item) => item.id === id)
    ?.priceBeforeDiscount || null;

export const selectShoppingCartSumItemsQty = (state: RootState) =>
  state.shoppingCart.shoppingCartItemsList.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

export const selectShoppingCartTotalPrice = (state: RootState) =>
  state.shoppingCart.shoppingCartItemsList
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

export const selectShoppingCartSumDiscount = (state: RootState) =>
  state.shoppingCart.shoppingCartItemsList
    .reduce(
      (acc, item) =>
        acc + (item.priceBeforeDiscount - item.price) * item.quantity,
      0
    )
    .toFixed(2);

export default shoppingCartSlice;
