import * as React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import Body from "~/components/Body";
import { BackButton, Container, Header, Title } from "./styles";

type SubPageBodyType = {
  title: string;
  children: React.ReactNode;
};

function SubPageBody({ title, children }: SubPageBodyType) {
  const navigation = useNavigation();

  return (
    <Body>
      <>
        <Header>
          <BackButton onPress={() => navigation.goBack()}>
            <AntDesign
              name="left"
              size={responsiveFontSize(4)}
              color="#151F52"
            />
          </BackButton>
          <Title>{title}</Title>
        </Header>
        <Container
          showsVerticalScrollIndicator={false}
          style={{ width: "85%" }}
        >
          <>{children}</>
        </Container>
      </>
    </Body>
  );
}

export default SubPageBody;
