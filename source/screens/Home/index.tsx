import * as React from "react";
import { ListRenderItemInfo } from "react-native";
import { useTheme } from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "@env";
import SupplierInterface from "~/interfaces/supplier.interface";
import Body from "~/components/Body";
import Supplier from "~/components/Supplier";
import AddButton from "~/components/AddButton";
import NoResults from "~/components/NoResults";
import { useLoading } from "~/hooks/useLoading";
import { useResultAnimation } from "~/hooks/useResultAanimation";
import { RootState } from "~/redux";
import {
  List,
  ListFooter,
  SeparationComponent,
  SupplierFilter,
  Title,
} from "./styles";

function Home() {
  const { startLoading, finishLoading } = useLoading();
  const { animationStart } = useResultAnimation();
  const theme = useTheme();
  const { refresh_screen } = useSelector(
    (state: RootState) => state.homeReducer
  );

  const [allSuppliers, setAllSuppliers] = React.useState<SupplierInterface[]>(
    []
  );
  const [supplierList, setSupplierList] =
    React.useState<SupplierInterface[]>(allSuppliers);
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
      setSupplierList(
        filtered_suppliers.length > 0 ? filtered_suppliers : allSuppliers
      );
    }
  }

  async function searchAllSuppliers() {
    try {
      const response = await axios.get(`${API_URL}/`);
      const suppliers: SupplierInterface[] = response.data.allSuppliers;
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

  function renderItem({ item }: ListRenderItemInfo<SupplierInterface>) {
    return <Supplier provider={item} />;
  }

  return (
    <Body>
      <>
        <Title>Fornecedores</Title>
        {supplierList.length > 0 ? (
          <>
            <SupplierFilter
              placeholder="Filtre pelo Nome Social"
              placeholderTextColor={theme.COLORS.BLACK}
              autoCompleteType="off"
              autoCorrect={false}
              value={supplierFilter}
              onChangeText={(fantasy_name) => setSupplierFilter(fantasy_name)}
            />
            <List
              data={supplierList}
              renderItem={renderItem}
              keyExtractor={(item, key) => key.toString()}
              ItemSeparatorComponent={() => <SeparationComponent />}
              ListFooterComponent={<ListFooter />}
              showsVerticalScrollIndicator={false}
            />
          </>
        ) : (
          <NoResults />
        )}
        <AddButton />
      </>
    </Body>
  );
}

export default Home;
