import React, { useCallback, useReducer } from "react";
import { Alert, StyleSheet } from "react-native";
import AuthScreenWrapper from "../../components/AuthScreenWrapper";
import { Button } from "react-native-elements";
import Text from "../../components/CustomText";
import COLORS from "../../constants/colors";
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions/auth.actions";
import Input from "../../components/Input";
import { formReducer, FORM_INPUT_UPDATE } from "./formReducer";


const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [formState, formDispatch] = useReducer(formReducer, {
    inputValues: { email: "", password: "" },
    formIsValid: false,
  });

  const handlerSignUp = () => {
    dispatch(
      signup(formState.inputValues.email, formState.inputValues.password)
    );
  };

  const onInputChangeHandler = (inputIdentifier, inputValue, inputValidity) => {
    formDispatch({
      type: FORM_INPUT_UPDATE,
      value: inputValue,
      isValid: inputValidity,
      input: inputIdentifier,
    });
  };

  return (
    <AuthScreenWrapper
      title='REGISTRO'
      message='¿Ya tienes cuenta?'
      buttonText='Ingresar'
      buttonPath='Login'>
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
        title='Registrarme'
        onPress={handlerSignUp}
        buttonStyle={styles.button}
      />
    </AuthScreenWrapper>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  button: { backgroundColor: COLORS.primary },
});
