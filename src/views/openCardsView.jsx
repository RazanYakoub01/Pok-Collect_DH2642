import React from "react";
import '/src/openCards.css';

const OpenCardsView = (props) => {
  return (
    <div>
      <h1>Open Packs</h1>
      <div className="obtained-pokemon">
        {props.obtainedPokemon.map((pokemon) => (
          <div key={pokemon.ID} className="pokemon-card">
            <img src={pokemon.imageUrl}/>
            <p>{pokemon.Name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
 export default OpenCardsView;