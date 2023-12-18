import React from "react";
import "../search.css";
import { useNavigate } from 'react-router-dom';
import "/src/textFonts.css";

const SearchResultsView = (props) => {
  const navigate = useNavigate();

  const selectPokemonACB = (pokemon) => {
    props.onPokemonClick(pokemon);
    navigate(`/details/${pokemon.ID}`);
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
        {pokemons.map((pokemon) => (
          <div
            className={`pokemon-card type-${pokemon.Types[0]}`}
            key={pokemon.ID}
            onClick={() => selectPokemonACB(pokemon)}
          >
            <h2 className="pokemon-card-title">
              <span
                className={`styled-title type-${pokemon.Types[0]}`}
              >
                {pokemon.Name[0].toUpperCase() + pokemon.Name.substring(1)}
              </span>
            </h2>
            <img
              className="pokemon-card-image"
              src={pokemon.ImageURL}
              alt={pokemon.Name}
            />
            {renderStats(pokemon)}
          </div>
        ))}
      </div>
    );
  }
};

export default SearchResultsView;
