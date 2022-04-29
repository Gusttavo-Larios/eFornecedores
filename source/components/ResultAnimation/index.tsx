import * as React from "react";
import LottieView from "lottie-react-native";
import { useSelector } from "react-redux";
import { RootState } from "~/redux";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { Container, Message } from "./styles";
import { useResultAnimation } from "~/hooks/useResultAanimation";

function ResultAnimation() {
  const { animationEnding } = useResultAnimation();
  const { message, type } = useSelector(
    (state: RootState) => state.resultAnimation
  );

  setTimeout(() => animationEnding(), 4000);

  return (
    <>
      {type !== "" && (
        <Container
          style={{
            zIndex: 10,
            elevation: 10,
          }}
        >
          <LottieView
            source={
              type === "success"
                ? require("../../assets/animations/success.json")
                : require("../../assets/animations/error.json")
            }
            autoPlay
            style={{
              width: responsiveWidth(50),
            }}
            loop
          />
          <Message>{message}</Message>
        </Container>
      )}
    </>
  );
}

export default ResultAnimation;
