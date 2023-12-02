import React from 'react';
import "/src/shop.css";
import { Link } from 'react-router-dom';

const StoreView = ({ packs, addToCartACB }) => {

  function addToCartACB(){
    props.addToCart();
  }

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PokeCollect Pack shop</h1>
      </div>
      <div className="balance">
      <p>Current Balance: 200 coins <img src="src/storeImages/coin.png"/> </p>
      <p>Shopping Cart: <Link to="/cart"><img src="src/storeImages/shoppingCart.png"/></Link> </p>
      </div>
      <div className="packs">
        {packs.map((pack) => (
          <div key={pack.id} className="pack">
            <img src={pack.packImage} alt={pack.packName} />
            <div className="packDetails">
              <h2>{pack.packName}</h2>
              <p>Price: {pack.price} coins <img src="src/storeImages/coin.png"/></p>
              <button onClick={addToCartACB}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreView;
