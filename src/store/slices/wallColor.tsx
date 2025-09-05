"use client";

import { createSlice } from "@reduxjs/toolkit";

export type wallColorProps = {
  color: { roof: string; wall: string };
};

const initialState: { value: wallColorProps } = {
  value: {
    color: { roof: "#FF3F3F9C", wall: "#ccc" },
  },
};

export const wallColorSlice = createSlice({
  name: "wallColor",
  initialState,
  reducers: {
    setWallColor: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { setWallColor } = wallColorSlice.actions;
