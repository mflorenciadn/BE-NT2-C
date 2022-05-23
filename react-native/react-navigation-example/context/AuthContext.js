import React, { createContext, useState, useContext } from "react";

import * as usersApi from "../services/usersApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isSigned, setIsSigned] = useState(false);

  async function Login(email, password) {
    const response = await usersApi.signInWithEmailAndPassword(email, password);
    setUser(response.data.user);
    usersApi.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    setIsSigned(true);
  }

  function Logout() {
    setUser(null);
    setIsSigned(false);
  }

  return (
    <AuthContext.Provider value={{ isSigned, user, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
