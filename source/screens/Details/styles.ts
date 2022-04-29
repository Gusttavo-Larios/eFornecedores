import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import styled from "styled-components/native";

export const Label = styled.Text`
  font-family: ${(props) => props.theme.FONTS.LIGHT};
  font-size: ${responsiveFontSize(2.4)}px;
  color: ${(props) => props.theme.COLORS.BLACK};
  margin-bottom: ${responsiveWidth(2.5)}px;
`;

export const SupplierInformation = styled.Text`
  font-family: ${(props) => props.theme.FONTS.REGULAR};
  font-size: ${responsiveFontSize(2)}px;
  color: ${(props) => props.theme.COLORS.BLACK};
  margin-left: ${responsiveWidth(3)}px;
  margin-bottom: ${responsiveWidth(4)}px;
`;

export const Headquarters = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeadquartersColumn = styled.View`
  flex-direction: column;
  width: 50%;
`;

export const ButtonBox = styled.View`
  width: 100%;
  height: ${responsiveHeight(8)}px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${responsiveHeight(3)}px;
`;

export const ButtonUpdate = styled.TouchableOpacity`
  width: 46%;
  height: 100%;
  border-radius: ${responsiveFontSize(1)}px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.COLORS.BLUE};
`;

export const ButtonDelete = styled.TouchableOpacity`
  width: 46%;
  height: 100%;
  border-radius: ${responsiveFontSize(1)}px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.COLORS.RED};
`;

export const ButtonText = styled.Text`
  font-family: ${(props) => props.theme.FONTS.BOLD};
  font-size: ${responsiveFontSize(2.6)}px;
  color: ${(props) => props.theme.COLORS.WHITE_100};
`;
