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
  console.log(props.packs);
  const navigator = useNavigate();

  const [selectedPack, setSelectedPack] = useState(null);

  const handleAddToCart = (pack) => {
    props.addToCartACB(pack);
    setSelectedPack(pack);
  };

  const handleNavigateToCart = () => {
    // Use history to navigate to "/cart"
    navigator('/cart');
    // Close the Popup or perform any other necessary actions
    setSelectedPack(null);
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
          <div key={pack.id} className="pack">
            <img src={pack.packImage} alt={pack.packName} />
            <div className="packDetails">
              <h2>{pack.packName}</h2>
              <div>
                Price: {pack.price} coins <img src={coin} alt="Coin Icon" />
              </div>
              {/* "Add to Cart" button on the card */}
              <button className="storeButton" onClick={() => handleAddToCart(pack)}>
                Add to Cart
              </button>
              {/* Modal for additional details */}
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
                      {/* Use Link to navigate to the cart page with a button style */}
                      <button
                        className="storeButton cart-button"
                        onClick={handleNavigateToCart} // Use the function to navigate to "/cart"
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