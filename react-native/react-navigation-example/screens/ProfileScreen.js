import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ProfileScreen({ navigation }) {
  const goHome = () => {
    navigation.navigate("HomeStack", { screen: "Home" });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comenzá a utilizar la aplicación</Text>
      <Button
        title="Iniciar sesión"
        onPress={() => navigation.navigate("Login")}
        color="teal"
      />
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
