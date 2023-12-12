import React from 'react';
import StoreView from '../views/storeView';
import { observer } from 'mobx-react-lite';
import { packs } from '../storeData';
import { useAuthentication } from '../services/authService';


export default observer(function StorePresenter(props) {
  
  const { user } = useAuthentication();

  const addToCartACB = (selectedPack) => {
    props.model.addItem(selectedPack,user);
  };

  const totalItemsInCart = props.model.getTotalItemsInCart();

  return <StoreView 
  packs={packs} 
  addToCartACB={addToCartACB}
  totalItemsInCart={totalItemsInCart}
  />;
});
