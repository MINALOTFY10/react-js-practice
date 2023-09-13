import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";
import authSlice from "./AuthSlice";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
