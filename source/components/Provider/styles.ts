import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: ${responsiveWidth(85)}px;
  height: ${responsiveHeight(13)}px;
  border-radius: ${responsiveFontSize(1)}px;
  background-color: ${(props) => props.theme.COLORS.WHITE_300};
  padding: ${responsiveHeight(2)}px ${responsiveWidth(2.5)}px;
  justify-content: center;
`;

export const CompanyName = styled.Text`
  font-family: ${(props) => props.theme.FONTS.MEDIUM};
  font-size: ${responsiveFontSize(2.4)}px;
  color: ${(props) => props.theme.COLORS.BLACK};
`;

export const CnpjNumber = styled.Text`
  font-family: ${(props) => props.theme.FONTS.REGULAR};
  font-size: ${responsiveFontSize(2)}px;
  color: ${(props) => props.theme.COLORS.BLACK};
  margin-top: ${responsiveHeight(0.7)}px;
`;
