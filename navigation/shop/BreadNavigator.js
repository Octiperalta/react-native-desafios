import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../../screens/shop/CategoriesScreen";
import BreadDetailScreen from "../../screens/shop/BreadDetailScreen";
import COLORS from "../../constants/colors";
import { Platform } from "react-native";
import CategoryBreadScreen from "../../screens/shop/CategoryBreadScreen";
import CartScreen from "../../screens/cart/CartScreen";

const Stack = createNativeStackNavigator();
const ROUTES = {
  HOME: "Home",
};

const BreadNavigator = () => {
  return (
    <Stack.Navigator
      initialRoute={"Home"}
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? COLORS.primary : "white",
        },
        headerTintColor: Platform.OS === "android" ? "white" : COLORS.primary,
        headerTitleStyle: { fontWeight: "bold" },
      }}>
      <Stack.Screen
        name={ROUTES.HOME}
        options={{ headerTitle: "Tienda" }}
        component={CategoriesScreen}
      />
      <Stack.Screen
        name='Products'
        component={CategoryBreadScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name='Detail'
        component={BreadDetailScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default BreadNavigator;

const styles = StyleSheet.create({});
