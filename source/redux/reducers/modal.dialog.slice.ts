import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal_dialog",
  initialState: {
    modalIsVisible: false,
    message: "",
  },
  reducers: {
    openDialogModal(currentState, { payload }) {
      const { message } = payload;
      currentState.modalIsVisible = true;
      currentState.message = message;
    },
    closeDialogModal(currentState) {
      currentState.modalIsVisible = false;
      currentState.message = "";
    },
  },
});

export const { closeDialogModal, openDialogModal } = modalSlice.actions;
export default modalSlice.reducer;
