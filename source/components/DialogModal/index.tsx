import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/redux";
import { answerDialog, closeModal } from "~/redux/reducers/modal.slice";
import {
  AffirmationText,
  ButtonBox,
  ButtonNo,
  ButtonOk,
  ButtonYes,
  Container,
  DenialText,
  Message,
  Overlap,
} from "./styles";

import Modal from "react-native-modal";

function DialogModal() {
  const { modalIsVisible, isDialog, message } = useSelector(
    (state: RootState) => state.modal
  );
  const dispatch = useDispatch();

  function closeDialogModal() {
    dispatch(closeModal());
  }

  function answerModalDialog(response: boolean) {
    dispatch(answerDialog({ dialogResponse: response }));
    closeDialogModal();
  }

  return (
    <Modal isVisible={modalIsVisible}>
      <Overlap>
        <Container>
          <Message>{message}</Message>
          <ButtonBox>
            {isDialog ? (
              <>
                <ButtonYes
                  activeOpacity={0.8}
                  onPress={() => answerModalDialog(true)}
                >
                  <AffirmationText>Sim</AffirmationText>
                </ButtonYes>
                <ButtonNo
                  activeOpacity={0.8}
                  onPress={() => answerModalDialog(false)}
                >
                  <DenialText>Não</DenialText>
                </ButtonNo>
              </>
            ) : (
              <ButtonOk activeOpacity={0.8} onPress={() => closeDialogModal()}>
                <AffirmationText>Ok</AffirmationText>
              </ButtonOk>
            )}
          </ButtonBox>
        </Container>
      </Overlap>
    </Modal>
  );
}

export default DialogModal;
