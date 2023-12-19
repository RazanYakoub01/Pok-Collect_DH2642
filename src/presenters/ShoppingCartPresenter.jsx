import React from 'react';
import { observer } from 'mobx-react-lite';
import ShoppingCartView from '../views/shoppingCartView';

function ShoppingCartPresenter(props) {

  const balance = props.model.balance;
  
  const handleNumberChange = (itemId, newQuantity) => {
    props.model.updateItemQuantity(itemId, newQuantity); 
  };

  const handleRemoveItem = (itemId) => {
    props.model.removeItem(itemId); 
  };

  const handlePurchase = () => {
    props.model.purchaseItems();
  }

  console.log(props.model.cartItems);
  return (
    <ShoppingCartView
      cartItems={props.model.cartItems} 
      totalPrice={props.model.totalPrice} 
      onNumberChange={handleNumberChange}
      removeItem={handleRemoveItem}
      firePurchase={handlePurchase}
      balance={balance}
    />
  );
}

export default observer(ShoppingCartPresenter);