import Popup from 'reactjs-popup';
import { Link, useNavigate } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import '/src/shop.css';
import '/src/modal.css';
import coin from '/src/storeImages/coin.png';
import cart2 from '/src/storeImages/cart2.png';
import s from '/src/storeImages/s.png';

// packsView.jsx
import React from 'react';

function PacksView({
  packs,
  onOpenPack,
  handleAddToCart,
  handleNavigateToCart,
  getGenerationClass,
  selectedPack,
  setSelectedPack,
}) {
  return (
    <div>
      {/* Render your packs here */}
      <div className="packs">
        {packs.map((pack) => (
          <div key={pack.id} className={`pack ${getGenerationClass(pack)}`}>
            {/* Render pack details */}
            <h2>{pack.packName}</h2>
            <div>
              Price: {pack.price} coins <img src="/src/storeImages/coin.png" alt="Coin Icon" />
            </div>

            {/* Add to Cart button */}
            <button className="storeButton" onClick={() => handleAddToCart(pack)}>
              Add to Cart
            </button>

            {/* Popup */}
            {selectedPack && (
              <Popup
                open={selectedPack !== null}
                closeOnDocumentClick
                onClose={() => setSelectedPack(null)}
              >
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
                    <button className="storeButton" onClick={() => setSelectedPack(null)}>
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
        ))}
      </div>
    </div>
  );
}

export default PacksView;
