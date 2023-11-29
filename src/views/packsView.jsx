import React from "react";
import "../PacksView.css";

const PacksView = (props) => {
  const handleOpenPack = (packID) => {
    console.log(`Opening pack ${packID}`);
  };

  const getImageByID = (packID) => {
    packID = parseInt(packID);
    switch (packID) {
      case 1:
        return (
          <img
            src={
              "https://static.wikia.nocookie.net/cardguide/images/e/ec/POP1_booster.jpg"
            }
          />
        );
      case 2:
        return (
          <img
            src={
              "https://static.wikia.nocookie.net/cardguide/images/f/fd/POP2_booster.jpg"
            }
          />
        );
      default:
        return <div>No image available for packID {packID}</div>;
    }
  };

  return (
    <div className="packs-container">
      {props.model.packs.map((pack) => (
        <div key={pack.packID} className="pack">
          <div className="pack-image">{getImageByID(pack.packID)}</div>
          <div className="pack-details">
            <div className="pack-id">ID: {pack.packID}</div>
            <div className="pack-quantity">Quantity: {pack.quantity}</div>
            <button
              className="pack-open-button"
              onClick={() => handleOpenPack(pack.packID)}
            >
              Open
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PacksView;
