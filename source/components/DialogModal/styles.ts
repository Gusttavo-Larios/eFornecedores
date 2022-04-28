import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import styled from "styled-components/native";

export const Overlap = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  width: 85%;
  background-color: ${(props) => props.theme.COLORS.WHITE_100};
  border-radius: ${responsiveFontSize(1)}px;
  padding: ${responsiveHeight(2)}px ${responsiveHeight(3)}px;
`;

export const Message = styled.Text`
  font-family: ${(props) => props.theme.FONTS.REGULAR};
  font-size: ${responsiveFontSize(2.2)}px;
  text-align: center;
  color: ${(props) => props.theme.COLORS.BLACK};
`;

export const ButtonBox = styled.View`
  width: 100%;
  height: ${responsiveHeight(7)}px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${responsiveHeight(7)}px;
`;

export const ButtonOk = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.COLORS.BLUE};
  border-radius: ${responsiveFontSize(1)}px;
  align-items: center;
  justify-content: center;
`;

export const ButtonYes = styled.TouchableOpacity`
  width: 46%;
  height: 100%;
  background-color: ${(props) => props.theme.COLORS.BLUE};
  border-radius: ${responsiveFontSize(1)}px;
  align-items: center;
  justify-content: center;
`;

export const ButtonNo = styled.TouchableOpacity`
  width: 46%;
  height: 100%;
  background-color: ${(props) => props.theme.COLORS.WHITE_100};
  border-radius: ${responsiveFontSize(1)}px;
  align-items: center;
  justify-content: center;
`;

export const AffirmationText = styled.Text`
  font-family: ${(props) => props.theme.FONTS.BOLD};
  font-size: ${responsiveFontSize(2.2)}px;
  color: ${(props) => props.theme.COLORS.WHITE_100};
`;

export const DenialText = styled.Text`
  font-family: ${(props) => props.theme.FONTS.BOLD};
  font-size: ${responsiveFontSize(2.2)}px;
  color: ${(props) => props.theme.COLORS.BLACK};
`;
