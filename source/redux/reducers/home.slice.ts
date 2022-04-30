import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    refresh_screen: false,
  },
  reducers: {
    refreshScrenn(state) {
      state.refresh_screen = !state.refresh_screen;
    },
  },
});

export const { refreshScrenn } = homeSlice.actions;
export default homeSlice.reducer;
