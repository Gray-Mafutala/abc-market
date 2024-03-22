import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export const sortingOptionsValue = {
  DEFAULT: "",
  LOW_TO_HIGH: "price-asc-rank",
  HIGH_TO_LOW: "price-desc-rank",
  AVG_CUSTOMER_REVIEW: "review-rank",
};

export const productCategoriesValue = {
  ALL: "all",
  ELECTRONICS: "electronics",
  JEWELERY: "jewelery",
  MENS_CLOTHING: "men's clothing",
  WOMENS_CLOTHING: "women's clothing",
};

interface productFilteringState {
  sortingOption: string;
}

const initialState: productFilteringState = {
  sortingOption: sortingOptionsValue.DEFAULT,
};

const productFilteringSlice = createSlice({
  name: "productFiltering",
  initialState,
  reducers: {
    setSortingOption: (state, action: PayloadAction<string>) => {
      state.sortingOption = action.payload;
    },
  },
});

export const { setSortingOption } = productFilteringSlice.actions;

export const selectSortingOption = (state: RootState) =>
  state.productFiltering.sortingOption;

export default productFilteringSlice;
