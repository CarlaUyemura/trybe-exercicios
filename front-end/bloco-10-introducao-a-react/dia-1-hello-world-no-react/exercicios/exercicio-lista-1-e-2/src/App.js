import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key = {value}>{value}</li>
  );
}
const tasks = ['Jogar', 'Jogar depois do almoço', 'Jogar até cair o dedo'];

class App extends React.Component {
  render() {
    return (
      <ol>{
        tasks.map((item) => Task(item))
        }</ol>
    );
  }
};

export default App;
