import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

function AddButton() {
  const navigation = useNavigation();
  return (
    <Container
      activeOpacity={0.7}
      onPress={() => navigation.navigate("Register" as never)}
    >
      <Ionicons name="add-sharp" size={responsiveFontSize(7)} color="white" />
    </Container>
  );
}

export default AddButton;
