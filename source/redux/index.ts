import { configureStore } from "@reduxjs/toolkit";
import modalDialogReducer from "./reducers/modal.dialog.slice";
import supplierReducer from "./reducers/supplier.slice";
import resultAnimationReducer from "./reducers/result.animation.slice";
import loadingReducer from "./reducers/loading.slice";
import homeReducer from "./reducers/home.slice";

const store = configureStore({
  reducer: {
    modalDialogReducer,
    supplierReducer,
    resultAnimationReducer,
    loadingReducer,
    homeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
