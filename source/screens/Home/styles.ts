import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import styled from "styled-components/native";

export const Title = styled.Text`
  font-family: ${(props) => props.theme.FONTS.BOLD};
  font-size: ${responsiveFontSize(4)}px;
  color: ${(props) => props.theme.COLORS.BLUE};
  margin-top: ${responsiveHeight(6)}px;
`;

export const SupplierFilter = styled.TextInput`
  width: 85%;
  height: ${responsiveHeight(7)}px;
  margin-top: ${responsiveHeight(3)}px;
  border-radius: ${responsiveFontSize(1)}px;
  border: ${responsiveWidth(0.3)}px solid ${(props) => props.theme.COLORS.BLACK};
  font-family: ${(props) => props.theme.FONTS.LIGHT};
  font-size: ${responsiveFontSize(2)}px;
  text-align: center;
`;

export const List = styled.FlatList`
  width: 85%;
  margin-top: ${responsiveHeight(3)}px;
`;

export const SeparationComponent = styled.View`
  width: 100%;
  height: ${responsiveHeight(2)}px;
`;

export const ListFooter = styled.View`
  width: 100%;
  height: ${responsiveHeight(5)}px;
`;
