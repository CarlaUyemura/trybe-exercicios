import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Pokedex
        <img src="https://play-lh.googleusercontent.com/XAJW5GQmMbevATb_G3ISjhQHsXzPGEUIzuk1RkZii6vA-lMaHRx4kdni8EOukGow5vsI=s48-rw" alt="icon" className='icon'/>
        </h1>
        
        </header>
      <Pokedex pokemons={pokemons}/>
    </div>
  );
}

export default App;
