import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setSupplierReference } from "~/redux/reducers/supplier.reference.slice";
import { CnpjNumber, CompanyName, Container } from "./styles";

type ProviderType = {
  provider: {
    item: {
      company_name: string;
      cnpj_number: string;
    };
  };
};

function Supplier({ provider }: ProviderType) {
  const {
    item: { cnpj_number, company_name },
  } = provider;

  const navigation = useNavigation();
  const dispatch = useDispatch();

  function navigator(screen: string) {
    dispatch(setSupplierReference({ cnpj_number }));
    navigation.navigate(screen);
  }

  return (
    <Container activeOpacity={0.5} onPress={() => navigator("Details")}>
      <CompanyName>{company_name}</CompanyName>
      <CnpjNumber>{cnpj_number}</CnpjNumber>
    </Container>
  );
}

export default Supplier;
