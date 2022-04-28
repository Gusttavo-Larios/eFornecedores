import { Form } from "@unform/mobile";
import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import styled from "styled-components/native";
import Input from "~/components/Input";
import InputMask from "~/components/InputMask";
import { theme } from "~/theme";

export const UnForm = styled(Form)`
  padding-bottom: ${responsiveHeight(7)}px;
`;

export const Label = styled.Text`
  font-family: ${(props) => props.theme.FONTS.LIGHT};
  font-size: ${responsiveFontSize(2.4)}px;
  color: ${(props) => props.theme.COLORS.BLACK};
  margin-bottom: ${responsiveWidth(2.5)}px;
`;

export const InputText = styled(Input)`
  width: 100%;
  height: ${responsiveHeight(7)}px;
  margin-bottom: ${responsiveWidth(4)}px;
  padding: 0 ${responsiveWidth(2)}px;
  background-color: ${(props) => props.theme.COLORS.WHITE_200};
  border-radius: ${responsiveFontSize(1)}px;
  border: ${responsiveWidth(0.3)}px solid ${(props) => props.theme.COLORS.BLACK};
  font-family: ${(props) => props.theme.FONTS.REGULAR};
  font-size: ${responsiveFontSize(2)}px;
`;

export const MaskedInput = styled(InputMask)`
  width: 100%;
  height: ${responsiveHeight(7)}px;
  margin-bottom: ${responsiveWidth(4)}px;
  padding: 0 ${responsiveWidth(2)}px;
  background-color: ${(props) => props.theme.COLORS.WHITE_200};
  border-radius: ${responsiveFontSize(1)}px;
  border: ${responsiveWidth(0.3)}px solid ${(props) => props.theme.COLORS.BLACK};
  font-family: ${(props) => props.theme.FONTS.REGULAR};
  font-size: ${responsiveFontSize(2)}px;
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

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: "90%",
    height: responsiveHeight(7),
    backgroundColor: "#F2F2F2",
    paddingHorizontal: responsiveWidth(1.5),
    borderWidth: responsiveFontSize(0.15),
    borderRadius: responsiveFontSize(1),
    borderColor: theme.COLORS.BLACK,
    fontSize: responsiveFontSize(2),
    fontFamily: theme.FONTS.REGULAR,
    color: theme.COLORS.BLACK,
    textAlign: "center",
  },
  inputAndroid: {
    width: "90%",
    height: responsiveHeight(7),
    backgroundColor: "#F2F2F2",
    paddingHorizontal: responsiveWidth(1.5),
    borderWidth: responsiveFontSize(0.15),
    borderRadius: responsiveFontSize(1),
    borderColor: theme.COLORS.BLACK,
    fontSize: responsiveFontSize(2),
    fontFamily: theme.FONTS.REGULAR,
    color: theme.COLORS.BLACK,
    textAlign: "center",
  },
});

export const ConfirmationButton = styled.TouchableOpacity`
  width: 100%;
  height: ${responsiveHeight(8)}px;
  margin-top: ${responsiveHeight(3)}px;
  border-radius: ${responsiveFontSize(1)}px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.COLORS.BLUE};
`;

export const ButtonText = styled.Text`
  font-family: ${(props) => props.theme.FONTS.BOLD};
  font-size: ${responsiveFontSize(2.6)}px;
  color: ${(props) => props.theme.COLORS.WHITE_100};
`;
