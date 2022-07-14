import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render(){
    const {pokemons} = this.props
    return (
      <div className="card">
        {pokemons.map((element) => <Pokemon pokemon={element} key={element.id}/>)}
      </div>
    )
  }
}

export default Pokedex;