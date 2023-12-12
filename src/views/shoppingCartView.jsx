import React from 'react';
import { Link } from 'react-router-dom';
import "/src/shoppingCart.css";
import coin from '/src/storeImages/coin.png';

function ShoppingCartView(props) {
  const items = props.cartItems || [];
  console.log(items);
  return (
    <div>
      <p className="shoppingCart">Cart Items</p>
      <div>
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.packImage} alt={item.name} />
            <div className="cart-item-details">
              <p className='itemName'>{item.packName}</p>
              <p>Price: {item.price} <img src={coin} alt="coin" /></p>
              <div className="quantity-controls">
                <button onClick={() => props.onNumberChange(item.id,item.quantity - 1)} disabled={item.quantity === 1} >-</button>
                <span>{item.quantity}</span>
                <button onClick={() => props.onNumberChange(item.id,item.quantity + 1)}>+</button>
                <button onClick={() => props.removeItem(item.id)}>X</button> 
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="total-price">Total Price: {props.totalPrice} <img src={coin} alt="coin" /></p>
      </div>
      <div className="cart-actions">
        <Link to="/packs">
          <button>Purchase</button>
        </Link>
        <Link to="/store">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartView;
