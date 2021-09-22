import React from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "../shop/BreadNavigator";
import CartNavigator from "../cart/CartNavigator";
import Text from "../../components/CustomText";
import OrderNavigator from "../order/OrderNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='ShopTab'
      screenOptions={{
        headerShown: false,
        tabBarStyle: { ...styles.tabBar, ...styles.shadow },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name='ShopTab'
        component={ShopNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.item}>
              <Ionicons name='md-home' size={24} color='black' />
              <Text fontWeight='medium'>Tienda</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='CartTab'
        component={CartNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.item}>
              <Ionicons name='md-cart' size={24} color='black' />
              <Text fontWeight='medium'>Cart</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='OrderTab'
        component={OrderNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.item}>
              <Ionicons name='clipboard' size={24} color='black' />
              <Text fontWeight='medium'>Ordenes</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7f5df0",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBar: {
    position: "relative",
    marginHorizontal: 15,
    bottom: 15,
    left: 0,
    right: 0,
    elevation: 0,
    borderRadius: 20,
    height: 59,
  },
});
