import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import { Routes } from "./source/routes";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./source/theme";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import store from "~/redux";
import DialogModal from "~/components/DialogModal";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar hidden />
      <Provider store={store}>
        <Routes />
        <DialogModal />
      </Provider>
    </ThemeProvider>
  );
}
