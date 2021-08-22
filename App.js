import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title='Adivina el número' />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
