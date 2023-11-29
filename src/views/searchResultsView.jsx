// src/views/searchFormView.jsx
import React from "react";

const SearchResultsView = (props) => {

  return (
    <div>
      {props.pokemons.map((pokemon) => (
        <div key={pokemon.ID}>
          <h2>{pokemon.Name[0].toUpperCase() + pokemon.Name.substring(1)}</h2>
          <img src={pokemon.ImageURL} alt={pokemon.name} />
        </div>
      ))}
    </div>
  );
};

export default SearchResultsView;
