import React from "react";
import { Button, StyleSheet, View } from "react-native";
import Text from "../components/CustomText";

export default function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text fontWeight='bold'>Categories Screen</Text>
      <Button
        title='Go to products'
        onPress={() => navigation.navigate("Products")}
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
