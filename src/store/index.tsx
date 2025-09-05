import { configureStore } from "@reduxjs/toolkit";
import { wallColorSlice } from "./slices/wallColor";
export const store = configureStore({
  reducer: {
    [wallColorSlice.name]: wallColorSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
