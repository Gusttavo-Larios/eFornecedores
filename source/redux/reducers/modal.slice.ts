import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalIsVisible: false,
    message: "",
  },
  reducers: {
    openModal(state, { payload }) {
      const { message } = payload;
      state.modalIsVisible = true;
      state.message = message;
    },
    closeModal(state) {
      state.modalIsVisible = false;
      state.message = "";
    },
  },
});

export const { closeModal, openModal } = modalSlice.actions;
export default modalSlice.reducer;
