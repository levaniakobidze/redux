import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "authentification",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logOut(state) {
      state.isAuth = false;
    },
  },
});

export default authSlice;
