import { MotiView } from "moti";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import styled from "styled-components/native";

export const Container = styled(MotiView)`
  position: absolute;
  right: ${responsiveWidth(4)}px;
  bottom: ${responsiveHeight(8)}px;
`;

export const Button = styled.TouchableOpacity`
  width: ${responsiveFontSize(8)}px;
  height: ${responsiveFontSize(8)}px;
  border-radius: ${responsiveFontSize(4)}px;
  background-color: ${(props) => props.theme.COLORS.BLUE};
  align-items: center;
  justify-content: center;
  elevation: ${responsiveFontSize(2)};
`;
