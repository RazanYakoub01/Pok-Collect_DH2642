import React, { useState } from 'react';
import '../search.css';
import '../collection.css';
import '/src/textFonts.css';
import backpack from '/src/collectionImages/backpack.png';

const CollectionView = (props) => {
  const [selectedGen, setSelectedGen] = useState('all');

  const handleGenerationFilter = (gen) => {
    setSelectedGen(gen);
  };

  // Calculate counts for each filter category
  const totalCounts = {
    all: props.collection.length,
    legendary: props.collectedGenTen,
  };

  for (let gen = 1; gen <= 9; gen++) {
    totalCounts[gen] = props.totalCountByGeneration[gen];
  }

  const totalCount = selectedGen === 'legendary' ? totalCounts[selectedGen] : totalCounts[selectedGen] || 0;

  return (
    <div className="collection-view">
      <div className="collection-header">
        <img src={backpack} alt="Backpack" />
        <h1 className="titleFont collection">{props.user}'s Pokémon Collection</h1>
      </div>

      {/* Display total count of all Pokémon */}
      <div>{`Collected ${props.collection.length} Pokémon out of ${props.initialPokemonData.length}`}</div>

      {/* Generation filter */}
      <div className="generation-filter">
        <button onClick={() => handleGenerationFilter('all')}>
          All 
        </button>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((gen) => (
          <button key={gen} onClick={() => handleGenerationFilter(gen)}>
            Gen {gen} 
          </button>
        ))}
        <button onClick={() => handleGenerationFilter('legendary')}>
          Legendary 
        </button>
      </div>

      {/* Display specific count for selected generation or legendary */}
      <div>
        {selectedGen !== 'legendary' && selectedGen !== 'all' && (
          <div>{`Collected ${props.collectedByGeneration[selectedGen]} Pokémon out of ${props.totalCountByGeneration[selectedGen]}`}</div>
        )}
        {selectedGen === 'legendary' && (
          <div>{`Collected ${props.collectedGenTen} Pokémon out of ${props.totalCountGenTen}`}</div>
        )}
      </div>

      {/* Display Pokémon cards based on selected generation */}
      <div className="search-results">
        {props.collectionPokemon
          .filter((pokemon) => {
            if (selectedGen === 'legendary') {
              return props.LegandaryPokemon.includes(pokemon.ID);
            } else if (selectedGen === 'all') {
              return true;
            } else {
              const range = props.generationRanges[selectedGen];
              return pokemon.ID >= range.start && pokemon.ID <= range.end;
            }
          })
          .map((pokemon) => (
            <div
              className={`pokemon-card type-${pokemon.Types[0]}`}
              key={pokemon.ID}
              onClick={() => props.onPokemonClick(pokemon)}
            >
              <h2 className="pokemon-card-title">
                <span className={`styled-title type-${pokemon.Types[0]}`}>
                  {pokemon.Name[0].toUpperCase() + pokemon.Name.substring(1)}
                </span>
              </h2>
              <img className="pokemon-card-image" src={pokemon.ImageURL} alt={pokemon.Name} />
              {renderStats(pokemon)}
            </div>
          ))}
      </div>
    </div>
  );
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

export default CollectionView;
