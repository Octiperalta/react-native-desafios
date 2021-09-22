import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Text from "./CustomText";
import { useNavigation } from "@react-navigation/native";

const AuthScreenWrapper = ({
  children,
  title,
  message,
  buttonText,
  buttonPath,
}) => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView behavior='height' style={styles.screen}>
      <View style={styles.screen}>
        <Text fontWeight='bold' style={styles.title}>
          {title}
        </Text>
        <View style={styles.content}>{children}</View>
        <View style={styles.prompt}>
          <Text fontWeight='regular' style={styles.promptMessage}>
            {message}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate(buttonPath)}>
            <Text fontWeight='medium' style={styles.promptButton}>
              {"  "}
              {buttonText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreenWrapper;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 18,
  },
  content: {
    alignSelf: "flex-start",
  },
  prompt: {
    flexDirection: "row",
    marginTop: 20,
  },
});
