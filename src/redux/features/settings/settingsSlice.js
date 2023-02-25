import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export default settingsSlice.reducer;
