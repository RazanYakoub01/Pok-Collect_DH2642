import React from "react";
import { observer } from "mobx-react-lite";
import Popup from "reactjs-popup";
import { getGenerationClass } from "../utils";

const PopupView = observer((props) => {
  function onPopupClose() {
    props.firePopupClose();
  }

  function onContinueShoppingClick() {
    props.fireContinueShoppingClick();
  }

  function onNavigateToCart() {
    props.fireNavigateToCart();
  }

  const generationClass = props.selectedPack ? getGenerationClass(props.selectedPack) : '';


  return (
    <Popup open={props.open}>
      <div className="modal">
        <button className="close" onClick={onPopupClose}>
          &times;
        </button>
        <div className="header">
          <div className="content">
            <div className="added-to-cart">
              {props.selectedPack &&
                `${props.selectedPack.packName} added to cart!`}
            </div>
          </div>
        </div>
        <div className="actions">
          <button className="modalBtns" onClick={onContinueShoppingClick}>
            CONTINUE SHOPPING
          </button>
          <button
            className={`modalBtns ${generationClass}`}
            onClick={onNavigateToCart}
          >
            CART
          </button>
        </div>
      </div>
    </Popup>
  );
});

export default PopupView;
