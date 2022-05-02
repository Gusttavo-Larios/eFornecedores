import * as React from "react";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";
import useDialogModal from "~/hooks/useDialogModal";
import { RootState } from "~/redux";
import { ButtonText, Button, Container, Message, Overlap } from "./styles";

function DialogModal() {
  const { closeDialogModal } = useDialogModal();
  const { modalIsVisible, message } = useSelector(
    (state: RootState) => state.modalDialogReducer
  );

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
