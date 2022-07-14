import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick1() {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1,
    }));
    console.log(`Btn 1 ${this.numberPar(this.state.numeroDeCliques1)}`);
  }
  handleClick2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1,
    }));
    console.log(`Btn 2 ${this.numberPar(this.state.numeroDeCliques2)}`);
  }
  handleClick3() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1,
    }));
    console.log(`Btn 3 ${this.numberPar(this.state.numeroDeCliques3)}`);
  }
  numberPar(number) {
    return number % 2 === 0 ? "green" : "white";
  }

  render() {
    return (
      <>
        <button
          onClick={this.handleClick1}
          style={{
            backgroundColor: this.numberPar(this.state.numeroDeCliques1),
          }}
        >
          Botão 1 | Count = {this.state.numeroDeCliques1}
        </button>
        <button
          onClick={this.handleClick2}
          style={{
            backgroundColor: this.numberPar(this.state.numeroDeCliques2),
          }}
        >
          Botão 2 | Count = {this.state.numeroDeCliques2}
        </button>
        <button
          onClick={this.handleClick3}
          style={{
            backgroundColor: this.numberPar(this.state.numeroDeCliques3),
          }}
        >
          Botão 3 | Count = {this.state.numeroDeCliques3}
        </button>
      </>
    );
  }
}

export default App;
