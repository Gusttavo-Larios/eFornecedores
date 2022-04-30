import * as React from "react";
import { FormHandles, SubmitHandler } from "@unform/core";
import axios from "axios";
import Picker from "react-native-picker-select";
import { useDispatch, useSelector } from "react-redux";
import SubPageBody from "~/components/SubPageBody";
import acronyms_brazilian_states from "~/data/acronyms.brazilian.states";
import ListCitiesInterface from "~/interfaces/list.citites.interface";
import ProviderInterface from "~/interfaces/provider.interface";
import RequestCitiesInterface from "~/interfaces/request.cities.interface";
import { RootState } from "~/redux";
import { openModal } from "~/redux/reducers/modal.slice";
import supplier_schema from "~/schema/supplier.schema";
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
import { API_URL } from "@env";
import { useResultAnimation } from "~/hooks/useResultAanimation";
import { useNavigation } from "@react-navigation/native";
import useRefreshScreen from "~/hooks/useRefreshScreen";

function Register() {
  const { animationStart } = useResultAnimation();
  const formRef = React.useRef<FormHandles>(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { reload } = useRefreshScreen();

  const pickerStateOptions = acronyms_brazilian_states;

  const current_supplier_data = useSelector(
    (state: RootState) => state.supplierDataReducer
  );

  const [citySelect, setCitySelect] = React.useState(
    current_supplier_data.city
  );
  const [stateSelect, setStateSelect] = React.useState(
    current_supplier_data.state
  );
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

  const updateSupplier: SubmitHandler<ProviderInterface> = async (data) => {
    try {
      const { id } = current_supplier_data;
      const supplier_form_data = Object.assign(data, {
        state: stateSelect,
        city: citySelect,
        id,
      }) as ProviderInterface;

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
          openModal({
            message: "Preencha todos os campos corretamente",
          })
        );
      }
    } catch (error) {
      animationStart(
        "error",
        `Não foi possivel excluir ${current_supplier_data.company_name}`
      );
    }
  };

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

  return (
    <SubPageBody title="Atualizar">
      <>
        <UnForm
          initialData={current_supplier_data}
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
            <ButtonText>Confirmar</ButtonText>
          </ConfirmationButton>
        </UnForm>
      </>
    </SubPageBody>
  );
}

export default Register;
