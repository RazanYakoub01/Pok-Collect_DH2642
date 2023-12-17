import React from 'react';
import StoreView from '../views/storeView';
import { observer } from 'mobx-react-lite';
import { packs } from '../storeData';

const StorePresenter = observer((props) => {

  const addToCartACB = (selectedPack) => {
    props.model.addItem(selectedPack);
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
