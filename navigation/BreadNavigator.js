import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import BreadDetailScreen from "../screens/BreadDetailScreen";
import COLORS from "../constants/colors";
import { Platform } from "react-native";
import CategoryBreadScreen from "../screens/CategoryBreadScreen";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ROUTES = {
  HOME: "Home",
};

export default function BreadNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRoute={"Home"}
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? COLORS.primary : "white",
          },
          headerTintColor: Platform.OS === "android" ? "white" : COLORS.primary,
          headerTitleStyle: { fontWeight: "bold" },
        }}>
        <Stack.Screen
          name={ROUTES.HOME}
          options={{ headerTitle: "Mi pan" }}
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

        <Stack.Screen
          name='Cart'
          component={CartScreen}
          options={{ title: "Carrito" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
