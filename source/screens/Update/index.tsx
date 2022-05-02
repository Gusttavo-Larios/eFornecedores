import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormHandles, SubmitHandler } from "@unform/core";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { API_URL } from "@env";
import { zipCodeMask } from "~/functions/masks";
import AddressInterface from "~/interfaces/address.interface";
import SubPageBody from "~/components/SubPageBody";
import { useResultAnimation } from "~/hooks/useResultAanimation";
import useRefreshScreen from "~/hooks/useRefreshScreen";
import supplier_schema from "~/schema/supplier.schema";
import SupplierInterface from "~/interfaces/supplier.interface";
import { RootState } from "~/redux";
import { openDialogModal } from "~/redux/reducers/modal.dialog.slice";
import {
  ButtonText,
  ConfirmationButton,
  InputText,
  Label,
  MaskedInput,
  RealTimeInput,
  UnForm,
} from "./styles";

function Register() {
  const { animationStart } = useResultAnimation();
  const formRef = React.useRef<FormHandles>(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { reload } = useRefreshScreen();

  const current_supplier_data = useSelector(
    (state: RootState) => state.supplierReducer
  );

  const [initalFormData, setInitalFormData] = React.useState(
    current_supplier_data
  );
  const [zipCode, setZipCode] = React.useState(
    current_supplier_data.cep_number
  );
  const [zipCodeIsInvalid, setZipCodeIsInvalid] = React.useState(false);

  React.useEffect(() => {
    if (zipCode.length === 8) searchAddressByZipCode();
  }, [zipCode]);

  async function searchAddressByZipCode() {
    try {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`
      );

      if (data.error === "true") {
        setZipCodeIsInvalid(!zipCodeIsInvalid);
      } else {
        setZipCodeIsInvalid(!zipCodeIsInvalid);
        const { bairro, localidade, uf, logradouro }: AddressInterface = data;
        setInitalFormData({
          ...initalFormData,
          state: uf,
          city: localidade,
          district: bairro,
          street: logradouro,
        });
      }
    } catch (error) {
      animationStart(
        "error",
        "Algum erro inesperado ocorreu, tente novamente mais tarde"
      );
      navigation.goBack();
    }
  }

  const updateSupplier: SubmitHandler<SupplierInterface> = async (data) => {
    try {
      const { id } = current_supplier_data;
      const supplier_form_data = Object.assign(data, {
        id,
        cep_number: zipCode,
      }) as SupplierInterface;

      const form_is_valid = await supplier_schema.isValid({
        ...supplier_form_data,
      });

      if (form_is_valid) {
        const respose = await axios.put(
          `${API_URL}/update`,
          supplier_form_data
        );
        if (respose.status === 200) {
          animationStart("success");
          reload();
          navigation.navigate("Home" as never);
        }
      } else {
        dispatch(
          openDialogModal({
            message: "Preencha todos os campos corretamente",
          })
        );
      }
    } catch (error) {
      animationStart(
        "error",
        `Não foi possivel atualizar o cadastro de ${current_supplier_data.company_name}`
      );
    }
  };

  return (
    <SubPageBody title="Atualizar">
      <>
        <UnForm
          initialData={initalFormData}
          ref={formRef}
          onSubmit={updateSupplier}
        >
          <Label>Nome Social</Label>
          <InputText
            name="company_name"
            autoCompleteType="off"
            autoCorrect={false}
          />

          <Label>Nome Fantasia</Label>
          <InputText
            name="fantasy_name"
            autoCompleteType="off"
            autoCorrect={false}
          />

          <Label>CNPJ</Label>
          <MaskedInput
            name="cnpj_number"
            type="cnpj"
            keyboardType="numeric"
            autoCompleteType="off"
            autoCorrect={false}
          />

          <Label>CEP</Label>
          <RealTimeInput
            value={zipCodeMask(zipCode)}
            keyboardType="numeric"
            error={zipCodeIsInvalid}
            maxLength={9}
            onChangeText={(text) => setZipCode(text.replace("-", ""))}
          />

          <Label>Estado</Label>
          <InputText
            name="state"
            autoCompleteType="off"
            maxLength={2}
            autoCorrect={false}
          />

          <Label>Cidade</Label>
          <InputText name="city" autoCompleteType="off" autoCorrect={false} />

          <Label>Bairro</Label>
          <InputText
            name="district"
            autoCompleteType="off"
            autoCorrect={false}
          />

          <Label>Logradouro</Label>
          <InputText name="street" autoCompleteType="off" autoCorrect={false} />

          <ConfirmationButton
            activeOpacity={0.8}
            onPress={() => formRef.current?.submitForm()}
          >
            <ButtonText>Confirmar</ButtonText>
          </ConfirmationButton>
        </UnForm>
      </>
    </SubPageBody>
  );
}

export default Register;
