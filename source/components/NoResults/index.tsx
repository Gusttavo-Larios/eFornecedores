import * as React from "react";
import { Container, Emoji, Message } from "./styles";

function NoResults() {
  return (
    <Container>
      <Emoji source={require("~/assets/images/emoji.png")} />
      <Message>Não há fornecedores cadastrados</Message>
    </Container>
  );
}

export default NoResults;
