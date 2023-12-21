import React, { useState } from "react";
import OpenCardsView from '../views/openCardsView.jsx';
import OpenCardsInformationView from '../views/openCardsInformationView.jsx';
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';

export default observer(function OpenCardsPresenter(props){

  const [showOpenedPackInfo, setShowOpenedPackInfo] = useState(false);

  const toggleCardsInfo = () => {
    setShowOpenedPackInfo(!showOpenedPackInfo);
  };

  const obtainedPokemon = props.model.openPackPromiseState.data || [];
  const addedPokemons = props.model.addedPokemons || [];
  const duplicatePokemons = props.model.duplicatePokemons || [];

  const navigate = useNavigate();

  function handleCollectionClick(){
    navigate('/collection');
  }
  
  function handlePacksClick(){
    navigate('/packs');
  }

  function renderOpenedPackInfo() {
    return (
      <OpenCardsInformationView
        open={showOpenedPackInfo}
        onClose={toggleCardsInfo}
        obtainedPokemon={obtainedPokemon}
        addedPokemons={addedPokemons} 
        duplicatePokemons={duplicatePokemons}
        onCollectionClick={handleCollectionClick} 
        onPacksClick={handlePacksClick} 
      />
    );
  }
  
  return ( <div> <OpenCardsView obtainedPokemon={obtainedPokemon} onCollectionClick={handleCollectionClick} onPacksClick={handlePacksClick} addedPokemons={addedPokemons} duplicatePokemons={duplicatePokemons} showCardInfo={showOpenedPackInfo}
  toggleCardsInfo={toggleCardsInfo}/> {renderOpenedPackInfo()} </div>);

}
);
