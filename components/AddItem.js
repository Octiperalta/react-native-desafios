import React from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

const AddItem = ({ handleChangeInput, handlePress, textInput }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TextInput
        placeholder='Add a new item'
        style={styles.itemInput}
        value={textInput}
        onChangeText={handleChangeInput}
      />
      <Button title=' + ' color='#BCC25B' onPress={handlePress} />
      {/* <TouchableHighlight>TouchableHighlight</TouchableHighlight> */}
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  itemInput: {
    borderColor: "black",
    borderBottomWidth: 1,
    paddingVertical: 2,
    flex: 1,
    marginRight: 5,
  },
});
