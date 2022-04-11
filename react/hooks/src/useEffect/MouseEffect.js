/* Disparar efecto condicionalmente */

import { useState, useEffect } from "react";

const MouseEffect = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("pink");

  useEffect(() => {
    document.title = `Contador: ${count}`; // Le pasamos a useEffect una función que es nuestro efecto: actualizar el título del documento usando la API del navegador document.title
    console.log("Se ejecutó el efecto contador");
  }); // Sin dependencias, cada vez que se vuelva a renderizar el componente se va a producir el efecto contador
  //}, [count]); // Con esta dependencia le indico que quiero que se ejecute este efecto sólo cuando cambie el valor del estado count

  useEffect(() => {
    const onMouseMove = (event) =>
      event.clientX < window.innerWidth / 2
        ? setColor("pink")
        : setColor("blue");

    window.addEventListener("mousemove", onMouseMove); // Agrega un event listener al DOM por cada vez que se ejecute el efecto (sin dependencias esto ocurre cada vez que se actuliza el estado (color), lo cual resulta excesivo)
    console.log("Se ejecutó el efecto color");
  });

  return (
    <div>
      <p>El botón fue clickeado {count} veces</p>
      <button onClick={() => setCount(count + 1)}>¡Clickeame!</button>
      <div style={{ height: "100vh", backgroundColor: color, zIndex: -1 }} />
    </div>
  );
};

export default MouseEffect;
