import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <MyButton text='Mi componente botón'></MyButton>
        </div>
        <Home buttonText='Mi botón desde Home'></Home>
      </header>
    </div>
  );
}

export default App;
