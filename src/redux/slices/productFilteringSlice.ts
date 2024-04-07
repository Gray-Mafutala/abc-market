import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export enum SortingOptionsValue {
  DEFAULT,
  LOW_TO_HIGH,
  HIGH_TO_LOW,
  AVG_CUSTOMER_REVIEW,
}

interface productFilteringState {
  sortingOption: SortingOptionsValue;
}

const initialState: productFilteringState = {
  sortingOption: SortingOptionsValue.DEFAULT,
};

const productFilteringSlice = createSlice({
  name: "productFiltering",
  initialState,
  reducers: {
    setSortingOption: (state, action: PayloadAction<SortingOptionsValue>) => {
      state.sortingOption = action.payload;
    },
  },
});

export const { setSortingOption } = productFilteringSlice.actions;

export const selectSortingOption = (state: RootState) =>
  state.productFiltering.sortingOption;

export default productFilteringSlice;
