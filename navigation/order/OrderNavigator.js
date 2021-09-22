import React from "react";
import { Platform } from "react-native";
import COLORS from "../../constants/colors";
import CartScreen from "../../screens/cart/CartScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../../screens/order/OrderScreen";


const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
  return (
    <Stack.Navigator
      initialRoute='Orders'
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? COLORS.primary : "white",
        },
        headerTintColor: Platform.OS === "android" ? "white" : COLORS.primary,
        headerTitleStyle: { fontWeight: "bold" },
      }}>
      <Stack.Screen
        name='Orders'
        component={ProfileScreen}
        options={{ title: "Mis Ordenes" }}
      />
    </Stack.Navigator>
  );
};

export default OrderNavigator;

