import * as React from "react";
import { Container } from "./styles";

type BodyType = {
  children: JSX.Element;
};

function Body({ children }: BodyType) {
  const animation_configuration = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
    },
  };
  return (
    <Container
      from={animation_configuration.start}
      animate={animation_configuration.end}
      transition={{
        type: "timing",
        duration: 500,
      }}
    >
      {children}
    </Container>
  );
}

export default Body;
