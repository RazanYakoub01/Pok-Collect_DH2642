import React from 'react';
import { Link } from 'react-router-dom';
import "/src/shoppingCart.css";
import coin from '/src/storeImages/coin.png';
import testpack1 from '/src/shoppingCartImages/testPack1.png';
import testpack2 from '/src/shoppingCartImages/testPack2.png';

const ShoppingCartView = () => {
  // for test
  const hardcodedItems = [
    {
      id: 1,
      name: 'Gen 1 pack',
      price: 75,
      quantity: 2,
      image: testpack1, 
    },
    {
      id: 10,
      name: 'Legendary pack',
      price: 100,
      quantity: 1,
      image: testpack2, 
    },
  ];

  return (
    <div>
      <p className="shoppingCart">Cart Items</p>
      <div>
        {hardcodedItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <p className='itemName'>{item.name}</p>
              <p>Price: {item.price} <img src={coin}/></p>
              <div className="quantity-controls">
                <button>-</button>
                <span>{item.quantity}</span>
                <button>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="total-price">Total Price: 175 <img src={coin}/></p>
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
};


export default ShoppingCartView;
