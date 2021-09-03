import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from "react";
import { StyleSheet, View } from "react-native";
import BreadNavigator from "./navigation/BreadNavigator";

export default function App() {
  const [loaded] = useFonts({
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "poppins-semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return <BreadNavigator />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
