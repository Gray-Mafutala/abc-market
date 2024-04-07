import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface MobileMenuState {
  mobileMenuIsOpen: boolean;
}

const initialState: MobileMenuState = {
  mobileMenuIsOpen: false,
};

const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState,

  reducers: {
    openMobileMenu: (state) => {
      state.mobileMenuIsOpen = true;
    },

    closeMobileMenu: (state) => {
      state.mobileMenuIsOpen = false;
    },
  },
});

export const { openMobileMenu, closeMobileMenu } = mobileMenuSlice.actions;

export const selectMobileMenuIsOpen = (state: RootState) =>
  state.mobileMenu.mobileMenuIsOpen;

export default mobileMenuSlice;
