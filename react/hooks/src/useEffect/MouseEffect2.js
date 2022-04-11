/* UseEffect con cleanup */

import { useState, useEffect } from "react";

const ColorBox = () => {
  const [color, setColor] = useState("pink");

  useEffect(() => {
    const onMouseMove = (event) =>
      event.clientX < window.innerWidth / 2
        ? setColor("pink")
        : setColor("blue");

    window.addEventListener("mousemove", onMouseMove);
    console.log("Se ejecutó el efecto");

    // Función de limpieza (cleanup): se ejecutará justo antes de que se desmonte el componente y antes de cada ejecución del efecto
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      console.log("Se limpió el efecto");
    };
  });
  // }, []); Con esta dependencia el efecto se ejecutará sólo en el primer render, lo cual evitará sumar un event listener en cada cambio de color

  return <div style={{ height: "100vh", backgroundColor: color }} />;
};

const MouseEffect2 = () => {
  const [showColorBox, setShowColorBox] = useState(true);

  return (
    <div>
      <button onClick={() => setShowColorBox(!showColorBox)}>
        {showColorBox ? "Dejar de mostrar" : "Mostrar"}
      </button>
      {showColorBox && <ColorBox />}
    </div>
  );
};

export default MouseEffect2;
