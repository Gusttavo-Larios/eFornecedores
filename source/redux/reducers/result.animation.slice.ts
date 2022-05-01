import { createSlice } from "@reduxjs/toolkit";

const resultAnimationSlice = createSlice({
  name: "result_animation",
  initialState: {
    type: "",
    message: "",
  },
  reducers: {
    activateAnimation(currentState, { payload }) {
      const { type, message } = payload;
      currentState.type = type;
      currentState.message = message;
    },
    endAnimation(currentState) {
      currentState.type = "";
      currentState.message = "";
    },
  },
});

export const { activateAnimation, endAnimation } = resultAnimationSlice.actions;
export default resultAnimationSlice.reducer;
