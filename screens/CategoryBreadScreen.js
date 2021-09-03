import React from "react";
import { Button, StyleSheet, View } from "react-native";
import Text from "../components/CustomText";

export default function CategoryBreadScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text fontWeight='bold'>Products Screen</Text>
      <Button
        title='Go to details'
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
