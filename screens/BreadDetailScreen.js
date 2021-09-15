import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { FAB } from "react-native-elements/dist/buttons/FAB";
import { useDispatch, useSelector } from "react-redux";
import Text from "../components/CustomText";
import { Entypo } from "@expo/vector-icons";
import { addItem } from "../store/actions/cart.actions";

export default function BreadDetailScreen({ navigation, route }) {
  // const bread = BREADS.find(item => item.id === route.params.productID);
  const dispatch = useDispatch();
  const breadID = useSelector(state => state.breads.selectedID);
  const breads = useSelector(state => state.breads.list);
  const bread = breads.find(item => breadID === item.id);

  const handleAddItemCart = () => {
    dispatch(addItem(bread));
  };

  return (
    <View style={styles.container}>
      <Text fontWeight='bold'>{bread.name}</Text>
      <Text fontWeight='regular'>{bread.description}</Text>
      <Text fontWeight='regular'>{bread.price}</Text>
      <Text fontWeight='regular'>{bread.weight}</Text>
      <FAB
        icon={<Entypo name='plus' size={24} color='white' />}
        placement='right'
        color={"#659157"}
        onPress={handleAddItemCart}
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
    textAlign: "center",
  },
});
