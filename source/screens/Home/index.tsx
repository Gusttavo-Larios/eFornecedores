import * as React from "react";
import { useTheme } from "styled-components";
import { API_URL } from "@env";
import ListProviderInterface from "~/interfaces/list.provider.interface";
import ProviderInterface from "~/interfaces/provider.interface";
import AddButton from "~/components/AddButton";
import NoResults from "~/components/NoResults";
import Supplier from "~/components/Supplier";
import Body from "../../components/Body";
import {
  List,
  ListFooter,
  SeparationComponent,
  SupplierFilter,
  Title,
} from "./styles";
import axios from "axios";
import { useLoading } from "~/hooks/useLoading";
import { useResultAnimation } from "~/hooks/useResultAanimation";
import { useSelector } from "react-redux";
import { RootState } from "~/redux";

function Home() {
  const { startLoading, finishLoading } = useLoading();
  const { animationStart } = useResultAnimation();
  const theme = useTheme();
  const { refresh_screen } = useSelector(
    (state: RootState) => state.homeReducer
  );

  const [allSuppliers, setAllSuppliers] = React.useState<ProviderInterface[]>(
    []
  );
  const [supplierList, setSupplierList] =
    React.useState<ProviderInterface[]>(allSuppliers);
  const [supplierFilter, setSupplierFilter] = React.useState("");

  React.useEffect(() => {
    startLoading();
    searchAllSuppliers();
  }, [refresh_screen]);

  React.useEffect(() => {
    filter();
  }, [supplierFilter]);

  function filter() {
    if (supplierFilter === "") {
      setSupplierList(allSuppliers);
    } else {
      const filtered_suppliers = allSuppliers.filter((provider) =>
        provider.company_name
          .toLowerCase()
          .includes(supplierFilter.toLowerCase())
      );
      setSupplierList(filtered_suppliers);
    }
  }

  async function searchAllSuppliers() {
    try {
      const response = await axios.get(`${API_URL}/`);
      const suppliers: ProviderInterface[] = response.data.allSuppliers;
      setAllSuppliers(suppliers);
      setSupplierList(suppliers);
      finishLoading();
    } catch (error) {
      animationStart(
        "error",
        "Algum erro inesperado ocorreu, tente novamente mais tarde"
      );
    }
  }

  return (
    <Body>
      <Title>Fornecedores</Title>
      {supplierList.length > 0 ? (
        <>
          <SupplierFilter
            placeholder="Filtre pelo Nome Social"
            placeholderTextColor={theme.COLORS.BLACK}
            autoCompleteType="off"
            autoCorrect={false}
            onChangeText={(fantasy_name) => setSupplierFilter(fantasy_name)}
          />
          <List
            data={supplierList}
            renderItem={(provider: ListProviderInterface) => (
              <Supplier provider={provider} />
            )}
            keyExtractor={(_, key) => key.toString()}
            ItemSeparatorComponent={() => <SeparationComponent />}
            ListFooterComponent={<ListFooter />}
            showsVerticalScrollIndicator={false}
          />
        </>
      ) : (
        <NoResults />
      )}
      <AddButton />
    </Body>
  );
}

export default Home;
