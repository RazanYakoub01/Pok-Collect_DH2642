import React from "react";
import "../search.css";
import { useNavigate } from 'react-router-dom';
import "/src/textFonts.css";

const SearchResultsView = (props) => {
  const navigate = useNavigate();

  const selectPokemonACB = (pokemon) => {
    console.log("Selected Pokemon:", pokemon.Name);
    props.onPokemonClick(pokemon);
    navigate(`/details/${pokemon.ID}`);
  };

  // Update to use props.model.searchResultsPromiseState
  const pokemons = props.model.searchResultsPromiseState.data || [];

  // If there are no pokemon with the current filter display that
  if (pokemons.length === 0) {
    return (
      <div className="no-results">
        <h2>Sorry, no matching Pokémon could be found!</h2>
      </div>
    );
  } else {
    // If there are pokemon with current filters, display them
    return (
      <div className="search-results">
        {pokemons.map((pokemon) => (
          <div
            className={`pokemon-card type-${pokemon.Types[0]}`}
            key={pokemon.ID}
            onClick={() => selectPokemonACB(pokemon)}
          >
            <h2 className="textFont">{pokemon.Name[0].toUpperCase() + pokemon.Name.substring(1)}</h2>
            <img src={pokemon.ImageURL} alt={pokemon.Name} />
          </div>
        ))}
      </div>
    );
  }
};

export default SearchResultsView;
