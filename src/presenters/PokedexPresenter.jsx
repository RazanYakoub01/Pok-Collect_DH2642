// src/presenters/HomePresenter.jsx
import React, { useState } from "react";
import SearchFormView from "../views/searchFormView.jsx";
import SearchResultsView from "../views/searchResultsView.jsx";
import { observer } from "mobx-react-lite";

export default
observer(             // needed for the presenter to update (its view) when relevant parts of the model change
function PokedexPresenter(props){ 

  function searchButtonClickedACB(){
    props.model.pokemonSearch(props.model.searchParams); 
  }

  function searchTextChangeACB(writtenText){
    props.model.setSearchQuery(writtenText);
  }

  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleIconClick = (icon) => {
    if (selectedTypes.includes(icon)) {
      setSelectedTypes((prevTypes) =>
        prevTypes.filter((prevType) => prevType !== icon)
      );
    } else if (selectedTypes.length < 2) {
      setSelectedTypes((prevTypes) => [...prevTypes, icon]);
    } else {
      setSelectedTypes((prevTypes) => [prevTypes[1], icon]);
    }
  };

  function handleSelectedIconClick(icon) {
    setSelectedTypes((prevTypes) =>
      prevTypes.filter((prevType) => prevType !== icon)
    );
  }

function renderSearchResults() {
  if (!props.model.initializePokemonDataPromiseState.promise) {
    // No promise has been set yet
    return <div>No data</div>;
  } else if (
    !props.model.initializePokemonDataPromiseState.data &&
    !props.model.initializePokemonDataPromiseState.error
  ) {
    // Promise is set, but no data or error yet (loading state)
    return (
      <img src="https://brfenergi.se/iprog/loading.gif" alt="Loading..." />
    );
  } else if (props.model.initializePokemonDataPromiseState.error) {
    // Error occurred during the promise
    return (
      <div>
        Error: {props.model.initializePokemonDataPromiseState.error.toString()}
      </div>
    );
  } else {
    // Data is available
    return (
      <SearchResultsView
        pokemons={props.model.initializePokemonDataPromiseState.data} 
        selectedTypes={selectedTypes}
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
        clickSearch={searchButtonClickedACB}
        text={props.model.searchParams.query} 
        searchInput={searchTextChangeACB}
      />
      {renderSearchResults()}
    </div>
  );
};

return renderContent();

});

