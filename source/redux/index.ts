import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./reducers/modal.slice";
import supplierDataReducer from "./reducers/supplier.data.slice";
import supplierReferenceReducer from "./reducers/supplier.reference.slice";
import resultAnimationReducer from "./reducers/result.animation.slice";
import loadingReducer from "./reducers/loading.slice";
import homeReducer from "./reducers/home.slice";

const store = configureStore({
  reducer: {
    modalReducer,
    supplierDataReducer,
    supplierReferenceReducer,
    resultAnimationReducer,
    loadingReducer,
    homeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
