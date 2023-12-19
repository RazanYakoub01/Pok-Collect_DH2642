import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StoreView from "../views/storeView";
import { observer } from "mobx-react-lite";
import { packs } from "../storeData";
import PopupView from "../views/PopupView";

const StorePresenter = observer((props) => {
  const [selectedPack, setSelectedPack] = useState(null);

  const navigator = useNavigate();

  function handleAddToCartClick(pack) {
    setSelectedPack(pack);
    props.model.addItem(pack);
  }

  function handlePopupClose() {
    setSelectedPack(null);
  }

  function handleNavigateToCart() {
    navigator("/cart");
    setSelectedPack(null);
  }

  function handleContinueShoppingClick() {
    setSelectedPack(null);
  }

  const totalItemsInCart = props.model.getTotalItemsInCart();
  const balance = props.model.balance;

  return (
    <div>
      <StoreView
        packs={packs}
        firePopupClose={handlePopupClose}
        fireAddToCartClick={handleAddToCartClick}
        fireNavigateToCart={handleNavigateToCart}
        fireContinueShoppingClick={handleContinueShoppingClick}
        totalItemsInCart={totalItemsInCart}
        balance={balance}
        loggedIn={props.model.isLoggedIn}
        hoursRemaining={props.model.hoursRemaining}
        minutesRemaining={props.model.minutesRemaining}
      />
      {renderPopup()}
    </div>
  );

  function renderPopup() {
    if (selectedPack) {
      return (
        <PopupView
          selectedPack={selectedPack}
          firePopupClose={handlePopupClose}
          fireContinueShoppingClick={handleContinueShoppingClick}
          fireNavigateToCart={handleNavigateToCart}
          open={selectedPack !== null}
          closeOnDocumentClick={true}
        />
      );
    }
    return null; // Return null if there's no selectedPack
  }
});

export default StorePresenter;
