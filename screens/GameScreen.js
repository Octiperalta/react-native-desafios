import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import NumberContainer from "../components/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const random = Math.floor(Math.random() * (max - min) + min);

  if (random === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  console.log(random);
  return random;
};

export default function GameScreen({ userOption, onGameRestart, onGameOver }) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userOption)
  );
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userOption) onGameOver(rounds);
  }, [currentGuess, userOption]);

  const handlerNextGuess = direction => {
    if (
      (direction === "lower" && currentGuess < userOption) ||
      (direction === "greater" && currentGuess > userOption)
    ) {
      Alert.alert("No mientas", "Tu sabes que no es verdad!", [
        { text: "disculpa", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds(rounds + 1);
  };

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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: Dimensions.get("window").height > 600 ? 20 : 10,
          }}>
          <Button
            title='MENOR'
            onPress={handlerNextGuess.bind(this, "lower")}
          />
          <View style={{ marginLeft: 10 }}>
            <Button
              title='MAYOR'
              onPress={handlerNextGuess.bind(this, "greater")}
            />
          </View>
        </View>
      </View>
      <View style={{ alignSelf: "flex-start", marginHorizontal: 20 }}>
        <TouchableOpacity style={styles.backToMenu} onPress={onGameRestart}>
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
