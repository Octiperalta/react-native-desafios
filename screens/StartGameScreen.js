import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import COLORS from "../constants/colors";

export default function StartGameScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Comenzar el juego</Text>
      <View style={styles.inputContainer}>
        <Text>Elija un numero para comenzar el juego</Text>
        <TextInput />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={{ ...styles.buttonSecondary, marginRight: 10 }}
            onPress={() => {}}>
            <Text style={styles.buttonText}>Limpiar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSuccess} onPress={() => {}}>
            <Text style={{ ...styles.buttonText, color: "#fff" }}>
              Confirmar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  inputContainer: {
    marginTop: 20,
    width: 300,
    padding: 20,
    maxWidth: "80%",
    alignItems: "center",
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 6,
    // elevation: 5,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "gray",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonSecondary: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    borderColor: "#63595C",
    borderWidth: 1,
    borderRadius: 3,
    alignItems: "center",
    width: 100,
  },
  buttonSuccess: {
    paddingVertical: 8,
    borderColor: "#1C820D",
    borderWidth: 1,
    borderRadius: 3,
    alignItems: "center",
    width: 100,
    backgroundColor: COLORS.success,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
  },
});
