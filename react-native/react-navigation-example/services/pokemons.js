const API_HOST = "https://pokeapi.co/api/v2";

// Con async/await
export async function getPokemons() {
  try {
    const url = `${API_HOST}/pokemon?limit=50`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Solicitud fallida", error);
  }
}

// Con promesa
export function getPokemons2() {
  // Solicitud GET (Request)
  fetch(`${API_HOST}/pokemon?limit=50`)
    // Exito
    .then((response) => response.json()) // convertir a json
    .then((json) => console.log(json)) //imprimir los datos en la consola
    .catch((err) => console.log("Solicitud fallida", err)); //  capturar errores
}

export async function getPokemonDetails(id) {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
