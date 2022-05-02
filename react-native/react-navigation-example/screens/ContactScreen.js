import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

export default function ContactScreen() {
  const handleWhatsappPress = () => {
    Alert.alert(
      "Error al enviar el mensaje",
      "La aplicación WhatsApp no está instalada en este dispositivo"
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estamos en contacto</Text>
      <Text style={styles.description}>
        Si querés tener obtener más información, te podemos ayudar
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Contactar por WhatsApp"
          onPress={handleWhatsappPress}
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
