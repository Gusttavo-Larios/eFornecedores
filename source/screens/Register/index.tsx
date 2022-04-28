import { FormHandles, SubmitHandler } from "@unform/core";
import axios from "axios";
import * as React from "react";
import Picker from "react-native-picker-select";
import { useDispatch } from "react-redux";
import SubPageBody from "~/components/SubPageBody";
import acronyms_brazilian_states from "~/data/acronyms.brazilian.states";
import ListCitiesInterface from "~/interfaces/list.citites.interface";
import ProviderInterface from "~/interfaces/provider.interface";
import RequestCitiesInterface from "~/interfaces/request.cities.interface";
import { openModal } from "~/redux/reducers/modal.slice";
import supplier_schema from "~/schema/supplier.schema";
import {
  ButtonText,
  ConfirmationButton,
  Headquarters,
  HeadquartersColumn,
  InputText,
  Label,
  pickerSelectStyles,
  UnForm,
} from "./styles";

function Register() {
  const pickerStateOptions = acronyms_brazilian_states;

  const formRef = React.useRef<FormHandles>(null);
  const dispatch = useDispatch();

  const [citySelect, setCitySelect] = React.useState("");
  const [stateSelect, setStateSelect] = React.useState("");
  const [pickerCityOptions, setPickerCityOptions] = React.useState<
    ListCitiesInterface[]
  >([]);

  React.useEffect(() => {
    searchCitites();
  }, [stateSelect]);

  async function searchCitites() {
    try {
      const { data } = await axios.get(
        `https://brasilapi.com.br/api/ibge/municipios/v1/${stateSelect}`
      );
      let list_cities: ListCitiesInterface[] = [];
      data.forEach((element: RequestCitiesInterface) => {
        list_cities.push({
          value: element.nome,
          label: element.nome,
        });
      });
      console.log(list_cities);
      setPickerCityOptions(list_cities);
    } catch (error) {
      console.log(error);
    }
  }

  const registerSupplier: SubmitHandler<ProviderInterface> = async (data) => {
    const supplier_data = data;
    const form_is_valid = await supplier_schema.isValid({ ...supplier_data });

    if (form_is_valid) {
      console.log(form_is_valid);
    } else {
      dispatch(
        openModal({
          message:
            "Preencha todos os campos corretamente para cadastrar um novo fornencedor",
          isDialog: false,
        })
      );
    }
  };

  return (
    <SubPageBody title="Cadastrar">
      <UnForm ref={formRef} onSubmit={registerSupplier}>
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
        <InputText
          name="cnpj_number"
          autoCompleteType="off"
          autoCorrect={false}
        />

        <Headquarters>
          <HeadquartersColumn>
            <Label>Estado</Label>
            <Picker
              placeholder="Selecione"
              value={stateSelect}
              onValueChange={(district) => setStateSelect(district)}
              items={pickerStateOptions}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false}
            />
          </HeadquartersColumn>

          <HeadquartersColumn>
            <Label>Cidade</Label>
            <Picker
              placeholder="Selecione"
              value={citySelect}
              onValueChange={(city) => setCitySelect(city)}
              disabled={citySelect === "" ? true : false}
              items={pickerCityOptions}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false}
            />
          </HeadquartersColumn>
        </Headquarters>

        <Label>Bairro</Label>
        <InputText name="district" autoCompleteType="off" autoCorrect={false} />

        <Label>CEP</Label>
        <InputText
          name="cep_number"
          autoCompleteType="off"
          autoCorrect={false}
        />

        <Label>Logradouro</Label>
        <InputText name="street" autoCompleteType="off" autoCorrect={false} />

        <ConfirmationButton
          activeOpacity={0.8}
          onPress={() => formRef.current.submitForm()}
        >
          <ButtonText>Cadastrar</ButtonText>
        </ConfirmationButton>
      </UnForm>
    </SubPageBody>
  );
}

export default Register;
