import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalIsVisible: false,
    isDialog: false,
    message: "",
    dialogResponse: false,
  },
  reducers: {
    openModal(state, { payload }) {
      const { isDialog, message } = payload;
      state.modalIsVisible = true;
      state.isDialog = isDialog;
      state.message = message;
    },
    closeModal(state) {
      state.modalIsVisible = false;
      state.dialogResponse = false;
      state.isDialog = false;
      state.message = "";
    },
    answerDialog(state, { payload }) {
      const { dialogResponse } = payload;
      state.dialogResponse = dialogResponse;
    },
  },
});

export const { closeModal, openModal, answerDialog } = modalSlice.actions;
export default modalSlice.reducer;
