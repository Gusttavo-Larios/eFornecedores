import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal_dialog",
  initialState: {
    modalIsVisible: false,
    message: "",
  },
  reducers: {
    setDialogModal(currentState, { payload }) {
      const { message } = payload;
      currentState.modalIsVisible = true;
      currentState.message = message;
    },
    clearDialogModal(currentState) {
      currentState.modalIsVisible = false;
      currentState.message = "";
    },
  },
});

export const { clearDialogModal, setDialogModal } = modalSlice.actions;
export default modalSlice.reducer;
