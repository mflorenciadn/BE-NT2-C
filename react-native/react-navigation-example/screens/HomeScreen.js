import React, { useContext } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function HomeScreen({ navigation }) {
  const { user } = useContext(AuthContext);

  const goToDetails = () => {
    navigation.navigate("Details");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/astronaut.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Hola {user.name} 👋</Text>
      <Text style={styles.description}>
        Esta es la aplicación de prueba del curso C
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Conocer más" onPress={goToDetails} color="teal" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: "5%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: "teal",
    padding: 10,
  },
  description: {
    fontSize: 18,
    color: "gray",
    paddingBottom: "2%",
  },
  buttonContainer: {
    width: "90%",
  },
  image: {
    width: "80%",
    height: "50%",
  },
});
