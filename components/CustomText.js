import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CustomText(props) {
  return (
    <Text style={{ ...props.style, fontFamily: `poppins-${props.fontWeight}` }}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({});
