/* Estructura básica de useEffect */

// importamos useEffect, el hook que permite indicar a React que el componente tiene que hacer algo después de renderizarse.
import { useState, useEffect } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${count}`; // Le pasamos a useEffect una función que es nuestro efecto: actualizar el título del documento usando la API del navegador document.title
  });

  return (
    <div>
      <p>El botón fue clickeado {count} veces</p>
      <button onClick={() => setCount(count + 1)}>¡Clickeame!</button>
    </div>
  );
};

export default CounterEffect;

/*
Este mismo componente si fuese un componente de clase se vería así:

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

 !!!!
 Se duplica el código en los dos métodos de vida, dado que se quiera llevar a cabo el mismo efecto secundario sin importar si el componente se acaba de montar o si se ha actualizado
 (conceptualmente se quiere que ocurra luego de cada renderizado, pero las clases no tienen un método que haga eso)
 !!!!
 componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
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
