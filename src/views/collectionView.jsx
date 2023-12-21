import React, { useState } from 'react';
import '/src/css/search.css';
import '/src/css/collection.css';
import '/src/css/textFonts.css';
import backpack from '/src/collectionImages/backpack.png';

const CollectionView = (props) => {
  const [selectedGen, setSelectedGen] = useState('all');
  const [showText, setShowText] = useState(false);

  const handleGenerationFilter = (gen) => {
    setSelectedGen(gen.toString()); // Ensure gen is treated as a string
  };

  const handleButtonClick = () => {
    setShowText(!showText); // Toggle the state
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

  return (
    <div className={`collection-view ${showText ? 'clicked' : ''}`}>
      <div className="collection-header">
        <img src={backpack} alt="Backpack" />
        <h1 className="titleFont collection">{props.user}'s </h1>
        <h1 className="titleFont collection">Pokémon Collection</h1>
      </div>

      {/* Display total count of all Pokémon or show text */}
      <div className="collection-info" onClick={handleButtonClick}>
        <div className="collection-ball">
          <div className="collection-circle"></div>
          <div className="collection-lines"></div>
        </div>
        {showText ? (
          <div className="collection-text">
            <strong>{props.collection.length}</strong>
            <span>&nbsp;Pokémon Collected</span>
            <span>&nbsp;out of&nbsp;</span>
            <strong>{props.initialPokemonData.length}</strong>
          </div>
        ) : null}
      </div>

      {/* Generation filter buttons */}
      <div className="generation-filter">
        <button
          className={selectedGen === 'all' ? 'active' : ''}
          onClick={() => handleGenerationFilter('all')}
        >
          All
        </button>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((gen) => (
          <button
            key={gen}
            className={selectedGen === gen ? 'active' : ''}
            onClick={() => handleGenerationFilter(gen)}
          >
            Gen {gen}
          </button>
        ))}
        <button
          className={selectedGen === 'legendary' ? 'active' : ''}
          onClick={() => handleGenerationFilter('legendary')}
        >
          Legendary
        </button>
      </div>

     {/* Display specific count for selected generation or legendary */}
      <div className="collection-text">
        {selectedGen !== 'legendary' && selectedGen !== 'all' && (
          <div className="generation-info-text">{`${props.collectedByGeneration[selectedGen]} Generation ${selectedGen} Pokémon Collected out of ${props.totalCountByGeneration[selectedGen]}`}</div>
        )}
        {selectedGen === 'legendary' && (
          <div className="generation-info-text">{`${props.collectedGenTen} Pokémon Collected out of ${props.totalCountGenTen}`}</div>
        )}
      </div>

      {/* Display Pokémon cards based on selected generation */}
      <div className="search-results">
        {props.collectionPokemon
          .filter((pokemon) => {
            if (selectedGen === 'legendary') {
              return props.LegendaryPokemon.includes(pokemon.ID);
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

export default CollectionView;
