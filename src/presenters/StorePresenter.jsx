import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StoreView from "../views/storeView";
import { observer } from "mobx-react-lite";
import { packs } from "../storeData";
import PopupView from "../views/PopupView";
import PackInformationView from "../views/packInformationView";

const StorePresenter = observer((props) => {

  const [showInformation, setShowInformation] = useState(false);

  const toggleInformation = () => {
    setShowInformation(!showInformation);
  };

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
        secondsRemaining = {props.model.secondsRemaining}
        collectedByGeneration = {props.model.countCollectedByGeneration()}
        totalCountByGeneration = {props.model.getTotalCountByGeneration()}
        showInformation={showInformation}
        toggleInformation={toggleInformation}
      />
      {renderPopup()}
      {renderInfoBtn()}
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

  function renderInfoBtn() {
    return (
      <PackInformationView
        open={showInformation}
        onClose={toggleInformation}
      />
    );
  }
});

export default StorePresenter;
