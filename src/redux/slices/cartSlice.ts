import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export const CART_LOCAL_STORAGE_KEY = "cart";

interface ProductTypeForCartState {
  id: number;
  title: string;
  image: string;
  price: number;
  priceBeforeDiscount: number;
  quantity: number;
}

interface CartState {
  cartItemsList: ProductTypeForCartState[];
}

const storedCart = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
const initialState: CartState = {
  cartItemsList: storedCart ? JSON.parse(storedCart) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItemToCart: (
      state,
      {
        payload: { id, title, image, price, priceBeforeDiscount, quantity },
      }: PayloadAction<ProductTypeForCartState>
    ) => {
      if (!state.cartItemsList.find((item) => item.id === id)) {
        const productToAdd = {
          id,
          title,
          image,
          price,
          priceBeforeDiscount,
          quantity,
        };
        state.cartItemsList.push(productToAdd);
      }
    },

    increaseItemQty: (state, action: PayloadAction<number>) => {
      const index = state.cartItemsList.findIndex(
        (item) => item.id === action.payload
      );

      if (index !== -1) {
        state.cartItemsList[index].quantity += 1;
      }
    },

    decreaseItemQty: (state, action: PayloadAction<number>) => {
      const index = state.cartItemsList.findIndex(
        (item) => item.id === action.payload
      );

      if (index !== -1) {
        state.cartItemsList[index].quantity -= 1;
      }
    },

    removeItemFromCart: (state, action: PayloadAction<number>) => {
      state.cartItemsList = state.cartItemsList.filter(
        (item) => item.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.cartItemsList = [];
    },
  },
});

export const {
  addItemToCart,
  increaseItemQty,
  decreaseItemQty,
  removeItemFromCart,
  clearCart,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export const selectQtyOfSpecificItem = (state: RootState, id: number) =>
  state.cart.cartItemsList.find((item) => item.id === id)?.quantity || 0;

export const selectPriceBeforeDiscountOfSpecificItem = (
  state: RootState,
  id: number
) =>
  state.cart.cartItemsList.find((item) => item.id === id)
    ?.priceBeforeDiscount || null;

export const selectCartSumItemsQty = (state: RootState) =>
  state.cart.cartItemsList.reduce((acc, item) => acc + item.quantity, 0);

export const selectCartTotalPrice = (state: RootState) =>
  state.cart.cartItemsList
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

export const selectCartSumDiscount = (state: RootState) =>
  state.cart.cartItemsList
    .reduce(
      (acc, item) =>
        acc + (item.priceBeforeDiscount - item.price) * item.quantity,
      0
    )
    .toFixed(2);

export default cartSlice;
