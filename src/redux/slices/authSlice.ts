import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";

import { auth, signInWithEmailAndPassword, signOut } from "../../firebase";
import { LoginFormValues, User } from "../../models";

type CustomAuthError = {
  code: string;
  message: string;
};

interface AuthState {
  currentUser: User | null;
  pending: boolean;
  error: CustomAuthError | null;
}

const initialState: AuthState = {
  currentUser: null,
  pending: false,
  error: null,
};

export const userSignIn = createAsyncThunk(
  "auth/userSignIn",
  async ({ email, password }: LoginFormValues, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userSerialized = {
        id: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName,
        photoUrl: userCredential.user.photoURL,
      };

      return userSerialized;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return thunkAPI.rejectWithValue({
        code: error.code,
        message: error.message,
      });
    }
  }
);

export const userSignOut = createAsyncThunk("auth/userSignOut", async () => {
  await signOut(auth);
});

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
      state.error = null;
    },

    removeUser: (state) => {
      state.currentUser = null;
      state.pending = false;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    // sign in
    builder
      .addCase(userSignIn.pending, (state) => {
        state.pending = true;
        state.error = null;
      })
      .addCase(userSignIn.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.pending = false;
        state.error = null;
      })
      .addCase(userSignIn.rejected, (state, action) => {
        state.error = action.payload as CustomAuthError;
        state.pending = false;
        state.currentUser = null;
      });

    // sign out
    builder
      .addCase(userSignOut.pending, (state) => {
        state.pending = true;
        state.error = null;
      })
      .addCase(userSignOut.fulfilled, (state) => {
        state.currentUser = null;
        state.pending = false;
        state.error = null;
      })
      .addCase(userSignOut.rejected, (state, action) => {
        state.error = action.payload as CustomAuthError;
        state.pending = false;
      });
  },
});

export const { setPending, setUser, removeUser } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice;
