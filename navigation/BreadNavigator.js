import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryBreadScreen from "../screens/CategoryBreadScreen";
import BreadDetailScreen from "../screens/BreadDetailScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ROUTES = {
  HOME: "Home",
};

export default function BreadNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.HOME}
          options={{ headerTitle: "Categorias" }}
          component={CategoriesScreen}
        />
        <Stack.Screen name='Products' component={CategoryBreadScreen} />
        <Stack.Screen name='Detail' component={BreadDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
