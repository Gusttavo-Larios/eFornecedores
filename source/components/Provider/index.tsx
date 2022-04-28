import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { CnpjNumber, CompanyName, Container } from "./styles";

type ProviderType = {
  provider: {
    item: {
      company_name: string;
      cnpj_number: string;
    };
  };
};

function Provider({ provider }: ProviderType) {
  const {
    item: { cnpj_number, company_name },
  } = provider;

  const navigation = useNavigation();

  function navigator(screen: string) {
    navigation.navigate(screen, { cnpj_number });
  }

  return (
    <Container activeOpacity={0.5} onPress={() => navigator("Details")}>
      <CompanyName>{company_name}</CompanyName>
      <CnpjNumber>{cnpj_number}</CnpjNumber>
    </Container>
  );
}

export default Provider;
