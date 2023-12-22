// src/presenters/HomePresenter.jsx
import React, { useState, useEffect } from "react";
import SearchFormView from "../views/searchFormView.jsx";
import SearchResultsView from "../views/searchResultsView.jsx";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

export default observer(
  // needed for the presenter to update (its view) when relevant parts of the model change
  function PokedexPresenter(props) {
    const navigate = useNavigate();

    // Performs a search with the given parameters
    function performSearch(query, selectedTypes) {
      props.model.pokemonSearch({
        query: query,
        selectedTypes: selectedTypes,
      });
    }
    // Selects the given Pokemon
    function handlePokemonClick(pokemon) {
      props.model.setCurrentPokemon(pokemon.ID);
      navigate(`/details/${pokemon.ID}`);
    }

    // When user types in the search bar, update searchQuery and perform a search immediately.
    function searchTextChangeACB(searchText) {
      props.model.setSearchQuery(searchText);
      performSearch(searchText, selectedTypes);
    }

    // State for selected types
    const [selectedTypes, setSelectedTypes] = useState([]);

    useEffect(() => {
      // Perform an initial search with empty parameters to fetch all Pokémon
      performSearch("", []);
    }, []);

    // Selects the type that is pressed, updates state and performs a search immediately.
    const handleIconClick = (icon) => {
      let updatedTypes = [];
      if (selectedTypes.includes(icon)) {
        updatedTypes = selectedTypes.filter((prevType) => prevType !== icon);
      } else if (selectedTypes.length < 2) {
        updatedTypes = [...selectedTypes, icon];
      } else {
        updatedTypes = [selectedTypes[1], icon];
      }
      setSelectedTypes(updatedTypes);
      performSearch(props.model.searchParams.query, updatedTypes);
    };

    // Remove the clicked type from the selected types, updates state and performs a search immediately.
    function handleSelectedIconClick(icon) {
      const updatedTypes = selectedTypes.filter((type) => type !== icon);
      setSelectedTypes(updatedTypes);
      performSearch(props.model.searchParams.query, updatedTypes);
    }

    function renderSearchResults() {
      // Use searchResultsPromiseState instead of initializePokemonDataPromiseState
      if (!props.model.searchResultsPromiseState.promise) {
        // No search has been performed yet
        return <div>No data</div>;
      } else if (
        !props.model.searchResultsPromiseState.data &&
        !props.model.searchResultsPromiseState.error
      ) {
        // Search is in progress
        return (
          <img src="https://brfenergi.se/iprog/loading.gif" alt="Loading..." />
        );
      } else if (props.model.searchResultsPromiseState.error) {
        // Error occurred during the search
        return (
          <div>
            Error: {props.model.searchResultsPromiseState.error.toString()}
          </div>
        );
      } else {
        // Data is available
        return (
          <SearchResultsView
            model={props.model}
            selectedTypes={selectedTypes}
            onPokemonClick={handlePokemonClick}
            collection={props.model.collection}
            loggedIn={props.model.isLoggedIn}
          />
        );
      }
    }

    const renderContent = () => {
      return (
        <div>
          <SearchFormView
            selectedTypes={selectedTypes}
            onIconClick={handleIconClick}
            onSelectedIconClick={handleSelectedIconClick}
            text={props.model.searchParams.query}
            searchInput={searchTextChangeACB}
            icons = {props.model.icons}
          />
          {renderSearchResults()}
        </div>
      );
    };

    return renderContent();
  }
);
