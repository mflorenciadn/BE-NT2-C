// Método que corrobora en una base de datos si el usuario existe o no
// Esto normalmente se haría en el backend, y consultando a la base de datos
export function validateUser(email, password) {
  return email === "test@gmail.com" && password === "1234";
}

// Método que envía datos del usuario para verificar desde el backend si existe y asignarle un token -> POST
// Estructura esperada del response:
// data: {
//   user: {
//     email: string;
//     password: string;
//     name: string;
//   };
//   token: string;
// }
export function signInWithEmailAndPassword(email, password) {
  const isValidUser = validateUser(email, password);

  if (isValidUser) {
    return new Promise((resolve) => {
      //Acá iría la llamada al servicio con fetch usando el email y la password
      setTimeout(() => {
        resolve({
          data: {
            user: {
              email: "test@gmail.com",
              password: "1234",
              name: "Sofía",
            },
            token:
              "91j893h281h9nf98fnf2309jd09jkkd0as98238j9fr8j98f9j8f298r829r-f",
          },
        });
      }, 2000);
    });
  } else {
    throw Error("No se pudo autenticar al usuario");
  }
}

export const defaults = {
  headers: {
    Authorization: "",
  },
};
