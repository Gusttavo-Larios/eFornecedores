import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./reducers/modal.slice";
import supplierData from "./reducers/supplier.data.slice";
import supplierReference from "./reducers/supplier.reference.slice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    supplierData: supplierData,
    supplierReference: supplierReference,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
