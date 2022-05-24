import React, { useContext } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import ContactScreen from "../screens/ContactScreen";
import HomeScreen from "../screens/HomeScreen";
import { AuthContext } from "../context/AuthContext";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { signOut } = useContext(AuthContext);

  return (
    <Drawer.Navigator
      screenOptions={{
        itemStyle: {
          marginVertical: 5,
          marginHorizontal: 8,
          color: "#fdfdfd",
        },
        labelStyle: {
          fontSize: 30,
        },
      }}
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Cerrar Sesión"
            onPress={async () => await signOut()}
            itemStyle={{
              marginVertical: 5,
              marginHorizontal: 8,
              color: "#fdfdfd",
            }}
            labelStyle={{
              fontSize: 15,
            }}
          />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Inicio",
          headerTitle: "Te damos la bienvenida",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "teal",
          },
          headerTitleAlign: "center",
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          title: "Contacto",
          headerTitle: "",
          headerTransparent: true,
        }}
      />
    </Drawer.Navigator>
  );
}
