import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import LoginScreen from "../screens/LoginScreen";
import { useAuth } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const { isSigned } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!isSigned ? (
        <Stack.Screen name="Login" component={LoginScreen} />
      ) : (
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
}
