import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../screens/DetailsScreen";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName="Drawer">
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
