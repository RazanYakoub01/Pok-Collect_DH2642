import React, { useState, useEffect } from "react";
import '/src/openCards.css';
import "../search.css";
import "../collection.css";
import "/src/textFonts.css";
import ReactCardFlip from 'react-card-flip';    //third party component
import backOfPokeCard from "/src/openCardsImages/backOfPokeCard.jpg.avif";

const OpenCardsView = (props) => {

  const handleCollectionClick = () => {
    props.onCollectionClick();
  };

  const firePacksClick = () => {
    props.onPacksClick();
  };

  // I use useState hook to set the state to false in the beginning.
  // isFlippedArray represents the flipped state of each Pokémon card.
  const [isFlippedArray, setIsFlippedArray] = useState(
    Array(props.obtainedPokemon.length).fill(false)
  );

  // Need this to controll the flipped state of a Pokémon card at a specified index.
  const flipEffect = (index) => {
    const newIsFlippedArray = [...isFlippedArray];
    // Change the value at the specified index.
    newIsFlippedArray[index] = !newIsFlippedArray[index];
    //update the new state of the pokemon card
    setIsFlippedArray(newIsFlippedArray);
  };

  //state to check if all cards are flipped
  const [areAllCardsFlipped, setAreAllCardsFlipped] = useState(false);

  // handle the side effect off flip state
  useEffect(() => {
    // Checks if all cards are flipped, then the btn gets renderd
    if (isFlippedArray.every((flipped) => flipped)) {
      // set state to true if all have been flipped
      setAreAllCardsFlipped(true);
    }
  }, [isFlippedArray]);

  const renderStats = (pokemon) => (
    <div className="pokemon-stats">
      <div className="stat-item">
        <span>Attack: {pokemon.Stats.attack}</span>
      </div>
      <div className="stat-item">
        <span>Defense: {pokemon.Stats.defense}</span>
      </div>
      <div className="stat-item">
        <span>Speed: {pokemon.Stats.speed}</span>
      </div>
    </div>
  );

  return (
    <div className="search-results open-cards-view">
      <h1>Discover Your new Pokémon!</h1>
      <div className="pokemon-cards">
        {props.obtainedPokemon.map((pokemon, index) => (
          <ReactCardFlip
            key={pokemon.ID}
            flipDirection="horizontal"
            isFlipped={isFlippedArray[index]}>
            <div key="front">
              <img src={backOfPokeCard} className="backImage" onClick={() => flipEffect(index)}/>
            </div>
            <div key="back" className={`pokemon-card type-${pokemon.Types[0]}`}>
              <h2 className="pokemon-card-title">
                <span className={`styled-title type-${pokemon.Types[0]}`}>
                  {pokemon.Name[0].toUpperCase() + pokemon.Name.substring(1)}
                </span>
              </h2>
              <img className="pokemon-card-image" src={pokemon.ImageURL}/>
              {renderStats(pokemon)}
            </div>
          </ReactCardFlip>
        ))}
      </div>
      {areAllCardsFlipped && (
       <div className="collectionButton-container">
       <button className="collectionButton" onClick={handleCollectionClick}>Go To Collection!</button>
       <button className="collectionButton" onClick={firePacksClick}>Open More Packs</button>
     </div>
      )}
    </div>
  );
};


export default OpenCardsView;
