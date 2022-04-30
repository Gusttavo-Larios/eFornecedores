import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import Body from "~/components/Body";
import { EnterButton, Logo, TextEnterButton } from "./styles";

function InitialScreen() {
  const navigation = useNavigation();

  function navigator(screen: string) {
    navigation.navigate(screen as never);
  }

  return (
    <Body>
      <Logo>eFornecedor</Logo>

      <EnterButton activeOpacity={0.8} onPress={() => navigator("Home")}>
        <TextEnterButton>Entrar</TextEnterButton>
      </EnterButton>
    </Body>
  );
}

export default InitialScreen;
