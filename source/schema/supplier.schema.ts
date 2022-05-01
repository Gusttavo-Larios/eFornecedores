import * as yup from "yup";

let supplier_schema = yup.object().shape({
  company_name: yup.string().required(),
  fantasy_name: yup.string().required(),
  cnpj_number: yup.string().required().length(14),
  city: yup.string().required(),
  state: yup.string().required(),
  district: yup.string().required(),
  cep_number: yup.string().required().length(8),
  street: yup.string().required(),
});

export default supplier_schema;
