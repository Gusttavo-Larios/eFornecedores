import * as React from "react";
import { useDispatch } from "react-redux";
import {
  activateAnimation,
  endAnimation,
} from "~/redux/reducers/result.animation.slice";

export const useResultAnimation = () => {
  const dispatch = useDispatch();

  function animationStart(type: string, message: string) {
    dispatch(activateAnimation({ type, message }));
  }

  function animationEnding() {
    dispatch(endAnimation());
  }

  return {
    animationStart,
    animationEnding,
  };
};
