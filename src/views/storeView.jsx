import React from 'react';
import { Link } from 'react-router-dom';
import '/src/shop.css';
import coin from '/src/storeImages/coin.png';
import cart2 from '/src/storeImages/cart2.png';
import s from '/src/storeImages/s.png';

function StoreView(props) {
  console.log(props.packs);

  const handleAddToCart = (pack) => {
    props.addToCartACB(pack);
  };


  return (
    <div className="shop">
      <div className="shopTitleContainer">
        <img src={s} className="titleImage" />
        <h1 className="titleFont">PokéCollect Shop</h1>
      </div>
      <div className="balance">
        <p>Current Balance: {props.balance} coins <img src={coin}/></p>
        <p>
          Cart - Check out: 
          <Link to="/cart">
            <img src={cart2} style={{ width: '30px', height: '30px' }} />
            ({props.totalItemsInCart})
          </Link>
        </p>
      </div>
      <div className="packs">
        {props.packs.map((pack) => (
          <div key={pack.id} className="pack">
            <img src={pack.packImage} />
            <div className="packDetails">
              <h2>{pack.packName}</h2>
              <div>Price: {pack.price} coins <img src={coin}/></div>
              <button className="storeButton" onClick={() => handleAddToCart(pack)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoreView;
