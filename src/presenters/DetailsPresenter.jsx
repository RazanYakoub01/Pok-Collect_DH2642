import React, { useState } from "react";
import { observer } from 'mobx-react-lite';
import DetailsView from "../views/detailsView.jsx"; 

export default observer(function DetailsPresenter(props) {

  if (!props.model.currentPokemonPromiseState.promise) {
    return "No data";
  }

  if (props.model.currentPokemonPromiseState.error) {
    return props.model.currentPokemonPromiseState.error;
  }

  if (props.model.currentPokemonPromiseState.data) {
  
    console.log("data: ", props.model.currentPokemonPromiseState.data);
    return (
      <DetailsView pokemonDetails={props.model.currentPokemonPromiseState.data} />
    );
  }

  return (
    <img src="https://brfenergi.se/iprog/loading.gif"/>
  );
});
