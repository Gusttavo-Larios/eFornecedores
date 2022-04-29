import { createSlice } from "@reduxjs/toolkit";

const supplierDataSlice = createSlice({
  name: "supplier_data",
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
  supplierDataSlice.actions;
export default supplierDataSlice.reducer;
