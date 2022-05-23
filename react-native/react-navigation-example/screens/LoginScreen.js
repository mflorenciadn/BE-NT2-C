import React, { useState } from "react";
import { StyleSheet, View, Text, Alert, ActivityIndicator } from "react-native";
import { Button } from "../components/Button";
import Input from "../components/Input";
import { useAuth } from "../context/AuthContext";

export function LoginForm({ setIsLoading }) {
  const { Login, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isIncompleteData = !email || !password;

  const onSubmit = async () => {
    if (isIncompleteData) {
      Alert.alert("Acceso inválido", "Todos los campos son obligatorios");
      return;
    }

    try {
      setIsLoading(true);

      await Login(email, password);
    } catch (err) {
      Alert.alert(
        "Acceso inválido",
        "Correo electrónico y/o contraseña incorrecta"
      );
      setIsLoading(false);

      return;
    }
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo electrónico"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType={"email-address"}
      />
      <Input
        placeholder="Contraseña"
        value={password}
        onChangeText={(text) => setPassword(text)}
        isPassword
      />
      <Button
        onPress={onSubmit}
        title="Iniciar sesión"
        disabled={isIncompleteData}
        inverted
      />
    </View>
  );
}

export default function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="white" />
        </View>
      ) : (
        <View style={styles.formView}>
          <Text style={styles.title}>Iniciar sesión</Text>
          <LoginForm setIsLoading={setIsLoading} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
    alignItems: "center",
    paddingTop: "10%",
    paddingHorizontal: "10%",
  },
  formView: {
    marginBottom: 20,
    alignContent: "center",
  },
  title: {
    fontSize: 30,
    alignContent: "center",
    textAlign: "center",
    color: "white",
    margin: 30,
  },
});
