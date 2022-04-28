import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import SubPageBody from "~/components/SubPageBody";
import {
  ButtonBox,
  ButtonDelete,
  ButtonText,
  ButtonUpdate,
  Headquarters,
  HeadquartersColumn,
  Label,
  SupplierInformation,
} from "./styles";
import { openModal } from "~/redux/reducers/modal.slice";
import { RootState } from "~/redux";

type DetailsType = {
  route: {
    cnpj_number: string;
  };
};

function Details({ route }: DetailsType) {
  const dispatch = useDispatch();
  const { dialogResponse } = useSelector((state: RootState) => state.modal);

  React.useEffect(() => {
    if (dialogResponse) action();
  }, [dialogResponse]);

  function action() {
    console.log("kffkfjj");
  }

  function openDialogModal() {
    dispatch(
      openModal({
        message: "Tem certeza que deseja excluir Enterprise Limitada S.A",
        isDialog: true,
      })
    );
  }

  return (
    <SubPageBody title="Fornecedor">
      <Label>Nome Social</Label>
      <SupplierInformation>Enterprise Limitada S.A</SupplierInformation>

      <Label>Nome Fantasia</Label>
      <SupplierInformation>Enterprise</SupplierInformation>

      <Label>CNPJ</Label>
      <SupplierInformation>00.000.000/0000-00 </SupplierInformation>

      <Headquarters>
        <HeadquartersColumn>
          <Label>Cidade</Label>
          <SupplierInformation>São Paulo</SupplierInformation>
        </HeadquartersColumn>

        <HeadquartersColumn>
          <Label>Estado</Label>
          <SupplierInformation>SP</SupplierInformation>
        </HeadquartersColumn>
      </Headquarters>

      <Label>Bairro</Label>
      <SupplierInformation>Morumbi</SupplierInformation>

      <Label>CEP</Label>
      <SupplierInformation>00000-000</SupplierInformation>

      <Label>Logradouro</Label>
      <SupplierInformation>Av. Jules Rimet</SupplierInformation>

      <ButtonBox>
        <ButtonUpdate>
          <ButtonText>Atualizar</ButtonText>
        </ButtonUpdate>
        <ButtonDelete onPress={() => openDialogModal()}>
          <ButtonText>Excluir</ButtonText>
        </ButtonDelete>
      </ButtonBox>
    </SubPageBody>
  );
}

export default Details;
