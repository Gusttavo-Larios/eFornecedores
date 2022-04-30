import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/redux";
import { closeModal } from "~/redux/reducers/modal.slice";
import { ButtonText, Button, Container, Message, Overlap } from "./styles";

import Modal from "react-native-modal";

function DialogModal() {
  const { modalIsVisible, message } = useSelector(
    (state: RootState) => state.modalReducer
  );
  const dispatch = useDispatch();

  function closeDialogModal() {
    dispatch(closeModal());
  }

  return (
    <Modal isVisible={modalIsVisible}>
      <Overlap>
        <Container>
          <Message>{message}</Message>
          <Button activeOpacity={0.8} onPress={() => closeDialogModal()}>
            <ButtonText>Ok</ButtonText>
          </Button>
        </Container>
      </Overlap>
    </Modal>
  );
}

export default DialogModal;
