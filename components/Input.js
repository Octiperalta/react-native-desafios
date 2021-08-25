import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function Input(props) {
  return <TextInput {...props} style={{ ...props.style, ...styles.input }} />;
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    paddingHorizontal: 5,
    width: 50,
    textAlign: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
