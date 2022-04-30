import * as React from "react";
import LottieView from "lottie-react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { Container } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "~/redux";

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
