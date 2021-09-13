import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import Text from "../components/CustomText";

export default function BreadDetailScreen({ navigation, route }) {
  // const bread = BREADS.find(item => item.id === route.params.productID);
  const breadID = useSelector(state => state.breads.selectedID);
  const breads = useSelector(state => state.breads.list);
  const bread = breads.find(item => breadID === item.id);

  return (
    <View style={styles.container}>
      <Text fontWeight='bold'>{bread.name}</Text>
      <Text fontWeight='regular'>{bread.description}</Text>
      <Text fontWeight='regular'>{bread.price}</Text>
      <Text fontWeight='regular'>{bread.weight}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
