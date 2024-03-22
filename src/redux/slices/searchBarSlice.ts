import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface SearchBarState {
  searchValue: string;
  mobileSearchBarIsOpen: boolean;
}

const initialState: SearchBarState = {
  searchValue: "",
  mobileSearchBarIsOpen: false,
};

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,

  reducers: {
    openMobileSearchBar: (state) => {
      state.mobileSearchBarIsOpen = true;
    },

    closeMobileSearchBar: (state) => {
      state.mobileSearchBarIsOpen = false;
    },

    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { openMobileSearchBar, closeMobileSearchBar, setSearchValue } =
  searchBarSlice.actions;

export const selectSearchValue = (state: RootState) =>
  state.searchBar.searchValue;

export const selectMobileSearchBarIsOpen = (state: RootState) =>
  state.searchBar.mobileSearchBarIsOpen;

export default searchBarSlice;
