import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import styled from "styled-components/native";

export const Header = styled.View`
  position: relative;
  width: 85%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${responsiveHeight(6)}px;
  margin-bottom: ${responsiveHeight(5)}px;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.FONTS.BOLD};
  font-size: ${responsiveFontSize(4)}px;
  color: ${(props) => props.theme.COLORS.BLUE};
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
`;

export const Container = styled.ScrollView`
  width: 85%;
`;
