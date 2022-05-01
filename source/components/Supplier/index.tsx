import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import SupplierInterface from "~/interfaces/supplier.interface";
import { setSupplierReference } from "~/redux/reducers/supplier.slice";
import { CnpjNumber, CompanyName, Container } from "./styles";

type ProviderType = {
  provider: SupplierInterface;
};

function Supplier({ provider }: ProviderType) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  let { cnpj_number, company_name } = provider;

  function navigator(screen: string) {
    dispatch(setSupplierReference({ cnpj_number }));
    navigation.navigate(screen as never);
  }

  return (
    <Container activeOpacity={0.5} onPress={() => navigator("Details")}>
      <CompanyName>{company_name}</CompanyName>
      <CnpjNumber>
        {cnpj_number.replace(
          /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
          "$1.$2.$3/$4-$5"
        )}
      </CnpjNumber>
    </Container>
  );
}

export default Supplier;
