"use client";

import { createSlice } from "@reduxjs/toolkit";

export type wallColorProps = {
  color: string;
};

const initialState: { value: wallColorProps } = {
  value: {
    color: "#FF3F3F9C",
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
