import React from "react";
import '/src/openCards.css';
import backOfPokeCard from "/src/openCardsImages/backOfPokeCard.jpg.avif";

const OpenCardsView = (props) => {

  const handleCardClick = (pokemon) => {
    console.log("Clicked on Pokemon:", pokemon);
  };

  return (
    <div className="open-cards-container">
      <h1>Open Packs</h1>
      <div className="pokemon-cards">
        {props.obtainedPokemon.map((pokemon) => (
          <div
            className="pokemonCardBack"
            key={pokemon}
            onClick={() => handleCardClick(pokemon)}>
            <img className="pokemon-card-image-back" src={backOfPokeCard}/>
          </div>
        ))}
      </div>
    </div>
  );
};
 export default OpenCardsView;