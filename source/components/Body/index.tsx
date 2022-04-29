import * as React from "react";
import { Container } from "./styles";

type BodyType = {
  children: JSX.Element;
};

function Body({ children }: BodyType) {
  return <Container>{children}</Container>;
}

export default Body;
