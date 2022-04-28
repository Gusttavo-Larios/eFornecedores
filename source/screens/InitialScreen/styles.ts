import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import styled from "styled-components/native";

export const Logo = styled.Text`
  font-family: ${(props) => props.theme.FONTS.BLACK};
  font-size: ${responsiveFontSize(5)}px;
  color: ${(props) => props.theme.COLORS.BLUE};
  margin-top: ${responsiveHeight(16)}px;
`;

export const EnterButton = styled.TouchableOpacity`
  width: ${responsiveWidth(70)}px;
  height: ${responsiveHeight(8)}px;
  background-color: ${(props) => props.theme.COLORS.BLUE};
  align-items: center;
  justify-content: center;
  border-radius: ${responsiveFontSize(1)}px;
  margin-top: ${responsiveHeight(45)}px;
`;

export const TextEnterButton = styled.Text`
  font-family: ${(props) => props.theme.FONTS.MEDIUM};
  font-size: ${responsiveFontSize(3.2)}px;
  color: ${(props) => props.theme.COLORS.WHITE_100};
`;
