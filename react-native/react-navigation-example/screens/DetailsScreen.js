import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Nosotros</Text>
      <Text style={styles.description}>
        Voluptate ipsum consequat ea eiusmod. Commodo labore qui minim ullamco
        dolore veniam cillum nostrud. Commodo ad excepteur ut id nisi duis
        eiusmod. In pariatur minim ea aliquip Lorem minim est aliquip eiusmod
        mollit duis in Lorem ea. Aute eu elit cillum eu eiusmod anim aliquip ut
        in excepteur nulla sunt. Sit qui cillum laboris laborum non ad laboris
        Lorem commodo enim et id. Et enim velit quis labore nisi esse.
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Volver al inicio"
          onPress={() => navigation.goBack()}
          color="teal"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "10%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: "teal",
    marginBottom: "10%",
  },
  description: {
    fontSize: 18,
    color: "gray",
  },
  buttonContainer: {
    marginTop: "20%",
    width: "90%",
  },
});
