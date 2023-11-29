import React from 'react';
import ShoppingCartView from '../views/shoppingCartView';
import { observer } from "mobx-react-lite";


export default
observer(            
function ShoppingCartPresenter(props){ 
  return <ShoppingCartView  model={props.model}/>;
});