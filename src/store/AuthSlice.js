import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthunticeted: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthunticeted = true;
    },
    logout(state) {
      state.isAuthunticeted = false;
    },
  },
});

export default authSlice;