import * as React from "react";
import { Octicons } from "@expo/vector-icons";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { useTheme } from "styled-components";
import Body from "../Body";
import { BackButton, Container, Header, Title } from "./styles";

type SubPageBodyType = {
  title: string;
  children?: React.ReactNode;
};

function SubPageBody({ title, children }: SubPageBodyType) {
  const theme = useTheme();
  return (
    <Body>
      <Header>
        <BackButton>
          <Octicons
            name="chevron-left"
            size={responsiveFontSize(6)}
            color={theme.COLORS.BLUE}
          />
        </BackButton>
        <Title>{title}</Title>
      </Header>
      <Container showsVerticalScrollIndicator={false}>{children}</Container>
    </Body>
  );
}

export default SubPageBody;
