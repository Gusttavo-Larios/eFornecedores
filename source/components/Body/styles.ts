import styled from "styled-components/native";
import { MotiSafeAreaView } from "moti";

export const Container = styled(MotiSafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: ${(props) => props.theme.COLORS.WHITE_100};
`;
