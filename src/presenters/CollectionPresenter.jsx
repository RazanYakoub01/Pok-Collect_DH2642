import CollectionView from "../views/collectionView";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default observer(function CollectionPresenter(props) {
  const navigate = useNavigate();

  // Effect for fetching data based on collection IDs
  useEffect(() => {
    // Trigger the search function
    props.model.pokemonSearchByIDs(props.model.collection);
  }, [props.model, props.model.collection]); // Dependency array includes model and collection


  // Handle pokemon click to go to detailsView.
  function handleSelectPokemon(pokemon) {
    props.model.setCurrentPokemon(pokemon.ID);
    navigate(`/details/${pokemon.ID}`);
    console.log("currPokemonID", props.model.currentPokemon);
  }

  function renderCollection() {
    if (!props.model.collectionPromiseState.promise) {
      // No search has been performed yet
      return <div>No data</div>;
    } else if (
      !props.model.collectionPromiseState.data &&
      !props.model.collectionPromiseState.error
    ) {
      // Search is in progress
      return <img src="https://brfenergi.se/iprog/loading.gif" />;
    } else if (props.model.collectionPromiseState.error) {
      // Error occurred during the search
      return (
        <div>Error: {props.model.collectionPromiseState.error.toString()}</div>
      );
    } else {
      // Data is available
      return (
        <CollectionView
          user={props.model.user.displayName}
          onPokemonClick={handleSelectPokemon}
          initialPokemonData={props.model.initializePokemonDataPromiseState.data}
          collectionPokemon={props.model.collectionPromiseState.data}
          collection={props.model.collection}
          
        />
      );
    }
  }

  return renderCollection();
});
