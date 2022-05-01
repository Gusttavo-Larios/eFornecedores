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
    setSupplierData(currentState, { payload }) {
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
      currentState.id = id;
      currentState.cnpj_number = cnpj_number;
      currentState.cep_number = cep_number;
      currentState.city = city;
      currentState.company_name = company_name;
      currentState.fantasy_name = fantasy_name;
      currentState.state = state;
      currentState.district = district;
      currentState.street = street;
    },
    clearSupplierData(currentState) {
      currentState.id = 0;
      currentState.cnpj_number = "";
      currentState.cep_number = "";
      currentState.city = "";
      currentState.company_name = "";
      currentState.fantasy_name = "";
      currentState.state = "";
      currentState.district = "";
      currentState.street = "";
    },
    setSupplierReference(currentState, { payload }) {
      const { cnpj_number } = payload;
      currentState.cnpj_number = cnpj_number;
    },
    clearSupplierReference(currentState) {
      currentState.cnpj_number = "";
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
