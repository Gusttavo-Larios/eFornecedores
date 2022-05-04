import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { Button, Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

function AddButton() {
  const navigation = useNavigation();
  return (
    <Container
      from={{ translateY: 1000, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ type: "timing", duration: 200, delay: 800 }}
    >
      <Button
        activeOpacity={0.7}
        onPress={() => navigation.navigate("Register" as never)}
      >
        <Ionicons name="add-sharp" size={responsiveFontSize(7)} color="white" />
      </Button>
    </Container>
  );
}

export default AddButton;
