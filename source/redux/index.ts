import { configureStore } from "@reduxjs/toolkit";
import modal from "./reducers/modal.slice";
import supplierData from "./reducers/supplier.data.slice";
import supplierReference from "./reducers/supplier.reference.slice";
import resultAnimation from "./reducers/result.animation.slice";
import loading from "./reducers/loading.slice";

const store = configureStore({
  reducer: {
    modal,
    supplierData,
    supplierReference,
    resultAnimation,
    loading,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
