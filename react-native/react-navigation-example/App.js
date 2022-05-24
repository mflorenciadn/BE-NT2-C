import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./navigation/MainNavigator";
import "react-native-gesture-handler";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    //  <AuthProvider> sería lo mismo que envolvertodo en <AuthContext.Provider value={{ isSigned, user, signIn, signOut }}></AuthContext.Provider> -> En este último caso habría que exportar todos los elementos (isSigned, user, etc) desde AuthProvider e importarlos acá en App
    <AuthProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
