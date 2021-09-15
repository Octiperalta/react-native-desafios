import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "./CustomText";
import { Feather } from "@expo/vector-icons";
import { removeItem } from "../store/actions/cart.actions";
import { useDispatch } from "react-redux";

const CartItem = ({ item, onDelete }) => {
  const dispatch = useDispatch();

  const handlerDeleteItem = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <View style={styles.item}>
      <View style={{ flex: 1 }}>
        <Text fontWeight='regular' style={{ fontSize: 18 }}>
          {item.name}
        </Text>
      </View>
      <View style={styles.detail}>
        <TouchableOpacity onPress={handlerDeleteItem}>
          <Feather name='trash-2' size={24} color='#333' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 12,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  detail: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});
