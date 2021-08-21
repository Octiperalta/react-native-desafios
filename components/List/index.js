import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Item from "./ItemList";

const List = ({ content, handleModalOpen }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={content}
        keyExtractor={item => item.id}
        renderItem={data => (
          <Item data={data} handleModalOpen={handleModalOpen} />
        )}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
    borderRadius: 5,
  },
});
