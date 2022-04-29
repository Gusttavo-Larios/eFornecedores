import * as React from "react";
import { useDispatch } from "react-redux";
import {
  activateLoading,
  disableLoading,
} from "~/redux/reducers/loading.slice";

export const useLoading = () => {
  const dispatch = useDispatch();

  function startLoading() {
    dispatch(activateLoading());
  }

  function finishLoading() {
    dispatch(disableLoading());
  }
  return {
    startLoading,
    finishLoading,
  };
};
