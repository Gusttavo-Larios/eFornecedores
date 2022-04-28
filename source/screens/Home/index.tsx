import * as React from "react";
import { useTheme } from "styled-components";
import AddButton from "~/components/AddButton";
import NoResults from "~/components/NoResults";
import Provider from "~/components/Provider";
import providers from "~/fakeData";
import ListProviderInterface from "~/interfaces/list.provider.interface";
import ProviderInterface from "~/interfaces/provider.interface";
import Body from "../../components/Body";
import {
  List,
  ListFooter,
  SeparationComponent,
  SupplierFilter,
  Title,
} from "./styles";

function Home() {
  const theme = useTheme();

  const [supplierList, setSupplierList] = React.useState<
    ProviderInterface[] | null
  >(providers);
  const [supplierFilter, setSupplierFilter] = React.useState("");

  React.useEffect(() => {
    filter();
  }, [supplierFilter]);

  function filter() {
    if (supplierFilter === "") {
      setSupplierList(providers);
    } else {
      const filtered_suppliers = providers.filter((provider) =>
        provider.company_name.includes(supplierFilter)
      );
      setSupplierList(filtered_suppliers);
    }
  }

  return (
    <Body>
      <Title>Fornecedores</Title>
      {supplierList ? (
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
              <Provider provider={provider} />
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
