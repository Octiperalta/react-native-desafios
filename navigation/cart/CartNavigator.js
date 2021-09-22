import React from "react";
import { Platform } from "react-native";
import COLORS from "../../constants/colors";
import CartScreen from "../../screens/cart/CartScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRoute='Cart'
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? COLORS.primary : "white",
        },
        headerTintColor: Platform.OS === "android" ? "white" : COLORS.primary,
        headerTitleStyle: { fontWeight: "bold" },
      }}>
      <Stack.Screen
        name='Cart'
        component={CartScreen}
        options={{ title: "Carrito" }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;

