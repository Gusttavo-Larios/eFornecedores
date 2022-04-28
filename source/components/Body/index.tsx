import * as React from "react";
import { Container } from "./styles";

type BodyType = {
  children: React.ReactNode;
};

function Body({ children }: BodyType) {
  return <Container>{children}</Container>;
}

export default Body;
