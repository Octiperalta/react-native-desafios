import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BreadNavigator from "./shop/BreadNavigator";
import AuthNavigator from "./user/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import TabNavigator from "./tab/TabNavigator";


const MainNavigator = () => {
  const userId = useSelector(state => state.auth.userId);
  console.log(userId)

  return (
    <NavigationContainer>
      {userId ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
