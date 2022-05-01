import * as React from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { RootState } from "~/redux";
import { useResultAnimation } from "~/hooks/useResultAanimation";
import { Container, Message } from "./styles";

function ResultAnimation() {
  const { animationEnding } = useResultAnimation();
  const { message, type } = useSelector(
    (state: RootState) => state.resultAnimationReducer
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
          {message !== "" && <Message>{message}</Message>}
        </Container>
      )}
    </>
  );
}

export default ResultAnimation;
