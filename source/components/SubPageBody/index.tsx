import * as React from "react";
import { Octicons } from "@expo/vector-icons";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { useTheme } from "styled-components";
import Body from "../Body";
import { BackButton, Container, Header, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

type SubPageBodyType = {
  title: string;
  children: React.ReactNode;
};

function SubPageBody({ title, children }: SubPageBodyType) {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Body>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Octicons
            name="chevron-left"
            size={responsiveFontSize(6)}
            color={theme.COLORS.BLUE}
          />
        </BackButton>
        <Title>{title}</Title>
      </Header>
      <Container showsVerticalScrollIndicator={false} style={{ width: "85%" }}>
        {children}
      </Container>
    </Body>
  );
}

export default SubPageBody;
