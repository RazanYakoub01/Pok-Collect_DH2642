// src/views/searchFormView.jsx
import React from "react";
import "../search.css";

const SearchResultsView = (props) => {

  const filteredPokemons = props.pokemons.filter((pokemon) => {
    // If no types are selected, include all pokemons
    if (props.selectedTypes.length === 0) {
      return true;
    }
  
    // Count how many of the pokemon's types are in the selected types
    const matchingTypeCount = pokemon.Types.reduce((count, type) => {
      return count + (props.selectedTypes.includes(type) ? 1 : 0);
    }, 0);
  
    // If only one type is selected, we check for at least one match
    // If multiple types are selected, we check if all matches are found
    return props.selectedTypes.length === 1 ? matchingTypeCount > 0 : matchingTypeCount === props.selectedTypes.length;
  });
  

  return (
    <div className="search-results">
      {filteredPokemons.map((pokemon) => (
        console.log(pokemon.Types[0]),
        <div className={`pokemon-card type-${pokemon.Types[0]}`} key={pokemon.ID}>
          <h2>{pokemon.Name[0].toUpperCase() + pokemon.Name.substring(1)}</h2>
          <img src={pokemon.ImageURL} alt={pokemon.name} />
          </div>
      ))}
    </div>
  );
};

export default SearchResultsView;
