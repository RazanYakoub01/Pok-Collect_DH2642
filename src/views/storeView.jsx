import React from 'react';
import "/src/shop.css";

const StoreView = ({ packs }) => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PokeCollect Pack shop</h1>
      </div>
      <div className="packs">
        {packs.map((pack) => (
          <div key={pack.id} className="pack">
            <img src={pack.packImage} alt={pack.packName} />
            <div className="packDetails">
              <h2>{pack.packName}</h2>
              <p>Price: {pack.price} coins</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreView;
