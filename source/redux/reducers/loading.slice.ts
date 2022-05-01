import { createSlice } from "@reduxjs/toolkit";

const loading = createSlice({
  name: "loading",
  initialState: {
    isLoading: false,
  },
  reducers: {
    activateLoading(currentState) {
      currentState.isLoading = true;
    },
    disableLoading(currentState) {
      currentState.isLoading = false;
    },
  },
});

export const { activateLoading, disableLoading } = loading.actions;
export default loading.reducer;
