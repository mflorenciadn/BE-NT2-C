import React, { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function ProfileScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  const goHome = () => {
    navigation.navigate("DrawerNavigator", { screen: "HomeNavigator" });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nombre: {user.name}</Text>
      <Text style={styles.title}>Email: {user.email}</Text>
      <Button title="Ir al inicio" onPress={goHome} color="teal" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
});
