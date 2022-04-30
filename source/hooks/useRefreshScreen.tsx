import * as React from "react";
import { useDispatch } from "react-redux";
import { refreshScrenn } from "~/redux/reducers/home.slice";

const useRefreshScreen = () => {
  const dispatch = useDispatch();

  function reload() {
    dispatch(refreshScrenn());
  }

  return { reload };
};

export default useRefreshScreen;
