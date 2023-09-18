import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";

interface authSliceState {
  currentUser?: unknown;
  loading: boolean;
}

const initialState: authSliceState = {
  currentUser: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login: (state, action: PayloadAction<authSliceState>) => {
      state.currentUser = action.payload.currentUser;
    },

    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectUser = (state: RootState) => state.auth;
export default authSlice;
