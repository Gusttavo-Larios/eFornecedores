import { createSlice } from "@reduxjs/toolkit";

const supplierDataSlice = createSlice({
  name: "supplier",
  initialState: {
    id: 0,
    company_name: "",
    fantasy_name: "",
    cnpj_number: "",
    city: "",
    state: "",
    district: "",
    cep_number: "",
    street: "",
  },
  reducers: {
    setSupplierData(current_state, { payload }) {
      const {
        id,
        company_name,
        fantasy_name,
        cnpj_number,
        city,
        state,
        district,
        cep_number,
        street,
      } = payload;
      current_state.id = id;
      current_state.cnpj_number = cnpj_number;
      current_state.cep_number = cep_number;
      current_state.city = city;
      current_state.company_name = company_name;
      current_state.fantasy_name = fantasy_name;
      current_state.state = state;
      current_state.district = district;
      current_state.street = street;
    },
    clearSupplierData(current_state) {
      current_state.id = 0;
      current_state.cnpj_number = "";
      current_state.cep_number = "";
      current_state.city = "";
      current_state.company_name = "";
      current_state.fantasy_name = "";
      current_state.state = "";
      current_state.district = "";
      current_state.street = "";
    },
    setSupplierReference(current_state, { payload }) {
      const { cnpj_number } = payload;
      current_state.cnpj_number = cnpj_number;
    },
    clearSupplierReference(current_state) {
      current_state.cnpj_number = "";
    },
  },
});

export const {
  setSupplierData,
  clearSupplierData,
  clearSupplierReference,
  setSupplierReference,
} = supplierDataSlice.actions;
export default supplierDataSlice.reducer;
