import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NumberContainer from "../components/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const random = Math.floor(Math.random() * (max - min) + min);

  if (random === exclude) {
    return generateRandomBetween(min, max, exclude);
  }

  return random;
};

export default function GameScreen({ userOption, handlerStartGame }) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userOption)
  );

  return (
    <View
      style={{
        alignItems: "center",
        marginVertical: 18,
        justifyContent: "space-between",
        flex: 1,
      }}>
      <View>
        <Text style={{ textAlign: "center", fontSize: 18 }}>
          La suposicion del oponente es:{" "}
        </Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Button title='MENOR' />
          <View style={{ marginLeft: 10 }}>
            <Button title='MAYOR' />
          </View>
        </View>
      </View>
      <View style={{ alignSelf: "flex-start", marginHorizontal: 20 }}>
        <TouchableOpacity
          style={styles.backToMenu}
          onPress={() => handlerStartGame(null)}>
          <Text
            style={{ textAlign: "center", fontSize: 15, fontWeight: "bold" }}>
            Volver al menu
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backToMenu: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#999",
  },
});
