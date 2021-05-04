import { createSlice } from "@reduxjs/toolkit";
import { login } from "./thunks";

const initialState = {
  user: null,
  token: null,
  authenticated: false,
  subdomain: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.authenticated = false;
    },
    getSubdomain: (state, action) => {
      state.subdomain = action.payload;
    },
    removeError: (state, action) => {
      state.error = null;
    },
  },
  extraReducers: {
    [login.fulfilled.toString()]: (state, action) => {
      const data = action.payload.data;
      state.authenticated = true;
      state.token = data.token;
    },
    [login.rejected.toString()]: (state, action) => {
      state.error = true;
    },
  },
});

export const { logout, getSubdomain, removeError } = authSlice.actions;

export default authSlice.reducer;
