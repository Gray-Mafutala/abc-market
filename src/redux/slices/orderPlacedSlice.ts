import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export enum OrderPlacedStatusEnum {
  Success,
  Error,
}

interface orderPlacedState {
  pending: boolean;
  status: OrderPlacedStatusEnum | undefined;
  error: unknown;
}

const initialState: orderPlacedState = {
  pending: false,
  status: undefined,
  error: null,
};

const orderPlacedSlice = createSlice({
  name: "orderPlaced",
  initialState,

  reducers: {
    setOrderPlacedPending: (state, action: PayloadAction<boolean>) => {
      state.pending = action.payload;
      state.status = undefined;
      state.error = null;
    },

    setOrderPlacedStatus: (
      state,
      action: PayloadAction<OrderPlacedStatusEnum | undefined>
    ) => {
      state.status = action.payload;
      state.error = null;
      state.pending = false;
    },

    setOrderPlacedError: (state, action: PayloadAction<unknown>) => {
      state.error = action.payload;
      state.status = OrderPlacedStatusEnum.Error;
      state.pending = false;
    },
  },
});

export const {
  setOrderPlacedPending,
  setOrderPlacedStatus,
  setOrderPlacedError,
} = orderPlacedSlice.actions;

export const selectOrderPlaced = (state: RootState) => state.orderPlaced;

export const selectOrderPlacedStatus = (state: RootState) =>
  state.orderPlaced.status;

export const selectOrderPlacedPending = (state: RootState) =>
  state.orderPlaced.pending;

export default orderPlacedSlice;
