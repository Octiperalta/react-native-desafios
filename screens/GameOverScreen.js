import React, { useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function GamOverScreen({ rounds, choice, onRestart }) {
  const [isPortrait, setIsPortrait] = useState(true);

  const onPortrait = () => {
    const dim = Dimensions.get("window");

    return dim.height >= dim.width;
  };

  const statePortrait = () => setIsPortrait(onPortrait());

  useEffect(() => {
    Dimensions.addEventListener("change", statePortrait);
    statePortrait();
    return () => Dimensions.removeEventListener("change", statePortrait);
  });

  return (
    <View style={isPortrait ? styles.screen : styles.screenld}>
      <Image
        source={require("../assets/gameover.jpg")}
        style={isPortrait ? styles.image : styles.imageld}
        resizeMode='contain'
      />
      <View style={{ marginLeft: 10 }}>
        <Text>Intentos: {rounds}</Text>
        <Text>El número era: {choice}</Text>
        <Button title='NUEVO JUEGO' onPress={onRestart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenld: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: 300,
  },
  imageld: {
    width: "50%",
    height: 300,
  },
});
