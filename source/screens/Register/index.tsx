import * as React from "react";
import { FormHandles, SubmitHandler } from "@unform/core";
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";
import { useDispatch } from "react-redux";
import { API_URL } from "@env";
import acronyms_brazilian_states from "~/data/acronyms.brazilian.states";
import RequestCitiesInterface from "~/interfaces/request.cities.interface";
import ListCitiesInterface from "~/interfaces/list.citites.interface";
import SupplierInterface from "~/interfaces/supplier.interface";
import SubPageBody from "~/components/SubPageBody";
import { openModal } from "~/redux/reducers/modal.slice";
import supplier_schema from "~/schema/supplier.schema";
import useRefreshScreen from "~/hooks/useRefreshScreen";
import { useResultAnimation } from "~/hooks/useResultAanimation";
import {
  ButtonText,
  ConfirmationButton,
  Headquarters,
  HeadquartersColumn,
  InputText,
  Label,
  MaskedInput,
  pickerSelectStyles,
  UnForm,
} from "./styles";

function Register() {
  const pickerStateOptions = acronyms_brazilian_states;

  const { animationStart } = useResultAnimation();
  const formRef = React.useRef<FormHandles>(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { reload } = useRefreshScreen();

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
      setPickerCityOptions(sortAlphabetically(list_cities));
    } catch (error) {
      console.log(error);
    }
  }

  function sortAlphabetically(list: ListCitiesInterface[]) {
    list.sort((a, b) => {
      if (a.label < b.label) {
        return -1;
      } else {
        return 1;
      }
    });

    return list;
  }

  const registerSupplier: SubmitHandler<SupplierInterface> = async (data) => {
    try {
      const supplier_data = { ...data, city: citySelect, state: stateSelect };
      const form_is_valid = await supplier_schema.isValid({ ...supplier_data });

      if (form_is_valid) {
        console.log(supplier_data);
        const response = await axios.post(`${API_URL}/register`, supplier_data);

        if (response.status === 200) {
          animationStart("success");
          reload();
          navigation.goBack();
        }
      } else {
        dispatch(
          openModal({
            message:
              "Preencha todos os campos corretamente para cadastrar um novo fornencedor",
            isDialog: false,
          })
        );
      }
    } catch (error) {
      animationStart(
        "error",
        "Não foi possivel realizar o cadastro do fornecedor"
      );
    }
  };

  return (
    <SubPageBody title="Cadastrar">
      <>
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
          <MaskedInput
            name="cnpj_number"
            type="cnpj"
            keyboardType="numeric"
            autoCompleteType="off"
            autoCorrect={false}
          />

          <Headquarters>
            <HeadquartersColumn>
              <Label>Estado</Label>
              <RNPickerSelect
                placeholder={{ value: "", label: "" }}
                value={stateSelect}
                onValueChange={(district) => setStateSelect(district)}
                items={pickerStateOptions}
                style={pickerSelectStyles}
                useNativeAndroidPickerStyle={false}
              />
            </HeadquartersColumn>

            <HeadquartersColumn>
              <Label>Cidade</Label>
              <RNPickerSelect
                placeholder={{ value: "", label: "" }}
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
          <InputText
            name="district"
            autoCompleteType="off"
            autoCorrect={false}
          />

          <Label>CEP</Label>
          <MaskedInput
            name="cep_number"
            type="zip-code"
            keyboardType="numeric"
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
