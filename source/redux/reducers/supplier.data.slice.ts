import { createSlice } from "@reduxjs/toolkit";
import { number } from "yup";

const supplierDataSlice = createSlice({
  name: "supplier_data",
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
  },
});

export const { setSupplierData, clearSupplierData } = supplierDataSlice.actions;
export default supplierDataSlice.reducer;
