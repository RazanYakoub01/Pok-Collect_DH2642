import React, { useState } from "react";
import Rating from 'react-rating'; // External rating component
import "/src/css/search.css";
import "/src/css/textFonts.css";

/**
 * SearchResultsView component displays a list of Pokemon based on search results.
 * It includes filters for generation and presents Pokemon cards with their statistics.
 *
 * @param {Object} props - Properties passed to the component.
 * @returns {JSX.Element} - Rendered component.
 */
const SearchResultsView = (props) => {
  // State hook to manage the selected generation filter
  const [selectedGen, setSelectedGen] = useState('all');

  /**
   * Callback function to handle click on a Pokemon, invoking the provided callback from props.
   * @param {Object} pokemon - The clicked Pokemon object.
   */
  const selectPokemonACB = (pokemon) => {
    props.onPokemonClick(pokemon);
  };

  /**
   * Callback function to handle changes in the generation filter.
   * @param {string} gen - The selected generation filter.
   */
  const handleGenerationFilter = (gen) => {
    setSelectedGen(gen);
  };

  /**
   * Renders the statistics of a Pokemon.
   * @param {Object} pokemon - The Pokemon object.
   * @returns {JSX.Element} - Rendered statistics.
   */
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

  // If there are no matching Pokemon, display a message
  if (pokemons.length === 0) {
    return (
      <div className="no-results">
        {/* Inform the user about the lack of matching Pokemon */}
        <h2>Sorry, no matching Pokémon could be found!</h2>
      </div>
    );
  } else {
    // If there are matching Pokemon, display them
    return (
      <div className="search-results">
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

        {/* Map and render Pokemon cards */}
        {pokemons.map((pokemon) => {
          const isInCollection = props.model.collection.includes(pokemon.ID);

          /* Apply generation filter */
          if (
            (selectedGen === 'legendary' && !props.model.LegendaryPokemon.includes(pokemon.ID)) ||
            (selectedGen !== 'legendary' && selectedGen !== 'all' &&
              (pokemon.ID < props.model.generationRanges[selectedGen].start ||
                pokemon.ID > props.model.generationRanges[selectedGen].end))
          ) {
            return null; // Skip rendering for Pokémon not matching the selected generation
          }

          /* Render Pokemon card */
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
              {/* Render collected status if the user is logged in */}
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
              {/* Render Pokemon image and stats */}
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

/* Export the SearchResultsView component */
export default SearchResultsView;
