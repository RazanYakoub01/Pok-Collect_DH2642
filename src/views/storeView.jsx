import React from 'react';
import "/src/shop.css";
import "/src/textFonts.css";
import { Link } from 'react-router-dom';
import coin from "/src/storeImages/coin.png";
import cart2 from "/src/storeImages/cart2.png";
import s from "/src/storeImages/s.png";

function StoreView(props) {
  console.log(props.packs);

  const handleAddToCart = (pack) => {
    props.addToCartACB(pack);
  };

  return (
    <div className="shop">
    <div className="shopTitleContainer">
      <img src={s} className="titleImage" />
      <h1 className="titleFont">PokéCollect  Shop</h1>
    </div>
      <div className="balance">
        <p className='textFont'>Current Balance: 200 coins <img src={coin}/></p>
        <p className='textFont'>Shopping Cart: <Link to="/cart">
        <img src={cart2} style={{ width: '30px', height: '30px' }} />
          ({props.totalItemsInCart})
        </Link></p>
      </div>
      <div className="packs">
        {props.packs.map((pack) => (
          <div key={pack.id} className="pack">
            <img src={pack.packImage} />
            <div className="packDetails">
              <h2 className='textFont'>{pack.packName}</h2>
              <div className='textFont'>Price: {pack.price} coins <img src={coin}/></div>
              <button className='storeButton' onClick={() => handleAddToCart(pack)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoreView;
