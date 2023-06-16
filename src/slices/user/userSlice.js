import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    logout: (state) => {
      state.user = null;
    },
    startLoadingLogin: (state) => {
      state.isLoading = true;
    },
  },
});

export const { login, logout, startLoadingLogin } = userSlice.actions;
