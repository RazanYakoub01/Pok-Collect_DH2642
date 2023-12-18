import React from 'react';
import "../search.css";
import "../collection.css";
import "/src/textFonts.css";
import { useNavigate } from 'react-router-dom';
import backpack from '/src/collectionImages/backpack.png';

// add collected date? 

const CollectionView = (props) => {

  const navigate = useNavigate();

  const selectPokemonACB = (pokemon) => {
    props.onPokemonClick(pokemon);
    navigate(`/details/${pokemon.ID}`);
  };

  return (
    <div className="collection-view">
      <div className="collection-header">
        <img src={backpack} />
        <h1 className="titleFont collection">{props.user}'s Pokémon Collection</h1>
      </div>
      <div>{`Collected ${props.model.collection.length} Pokémon out of ${props.model.initializePokemonDataPromiseState.data.length}`}</div>
      <div className="search-results">
        {props.model.collectionPromiseState.data.map((pokemon) => (
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
    </div>
  );
}

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



export default CollectionView;