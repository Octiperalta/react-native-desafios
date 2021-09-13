import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "./CustomText";

const BreadItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          justifyContent: "space-between",
          height: 40,
          alignItems: "center",
          backgroundColor: "lightgray",
          margin: 10,
          borderRadius: 5,
        }}>
        <View>
          <Text fontWeight='semibold' style={{ fontSize: 15 }}>
            {item.name}
          </Text>
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text fontWeight='medium' style={styles.price}>
            ${item.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BreadItem;

const styles = StyleSheet.create({
  price: {
    fontSize: 15,
    color: "#444",
  },
});
