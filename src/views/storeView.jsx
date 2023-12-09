import React from 'react';
import "/src/shop.css";
import { Link } from 'react-router-dom';
import coin from "/src/storeImages/coin.png";
import shoppingcart from "/src/storeImages/shoppingCart.png";

function StoreView(props) {
  console.log(props.packs);

  const handleAddToCart = (pack) => {
    props.addToCartACB(pack);
  };

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PokeCollect Pack shop</h1>
      </div>
      <div className="balance">
        <p>Current Balance: 200 coins <img src={coin} alt="coin" /></p>
        <p>Shopping Cart: <Link to="/cart">
          <img src={shoppingcart} alt="Shopping Cart" />
        </Link></p>
      </div>
      <div className="packs">
        {props.packs.map((pack) => (
          <div key={pack.id} className="pack">
            <img src={pack.packImage} alt={pack.packName} />
            <div className="packDetails">
              <h2>{pack.packName}</h2>
              <p>Price: {pack.price} coins <img src={coin} alt="coin" /></p>
              <button className='storeButton' onClick={() => handleAddToCart(pack)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoreView;
