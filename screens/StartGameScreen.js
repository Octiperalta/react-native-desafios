import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import COLORS from "../constants/colors";

export default function StartGameScreen({ onStartGame }) {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const handlerInputNumber = text => {
    // La funcion 'replace' toma un ER y si lo encuentra lo reemplaza por el segundo argumento
    setEnteredValue(text.replace(/[^0-9]/g, "")); // Lo que no sea un numero, lo reemplaza por un string vacio
  };

  const handlerResetInput = () => setEnteredValue("");

  const handlerConfirmInput = () => {
    const chosenNumber = parseInt(enteredValue);
    if (Object.is(NaN, chosenNumber) || chosenNumber <= 0 || chosenNumber > 99)
      return;

    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
  };

  const confirmedOutput = confirmed ? (
    <View>
      <NumberContainer>{selectedNumber}</NumberContainer>
      <TouchableOpacity
        style={styles.buttonSuccess}
        onPress={() => onStartGame(selectedNumber)}>
        <Text style={styles.buttonText}>Comenzar Juego</Text>
      </TouchableOpacity>
    </View>
  ) : null;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <Text style={styles.title}>Comenzar el juego</Text>
        <View style={styles.inputContainer}>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              fontWeight: "bold",
              color: "#333",
            }}>
            Elija un numero para comenzar el juego
          </Text>
          <Input
            keyboardType='numeric'
            blurOnSubmit={true}
            autoCorrect={false}
            maxLength={2}
            autoCapitalize='none'
            onChangeText={handlerInputNumber}
            value={enteredValue}
          />
          {/* <TextInput /> */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={{ ...styles.buttonSecondary, marginRight: 10 }}
              onPress={handlerResetInput}>
              <Text style={styles.buttonText}>Limpiar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonSuccess}
              onPress={handlerConfirmInput}>
              <Text style={{ ...styles.buttonText, color: "#fff" }}>
                Confirmar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
    fontFamily: "poppins-bold",
    color: "#333",
  },
  inputContainer: {
    marginTop: 20,
    width: 300,
    padding: 20,
    maxWidth: "80%",
    alignItems: "center",
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
    textAlign: "center",
    textTransform: "uppercase",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
});
