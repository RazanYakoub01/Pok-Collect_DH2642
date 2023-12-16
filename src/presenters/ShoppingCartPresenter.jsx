import React from 'react';
import { observer } from 'mobx-react-lite';
import ShoppingCartView from '../views/shoppingCartView';
import { useAuthentication} from '/src/services/authService';

function ShoppingCartPresenter(props) {

  const balance = props.model.balance;
  const { user } = useAuthentication();
  
  const handleNumberChange = (itemId, newQuantity) => {
    props.model.updateItemQuantity(itemId, newQuantity,user); 
  };

  const handleRemoveItem = (itemId) => {
    props.model.removeItem(itemId,user); 
  };

  const handlePurchaseACB = () => {
    props.model.purchaseItems();
  }

  console.log(props.model.cartItems);
  return (
    <ShoppingCartView
      cartItems={props.model.cartItems} 
      totalPrice={props.model.totalPrice} 
      onNumberChange={handleNumberChange}
      removeItem={handleRemoveItem}
      userPurchase={handlePurchaseACB}
      balance={balance}
    />
  );
}

export default observer(ShoppingCartPresenter);