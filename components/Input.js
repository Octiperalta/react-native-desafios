import React, { useEffect, useReducer } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Text from "./CustomText";

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return { ...state, value: action.value, isValid: action.isValid };
    case INPUT_BLUR:
      return { ...state, touched: true };
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, inputDispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    touched: false,
  });

  const { onInputChange, id } = props;

  const handleBlur = () => inputDispatch({ type: INPUT_BLUR });
  const handleChangeText = text => {
    const emailRegEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;

    if (props.required && text.trim().length === 0) isValid = false;
    if (props.email && !emailRegEx.test(text.toLowerCase())) isValid = false;
    if (props.minLength && text.length < props.minLength) isValid = false;

    inputDispatch({ type: INPUT_CHANGE, value: text, isValid: isValid });
  };

  useEffect(() => {
    onInputChange(id, inputState.value, inputState.isValid)
  }, [id, inputState]);

  return (
    <View style={styles.formControl}>
      <Text fontWeight='semibold' style={styles.label}>
        {props.label}
      </Text>
      <TextInput
        {...props}
        style={styles.input}
        value={inputState.value}
        onChangeText={handleChangeText}
        onBlur={handleBlur}
      />
      {!inputState.isValid && inputState.touched && (
        <View>
          <Text fontWeight='regular' style={styles.errorText}>
            {props.errorText}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  formControl: {
    width: 300,
    marginVertical: 20,
  },
  label: {
    marginVertical: -5,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#Ccc",
    borderBottomWidth: 1,
  },
  errorText: {
    color: "#cc7755",
  },
});
