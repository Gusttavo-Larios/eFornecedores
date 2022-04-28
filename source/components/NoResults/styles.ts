import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${responsiveHeight(70)}px;
  align-items: center;
  justify-content: center;
`;

export const Emoji = styled.Image``;

export const Message = styled.Text`
  font-family: ${(props) => props.theme.FONTS.LIGHT};
  font-size: ${responsiveFontSize(2.2)}px;
  color: ${(props) => props.theme.COLORS.BLACK};
  margin-top: ${responsiveHeight(2)}px;
`;
