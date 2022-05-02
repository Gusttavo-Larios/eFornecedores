import * as React from "react";
import { useDispatch } from "react-redux";
import {
  clearDialogModal,
  setDialogModal,
} from "~/redux/reducers/modal.dialog.slice";

const useDialogModal = () => {
  const dispatch = useDispatch();

  function openDialogModal(message: string) {
    dispatch(setDialogModal({ message }));
  }

  function closeDialogModal() {
    dispatch(clearDialogModal());
  }

  return {
    closeDialogModal,
    openDialogModal,
  };
};

export default useDialogModal;
