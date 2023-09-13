import { createSlice, configureStore } from "@reduxjs/toolkit";
import ToggleSlice from "./ToggleSlice";
import StoreSlice from "./StoreSlice";

const store = configureStore({
  reducer: { toggle: ToggleSlice.reducer, store: StoreSlice.reducer },
});

export const toggleActions = ToggleSlice.actions;
export const storeActions = StoreSlice.actions;

export default store;
