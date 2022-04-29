import { createSlice } from "@reduxjs/toolkit";

const supplierReferenceSlice = createSlice({
  name: "supplier_reference",
  initialState: {
    cnpj_number: "",
  },
  reducers: {
    setSupplierReference(current_state, { payload }) {
      const { cnpj_number } = payload;
      current_state.cnpj_number = cnpj_number;
    },
    clearSupplierReference(current_state) {
      current_state.cnpj_number = "";
    },
  },
});

export const { clearSupplierReference, setSupplierReference } =
  supplierReferenceSlice.actions;
export default supplierReferenceSlice.reducer;
