import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    refresh_screen: false,
  },
  reducers: {
    refreshScrenn(currentState) {
      currentState.refresh_screen = !currentState.refresh_screen;
    },
  },
});

export const { refreshScrenn } = homeSlice.actions;
export default homeSlice.reducer;
