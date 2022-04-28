import * as yup from "yup";

const supplier_schema = yup.object().shape({
  company_name: yup.string().required(),
  name_fantasy: yup.string().required(),
  cnpj_number: yup.string().required().length(14),
  city: yup.string().required(),
  country: yup.string().required(),
  district: yup.string().required(),
  cep_number: yup.string().required().length(9),
  street: yup.string().required(),
});

export default supplier_schema;
