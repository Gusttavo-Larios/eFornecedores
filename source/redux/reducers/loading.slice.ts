import { createSlice } from "@reduxjs/toolkit";

const loading = createSlice({
  name: "loading",
  initialState: {
    isLoading: false,
  },
  reducers: {
    activateLoading(current_state) {
      current_state.isLoading = true;
    },
    disableLoading(current_state) {
      current_state.isLoading = false;
    },
  },
});

export const { activateLoading, disableLoading } = loading.actions;
export default loading.reducer;
