import React, { useReducer } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { Button } from "react-native-elements";
import AuthScreenWrapper from "../../components/AuthScreenWrapper";
import Text from "../../components/CustomText";
import Input from "../../components/Input";
import COLORS from "../../constants/colors";
import { formReducer, FORM_INPUT_UPDATE } from "./formReducer";
import { login } from "../../store/actions/auth.actions";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [formState, formDispatch] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    formIsValid: false,
  });

  const onInputChangeHandler = (inputIdentifier, inputValue, inputValidity) => {
    formDispatch({
      type: FORM_INPUT_UPDATE,
      value: inputValue,
      isValid: inputValidity,
      input: inputIdentifier,
    });
  };

  const handleLogin = () => {
    dispatch(
      login(formState.inputValues.email, formState.inputValues.password)
    );
  };

  return (
    <AuthScreenWrapper
      title='INGRESAR'
      message='¿Aun no tienes cuenta?'
      buttonText='Ir al registro'
      buttonPath='Register'>
      <Input
        id='email'
        label='Email'
        keyboardType='email-address'
        autoCapitalize='none'
        errorText='Por favor ingresa un email válido'
        required
        email
        onInputChange={onInputChangeHandler}
      />
      <Input
        label='Password'
        id='password'
        secureTextEntry
        autoCapitalize='none'
        errorText='Ingresa una contraseña de 6 caracteres'
        required
        minLength={6}
        onInputChange={onInputChangeHandler}
      />
      <Button
        title='INGRESAR'
        onPress={handleLogin}
        buttonStyle={styles.button}
      />
    </AuthScreenWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  button: { backgroundColor: COLORS.primary },
});
