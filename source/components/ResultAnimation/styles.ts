import { responsiveFontSize } from "react-native-responsive-dimensions";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.COLORS.WHITE_100};
`;

export const Message = styled.Text`
  font-family: ${(props) => props.theme.FONTS.REGULAR};
  font-size: ${(props) => responsiveFontSize(2.4)}px;
  text-align: center;
  width: 85%;
  color: ${(props) => props.theme.COLORS.BLACK};
`;
