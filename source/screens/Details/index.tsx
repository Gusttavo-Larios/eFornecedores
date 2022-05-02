import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { API_URL } from "@env";
import { cnpjMask, zipCodeMask } from "~/functions/masks";
import SubPageBody from "~/components/SubPageBody";
import SupplierInterface from "~/interfaces/supplier.interface";
import { RootState } from "~/redux";
import { setSupplierData } from "~/redux/reducers/supplier.slice";
import useRefreshScreen from "~/hooks/useRefreshScreen";
import { useLoading } from "~/hooks/useLoading";
import { useResultAnimation } from "~/hooks/useResultAanimation";
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

function Details() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { finishLoading } = useLoading();
  const { animationStart } = useResultAnimation();
  const { reload } = useRefreshScreen();

  const { isLoading } = useSelector((state: RootState) => state.loadingReducer);

  const { cnpj_number } = useSelector(
    (state: RootState) => state.supplierReducer
  );

  const [currentSupplierData, setCurrentSupplierData] =
    React.useState<SupplierInterface>({} as SupplierInterface);

  React.useEffect(() => {
    searchSupplier();
  }, []);

  async function searchSupplier() {
    try {
      const response = await axios.get(
        `${API_URL}/search-supplier?cnpj_number=${cnpj_number}`
      );
      const supplier: SupplierInterface = response.data.supplier[0];
      setCurrentSupplierData(supplier);
      finishLoading();
    } catch (error) {
      animationStart(
        "error",
        "Houve algum problema, tente novamente mais tarde"
      );
      navigation.goBack();
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
      navigation.goBack();
    }
  }

  function navigator() {
    dispatch(setSupplierData(currentSupplierData));
    navigation.navigate("Update" as never);
  }

  return (
    <>
      {!isLoading && (
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
              {cnpjMask(currentSupplierData.cnpj_number)}
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
              {zipCodeMask(currentSupplierData.cep_number)}
            </SupplierInformation>

            <Label>Logradouro</Label>
            <SupplierInformation>
              {currentSupplierData.street}
            </SupplierInformation>

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
      )}
    </>
  );
}

export default Details;
