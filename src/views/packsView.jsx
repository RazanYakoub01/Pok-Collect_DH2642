import React from 'react';
import "../PacksView.css";

const PacksView = (props) => {
    const handleOpenPack = (packID) => {
        console.log("Opening pack ${packID}");
      };

  return (
    <div className="packs-container">
      {props.model.packs.map((pack) => (
        <div key={pack.packID} className="pack">
          <div className="pack-image">
            <img src={"https://static.wikia.nocookie.net/cardguide/images/e/ec/POP1_booster.jpg"} alt={"Pack ${pack.packID}"} />
          </div>
          <div className="pack-details">
            <div className="pack-id">ID: {pack.packID}</div>
            <div className="pack-quantity">Quantity: {pack.quantity}</div>
            <button className="pack-open-button" onClick={() => handleOpenPack(pack.packID)}>Open</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PacksView;
