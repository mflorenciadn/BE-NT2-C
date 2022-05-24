import React, { createContext, useState } from "react";

import * as usersApi from "../services/usersApi";

//1er paso: crear el contexto
export const AuthContext = createContext();

//2do paso: crear el Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isSigned, setIsSigned] = useState(false);

  async function signIn(email, password) {
    // Del lado de backend habrá una función para loguearse. A esta función le vamos a mandar el email y password y en el backend se harán las validaciones correspondientes
    const response = await usersApi.signInWithEmailAndPassword(email, password);
    setUser(response.data.user);
    usersApi.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    setIsSigned(true);
  }

  function signOut() {
    setUser(null);
    setIsSigned(false);
  }

  return (
    <AuthContext.Provider value={{ isSigned, user, signIn, signOut }}>
      {/* 1 a N componentes que van a consumir el contexto */}
      {children}
    </AuthContext.Provider>
  );
};
