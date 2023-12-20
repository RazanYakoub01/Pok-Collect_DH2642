import React from "react";
import Rating from 'react-rating'; // third party component
import "/src/css/search.css";
import "/src/css/textFonts.css";

const SearchResultsView = (props) => {
  const selectPokemonACB = (pokemon) => {
    props.onPokemonClick(pokemon);
  };

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

  // Update to use props.model.searchResultsPromiseState
  const pokemons = props.model.searchResultsPromiseState.data || [];

  // If there are no Pokémon with the current filter, display a message
  if (pokemons.length === 0) {
    return (
      <div className="no-results">
        <h2>Sorry, no matching Pokémon could be found!</h2>
      </div>
    );
  } else {
    // If there are Pokémon with current filters, display them
    return (
      <div className="search-results">
        {pokemons.map((pokemon) => {
          const isInCollection = props.model.collection.includes(pokemon.ID);

          return (
            <div
            className={`pokemon-card type-${pokemon.Types[0]}`}
              key={pokemon.ID}
              onClick={() => selectPokemonACB(pokemon)}
            >
              <h2 className="pokemon-card-title">
                <span className={`styled-title type-${pokemon.Types[0]}`}>
                  {pokemon.Name[0].toUpperCase() + pokemon.Name.substring(1)}
                </span>
              </h2>
              {props.model.isLoggedIn && (
            <div>
              <span>Collected: </span>
              <Rating
                initialRating={isInCollection ? 1 : 0}
                emptySymbol={<span className="star">&#9734;</span>}
                fullSymbol={<span className="star">&#9733;</span>}
                readonly
                stop={1}
              />
            </div>
            )}
              <img
                className="pokemon-card-image"
                src={pokemon.ImageURL}
                alt={pokemon.Name}
              />
              {renderStats(pokemon)}
            </div>
          );
        })}
      </div>
    );
  }
};

export default SearchResultsView;
