import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [loaded] = useFonts({
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
  });
  const [guessRounds, setGuessRounds] = useState(0);

  const handlerStartGame = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const handlerGameOver = rounds => {
    setGuessRounds(rounds);
  };

  const restartGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  let content = <StartGameScreen onStartGame={handlerStartGame} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen
        userOption={userNumber}
        onGameRestart={restartGame}
        onGameOver={handlerGameOver}
      />
    );
  } else if (guessRounds) {
    content = (
      <GameOverScreen
        rounds={guessRounds}
        onRestart={restartGame}
        choice={userNumber}
      />
    );
  }

  if (!loaded) return <AppLoading />;

  return (
    <View style={styles.screen}>
      <Header title='Adivina el número' />
      {content}
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
