import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ItemList = ({ data, handleModalOpen }) => {
  return (
    <View style={styles.item}>
      <Text>{data.item.name} </Text>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => handleModalOpen(data.item.id)}>
        <Text style={{ color: "white" }}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  item: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 6,
    padding: 6,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    backgroundColor: "#B1C1C0",
  },
  closeButton: {
    backgroundColor: "#918868",
    padding: 10,
    borderRadius: 4,
  },
});
