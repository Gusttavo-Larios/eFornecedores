import { createSlice } from "@reduxjs/toolkit";

const resultAnimationSlice = createSlice({
  name: "result_animation",
  initialState: {
    type: "",
    message: "",
  },
  reducers: {
    activateAnimation(current_state, { payload }) {
      const { type, message } = payload;
      console.log(payload);
      current_state.type = type;
      current_state.message = message;
    },
    endAnimation(current_state) {
      current_state.type = "";
      current_state.message = "";
    },
  },
});

export const { activateAnimation, endAnimation } = resultAnimationSlice.actions;
export default resultAnimationSlice.reducer;
