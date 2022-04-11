// importamos useState, el hook que permite mantener un estado local en un componente funcional
import { useState } from "react";

const CounterState = () => {
  // useState recibe un parámetro: el valor inicial del estado (que en este caso será 0)
  // y devuelve un array de dos posiciones:
  // la primera (count), contendrá el valor del estado en cada momento
  // la segunda (setCount), contendrá el método para actualizar el estado
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1); // actualizamos el estado llamando a setCount pasándole como argumento el nuevo valor de count
  };

  return (
    <div>
      <p>El botón fue clickeado {count} veces</p>{" "}
      {/* leemos el estado utilizando el nombre de la variable entre llaves */}
      <button onClick={handleClick}>¡Clickeame!</button>
      {/* llamamos a la función handleClick, que permitirá actualizar el estado  */}
      {/*

      También podría pasarse una función anónima inline dentro del onClick:

      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

     */}
    </div>
  );
};

export default CounterState;

/*
Este mismo componente si fuese un componente de clase se vería así:


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

 */
