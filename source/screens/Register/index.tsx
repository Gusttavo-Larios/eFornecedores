import * as React from "react";
import { FormHandles, SubmitHandler } from "@unform/core";
import { useNavigation } from "@react-navigation/native";
import { zipCodeMask } from "~/functions/masks";
import axios from "axios";
import { API_URL } from "@env";
import AddressInterface from "~/interfaces/address.interface";
import SupplierInterface from "~/interfaces/supplier.interface";
import SubPageBody from "~/components/SubPageBody";
import supplier_schema from "~/schema/supplier.schema";
import useRefreshScreen from "~/hooks/useRefreshScreen";
import { useResultAnimation } from "~/hooks/useResultAanimation";
import useDialogModal from "~/hooks/useDialogModal";
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
  const formRef = React.useRef<FormHandles>(null);
  const navigation = useNavigation();
  const { reload } = useRefreshScreen();
  const { openDialogModal } = useDialogModal();
  const { animationStart } = useResultAnimation();

  const [initalFormData, setInitalFormData] = React.useState({});
  const [zipCode, setZipCode] = React.useState("");
  const [zipCodeIsInvalid, setZipCodeIsInvalid] = React.useState(false);

  React.useEffect(() => {
    if (zipCode.length === 8) searchAddressByZipCode();
  }, [zipCode]);

  async function searchAddressByZipCode() {
    try {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`
      );

      if (data.erro === "true") {
        setZipCodeIsInvalid(!zipCodeIsInvalid);
      } else {
        setZipCodeIsInvalid(!zipCodeIsInvalid);
        const { bairro, localidade, uf, logradouro }: AddressInterface = data;
        setInitalFormData({
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

  const registerSupplier: SubmitHandler<SupplierInterface> = async (data) => {
    const supplier_form_data = { ...data, cep_number: zipCode };
    const form_is_valid = await supplier_schema.isValid(supplier_form_data);

    if (form_is_valid && !zipCodeIsInvalid) {
      await axios
        .post(`${API_URL}/register`, supplier_form_data)
        .then(() => {
          animationStart("success");
          reload();
          navigation.goBack();
        })
        .catch((error) => {
          if (error.response.status === 400) {
            animationStart("error", error.response.data.message);
            return;
          }
          animationStart(
            "error",
            "Não foi possivel realizar o cadastro do fornecedor"
          );
        });
    } else {
      openDialogModal(
        "Preencha todos os campos corretamente para cadastrar um novo fornencedor"
      );
    }
  };

  return (
    <SubPageBody title="Cadastrar">
      <>
        <UnForm
          ref={formRef}
          initialData={initalFormData}
          onSubmit={registerSupplier}
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
            maxLength={9}
            error={zipCodeIsInvalid}
            onChangeText={(text) =>
              setZipCode(text.replace(/(-\d{3})\d+?$/, "$1").replace("-", ""))
            }
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
            <ButtonText>Cadastrar</ButtonText>
          </ConfirmationButton>
        </UnForm>
      </>
    </SubPageBody>
  );
}

export default Register;
