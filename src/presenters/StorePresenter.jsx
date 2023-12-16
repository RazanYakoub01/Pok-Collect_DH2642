import React from 'react';
import StoreView from '../views/storeView';
import { observer } from 'mobx-react-lite';
import { packs } from '../storeData';
import { useAuthentication } from '../services/authService';

const StorePresenter = observer((props) => {
  const { user } = useAuthentication();

  const addToCartACB = (selectedPack) => {
    props.model.addItem(selectedPack, user);
  };

  const totalItemsInCart = props.model.getTotalItemsInCart();
  const balance = props.model.balance;

  return (
    <StoreView
      packs={packs}
      addToCartACB={addToCartACB}
      totalItemsInCart={totalItemsInCart}
      balance={balance}
    />
  );
});

export default StorePresenter;
