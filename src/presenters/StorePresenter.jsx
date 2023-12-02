// StorePresenter.jsx
import React from 'react';
import StoreView from '../views/storeView';
import { observer } from 'mobx-react-lite';
import { packs } from '../storeData';

export default observer(function StorePresenter(props) {
  
  const addToCartACB = () => {
    const selectedPack = props.model.currentpokemonPromiseState.data;
    props.model.addToCart(selectedPack);
  };

  return <StoreView packs={packs} addToCartACB={addToCartACB} />;
});
