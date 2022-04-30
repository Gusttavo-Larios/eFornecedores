import { createSlice } from "@reduxjs/toolkit";

const supplierReferenceSlice = createSlice({
  name: "supplier_reference",
  initialState: {
    reference_number_cnpj: "",
  },
  reducers: {
    setSupplierReference(current_state, { payload }) {
      const { cnpj_number } = payload;
      current_state.reference_number_cnpj = cnpj_number;
    },
    clearSupplierReference(current_state) {
      current_state.reference_number_cnpj = "";
    },
  },
});

export const { clearSupplierReference, setSupplierReference } =
  supplierReferenceSlice.actions;
export default supplierReferenceSlice.reducer;
