import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";

import { User } from "../../types";

interface AuthState {
  currentUser: User | null;
  pending: boolean;
}

const initialState: AuthState = {
  currentUser: null,
  pending: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setPending: (state, action: PayloadAction<boolean>) => {
      state.pending = action.payload;
    },

    setUser: (state, action: PayloadAction<User>) => {
      const userSerialized = {
        id: action.payload.id,
        email: action.payload.email,
        displayName: action.payload.displayName,
        photoUrl: action.payload.photoUrl,
      };

      state.currentUser = userSerialized;
      state.pending = false;
    },

    removeUser: (state) => {
      state.currentUser = null;
      state.pending = false;
    },
  },
});

export const { setPending, setUser, removeUser } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice;
