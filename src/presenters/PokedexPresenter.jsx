import React, { useState, useEffect } from "react";
import SearchFormView from "../views/searchFormView.jsx";
import SearchResultsView from "../views/searchResultsView.jsx";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

export default observer(function PokedexPresenter(props) {
  const navigate = useNavigate();
  const [selectedTypes, setSelectedTypes] = useState([]);

  useEffect(() => {
    // Perform an initial search with empty parameters to fetch all Pokémon
    performSearch("", []);
  }, []);

  function performSearch(query, selectedTypes) {
    props.model.pokemonSearch({
      query: query,
      selectedTypes: selectedTypes,
    });
  }

  function handlePokemonClick(pokemon) {
    props.model.setCurrentPokemon(pokemon.ID);
    navigate(`/details/${pokemon.ID}`);
  }

  function searchTextChangeACB(searchText) {
    props.model.setSearchQuery(searchText);
    performSearch(searchText, selectedTypes);
  }

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

  function handleSelectedIconClick(icon) {
    const updatedTypes = selectedTypes.filter((type) => type !== icon);
    setSelectedTypes(updatedTypes);
    performSearch(props.model.searchParams.query, updatedTypes);
  }

  function renderSelectedTypes() {
    if (selectedTypes.length === 0) {
      return null;
    }

    return (
      <div className="selected-types">
        <h2>Filter:</h2>
        {selectedTypes.map((type) => (
          <div key={type} className="selected-type">
            <div
              className={`type-icon ${type}`}
              onClick={() => handleSelectedIconClick(type)}
            ></div>
          </div>
        ))}
      </div>
    );
  }

  function renderSearchResults() {
    if (!props.model.searchResultsPromiseState.promise) {
      return <div>No data</div>;
    } else if (
      !props.model.searchResultsPromiseState.data &&
      !props.model.searchResultsPromiseState.error
    ) {
      return (
        <img
          src="https://brfenergi.se/iprog/loading.gif"
          alt="Loading..."
        />
      );
    } else if (props.model.searchResultsPromiseState.error) {
      return (
        <div>
          Error: {props.model.searchResultsPromiseState.error.toString()}
        </div>
      );
    } else {
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

  function renderContent() {
    return (
      <div>
        <SearchFormView
          icons={props.icons}
          selectedTypes={selectedTypes}
          onIconClick={handleIconClick}
          renderSelectedTypes={renderSelectedTypes}
          text={props.model.searchParams.query}
          inputACB={searchTextChangeACB}
        />
        {renderSearchResults()}
      </div>
    );
  }

  return renderContent();
});
