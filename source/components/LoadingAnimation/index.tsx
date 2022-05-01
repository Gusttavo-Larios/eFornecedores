import * as React from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { RootState } from "~/redux";
import { Container } from "./styles";

function LoadingAnimation() {
  const { isLoading } = useSelector((state: RootState) => state.loadingReducer);
  return (
    <>
      {isLoading && (
        <Container>
          <LottieView
            source={require("../../assets/animations/loading.json")}
            autoPlay
            style={{
              width: responsiveWidth(40),
            }}
            loop
          />
        </Container>
      )}
    </>
  );
}

export default LoadingAnimation;
