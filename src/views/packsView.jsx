import React from "react";
import '/src/shop.css';

const PacksView = (props) => {
  return (
    <div>
      <div className="shop">
        <h1>Purchased Packs</h1>
      </div>
      <div className="packs">
        {props.packs.map((pack) => (
          <div key={pack.id} className="pack">
            <img src={pack.packImage} className="purchasedPacksImg"/>
            <div className="purchasedPacks">
              <h2>{pack.packName}</h2>
              <div>Quantity: {pack.quantity}</div>
              <button disabled={pack.quantity < 1} onClick={() => props.onOpenPack(pack)} className="storeButton">Open</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PacksView;
