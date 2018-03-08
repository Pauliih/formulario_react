import React, { Component } from 'react'; // con component ya que tiene un componente de clase
import logo from './logo.svg';
import './App.css';

// Componente de clase debe tener un render(), como la función con llaves {} debe tener return
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hola Mundo!
        </p>
      </div>
    );
  }
}

export default App;
