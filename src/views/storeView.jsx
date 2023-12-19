import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { Link, useNavigate } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import '/src/shop.css';
import '/src/modal.css';
import coin from '/src/storeImages/coin.png';
import cart2 from '/src/storeImages/cart2.png';
import s from '/src/storeImages/s.png';


function StoreView(props) {
  const navigator = useNavigate();
  const [selectedPack, setSelectedPack] = useState(null);

  const handleAddToCart = (pack) => {
    props.addToCartACB(pack);
    setSelectedPack(pack);
  };

  const handleNavigateToCart = () => {
    navigator('/cart');
    setSelectedPack(null);
  };


  const getGenerationClass = (pack) => {
    switch (pack.id) {
      case 1:
        return 'gen1';
      case 2:
        return 'gen2';
      case 3:
        return 'gen3';
      case 4:
        return 'gen4';
      case 5:
        return 'gen5';
      case 6:
        return 'gen6';
      case 7:
        return 'gen7';
      case 8:
        return 'gen8';

      case 9:
        return 'gen9'
    
      case 10:
        return 'legendary';

      default:
        return ''; 
    }
  };
  

  return (
    <div className="shop">
      <div className="shopTitleContainer">
        <img src={s} className="titleImage" alt="Shop Title" />
        <h1 className="titleFont">PokéCollect Shop</h1>
      </div>
      <div className="balance">
        <p>
          Current Balance: {props.balance} coins <img src={coin} alt="Coin Icon" />
        </p>
        <p>
          Cart - Check out:
          <Link to="/cart" className="cart-link">
            <img src={cart2} style={{ width: '30px', height: '30px' }} alt="Cart Icon" />
            ({props.totalItemsInCart})
          </Link>
        </p>
      </div>
      <div className="packs">
        {props.packs.map((pack) => (
          <div key={pack.id} className={`pack ${getGenerationClass(pack)}`}>
            <img src={pack.packImage} alt={pack.packName} />
            <div className="packDetails">
              <h2>{pack.packName}</h2>
              <div>
                Price: {pack.price} coins <img src={coin} alt="Coin Icon" />
              </div>
              <button className="storeButton" onClick={() => handleAddToCart(pack)}>
                Add to Cart
              </button>
              {selectedPack && (
                <Popup open={selectedPack !== null} closeOnDocumentClick onClose={() => setSelectedPack(null)}>
                  <div className="modal">
                    <button className="close" onClick={() => setSelectedPack(null)}>
                      &times;
                    </button>
                    <div className="header">
                      <div className="content">
                        <div className="added-to-cart">
                          {selectedPack && `${selectedPack.packName} added to cart`}
                        </div>
                      </div>
                    </div>
                    <div className="actions">
                      <button
                        className="storeButton"
                        onClick={() => setSelectedPack(null)}
                      >
                        CONTINUE SHOPPING
                      </button>
                      <button
                        className={`storeButton cart-button ${getGenerationClass(selectedPack)}`}
                        onClick={handleNavigateToCart}
                      >
                        CART
                      </button>
                    </div>
                  </div>
                </Popup>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoreView;
