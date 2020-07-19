import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeIcon from "react-native-vector-icons/Entypo";
import SettingsIcon from "react-native-vector-icons/Feather";
import { HomeScreen } from "./Home/Home";
import { SettingsScreen } from "./Settings/Settings";
export const Main = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name == "Home")
              return <HomeIcon name="home" size={size} color={color} />;
            else if ((route.name = "Settings"))
              return <SettingsIcon name="settings" size={size} color={color} />;
          },
        })}
      >
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Settings" component={SettingsScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};
