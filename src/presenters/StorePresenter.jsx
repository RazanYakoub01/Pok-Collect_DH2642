import React from 'react';
import StoreView from '../views/storeView';
import { observer } from 'mobx-react-lite';
import { packs } from '../storeData';

export default observer(function StorePresenter(props) {
  
  const addToCartACB = (selectedPack) => {
    props.model.addItem(selectedPack);
  };

  const totalItemsInCart = props.model.getTotalItemsInCart();

  return <StoreView 
  packs={packs} 
  addToCartACB={addToCartACB}
  totalItemsInCart={totalItemsInCart}
  />;
});
