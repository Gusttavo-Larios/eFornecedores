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
import { useNavigation } from "@react-navigation/native";
import { setSupplierData } from "~/redux/reducers/supplier.data.slice";

function Details() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [currentSupplierData, setCurrentSupplierData] = React.useState({});

  /**supplier está nesta tela */
  const { cnpj_number } = useSelector(
    (state: RootState) => state.supplierReference
  );
  const { dialogResponse } = useSelector((state: RootState) => state.modal);

  React.useEffect(() => {
    searchSupplier();
  }, []);

  React.useEffect(() => {
    if (dialogResponse) excludeSupplier();
  }, [dialogResponse]);

  function searchSupplier() {
    try {
      console.log("axios.get");
    } catch (error) {}
  }

  async function excludeSupplier() {
    try {
      console.log("axios.delete");
    } catch (error) {}
  }

  function openDialogModal() {
    dispatch(
      openModal({
        message: "Tem certeza que deseja excluir Enterprise Limitada S.A",
        isDialog: true,
      })
    );
  }

  function navigator() {
    dispatch(setSupplierData(currentSupplierData));
    navigation.navigate("Update");
  }

  return (
    <SubPageBody title="Fornecedor">
      <>
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
            <ButtonText onPress={() => navigator()}>Atualizar</ButtonText>
          </ButtonUpdate>
          {/* <ButtonDelete onPress={() => openDialogModal()}> */}
          <ButtonDelete onPress={() => excludeSupplier()}>
            <ButtonText>Excluir</ButtonText>
          </ButtonDelete>
        </ButtonBox>
      </>
    </SubPageBody>
  );
}

export default Details;
