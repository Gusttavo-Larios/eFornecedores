import * as React from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "@env";
import SubPageBody from "~/components/SubPageBody";
import { RootState } from "~/redux";
import ProviderInterface from "~/interfaces/provider.interface";
import { useResultAnimation } from "~/hooks/useResultAanimation";
import { useLoading } from "~/hooks/useLoading";
import { setSupplierData } from "~/redux/reducers/supplier.data.slice";
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
import useRefreshScreen from "~/hooks/useRefreshScreen";

function Details() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { startLoading, finishLoading } = useLoading();
  const { animationStart } = useResultAnimation();
  const { reload } = useRefreshScreen();

  const [currentSupplierData, setCurrentSupplierData] =
    React.useState<ProviderInterface>({} as ProviderInterface);

  const { reference_number_cnpj } = useSelector(
    (state: RootState) => state.supplierReferenceReducer
  );

  React.useEffect(() => {
    startLoading();
    searchSupplier();
  }, []);

  async function searchSupplier() {
    try {
      const response = await axios.get(
        `${API_URL}/search-supplier?cnpj_number=${reference_number_cnpj}`
      );
      const supplier: ProviderInterface = response.data.supplier[0];
      setCurrentSupplierData(supplier);
      finishLoading();
    } catch (error) {
      animationStart(
        "error",
        "Houve algum problema, tente novamente mais tarde"
      );
    }
  }

  async function excludeSupplier() {
    try {
      const response = await axios.delete(`${API_URL}/delete`, {
        data: { cnpj_number: currentSupplierData.cnpj_number },
      });
      if (response.status == 200) {
        animationStart("success");
        reload();
        navigation.goBack();
      }
    } catch (error) {
      animationStart(
        "error",
        `Não foi possivel excluir ${currentSupplierData.company_name}`
      );
    }
  }

  function navigator() {
    dispatch(setSupplierData(currentSupplierData));
    navigation.navigate("Update" as never);
  }

  return (
    <SubPageBody title="Fornecedor">
      <>
        <Label>Nome Social</Label>
        <SupplierInformation>
          {currentSupplierData.company_name}
        </SupplierInformation>

        <Label>Nome Fantasia</Label>
        <SupplierInformation>
          {currentSupplierData.fantasy_name}
        </SupplierInformation>

        <Label>CNPJ</Label>
        <SupplierInformation>
          {currentSupplierData.cnpj_number}
        </SupplierInformation>

        <Headquarters>
          <HeadquartersColumn>
            <Label>Estado</Label>
            <SupplierInformation>
              {currentSupplierData.state}
            </SupplierInformation>
          </HeadquartersColumn>

          <HeadquartersColumn>
            <Label>Cidade</Label>
            <SupplierInformation>
              {currentSupplierData.city}
            </SupplierInformation>
          </HeadquartersColumn>
        </Headquarters>

        <Label>Bairro</Label>
        <SupplierInformation>
          {currentSupplierData.district}
        </SupplierInformation>

        <Label>CEP</Label>
        <SupplierInformation>
          {currentSupplierData.cep_number}
        </SupplierInformation>

        <Label>Logradouro</Label>
        <SupplierInformation>{currentSupplierData.street}</SupplierInformation>

        <ButtonBox>
          <ButtonUpdate>
            <ButtonText onPress={() => navigator()}>Atualizar</ButtonText>
          </ButtonUpdate>
          <ButtonDelete onPress={() => excludeSupplier()}>
            <ButtonText>Excluir</ButtonText>
          </ButtonDelete>
        </ButtonBox>
      </>
    </SubPageBody>
  );
}

export default Details;
