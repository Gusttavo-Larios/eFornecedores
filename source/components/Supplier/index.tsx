import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import SupplierInterface from "~/interfaces/supplier.interface";
import { setSupplierReference } from "~/redux/reducers/supplier.slice";
import { Button, CnpjNumber, CompanyName, Container } from "./styles";
import { cnpjMask } from "~/functions/masks";
import { useLoading } from "~/hooks/useLoading";

type ProviderType = {
  provider: SupplierInterface;
};

function Supplier({ provider }: ProviderType) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { startLoading } = useLoading();

  let { cnpj_number, company_name } = provider;

  function navigator(screen: string) {
    dispatch(setSupplierReference({ cnpj_number }));
    startLoading();
    navigation.navigate(screen as never);
  }

  return (
    <Container
      from={{ translateY: 1000, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ type: "timing", duration: 500 }}
    >
      <Button activeOpacity={0.5} onPress={() => navigator("Details")}>
        <CompanyName>{company_name}</CompanyName>
        <CnpjNumber>{cnpjMask(cnpj_number)}</CnpjNumber>
      </Button>
    </Container>
  );
}

export default Supplier;
