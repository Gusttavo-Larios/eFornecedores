import * as React from "react";
import Modal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/redux";
import { closeDialogModal } from "~/redux/reducers/modal.dialog.slice";
import { ButtonText, Button, Container, Message, Overlap } from "./styles";

function DialogModal() {
  const { modalIsVisible, message } = useSelector(
    (state: RootState) => state.modalDialogReducer
  );
  const dispatch = useDispatch();

  function closeDialoggdal() {
    dispatch(closeDialogModal());
  }

  return (
    <Modal isVisible={modalIsVisible}>
      <Overlap>
        <Container>
          <Message>{message}</Message>
          <Button activeOpacity={0.8} onPress={() => closeDialoggdal()}>
            <ButtonText>Ok</ButtonText>
          </Button>
        </Container>
      </Overlap>
    </Modal>
  );
}

export default DialogModal;
