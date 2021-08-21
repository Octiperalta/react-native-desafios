import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import AddItem from "./components/AddItem";
import List from "./components/List";
import Modal from "./components/Modal";

export default function App() {
  const [textInput, setTextInput] = useState("");
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalOpen = id => {
    const item = itemList.find(item => item.id === id);
    setItemSelected(item);
    setModalVisible(true);
  };

  const handlePress = () => {
    // console.log("agreo item");
    setItemList([
      ...itemList,
      { id: Math.random().toString(), name: textInput },
    ]);
    setTextInput("");
  };
  const handleChangeInput = text => {
    // console.log(text);
    setTextInput(text);
  };

  const handleConfirmDelete = () => {
    const newList = itemList.filter(item => item.id !== itemSelected.id);
    setItemList(newList);
    setModalVisible(false);
    setItemSelected({});
  };

  return (
    <View style={styles.container}>
      <AddItem
        handleChangeInput={handleChangeInput}
        handlePress={handlePress}
        textInput={textInput}
      />
      <List content={itemList} handleModalOpen={handleModalOpen} />

      <Modal
        modalVisible={modalVisible}
        itemSelected={itemSelected}
        onConfirm={handleConfirmDelete}
        onCancel={() => {
          setModalVisible(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 30,
  },
});
