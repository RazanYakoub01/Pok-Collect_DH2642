import React from 'react';
import { observer } from 'mobx-react-lite';
import ShoppingCartView from '/src/views/ShoppingCartView.jsx';

function ShoppingCartPresenter(props) {
  const handleNumberChange = (itemId, newQuantity) => {
    props.model.updateItemQuantity(itemId, newQuantity); 
  };

  const handleRemoveItem = (itemId) => {
    props.model.removeItem(itemId); 
  };

  return (
    <ShoppingCartView
      cartItems={props.model.cartItems} 
      totalPrice={props.model.totalPrice} 
      onNumberChange={handleNumberChange}
      removeItem={handleRemoveItem}
    />
  );
}

export default observer(ShoppingCartPresenter);