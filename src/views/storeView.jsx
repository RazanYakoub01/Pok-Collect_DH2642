import React from "react";
import { Link } from "react-router-dom";
import "reactjs-popup/dist/index.css";
import "/src/shop.css";
import "/src/modal.css";
import coin from "/src/storeImages/coin.png";
import cart2 from "/src/storeImages/cart2.png";
import s from "/src/storeImages/s.png";
import { getGenerationClass } from "../utils";

function StoreView(props) {
  return (
    <div className="shop">
  <div className="shopTitleContainer">
    <img src={s} className="titleImage" alt="Shop Title" />
    <h1 className="titleFont">PokéCollect Shop</h1>
  </div>
  {props.loggedIn && (
    <div>
      <h2 className="timer">
        <span className="timer-text">
          Time Until Next Coin Boost:&nbsp;  75
          <img src={coin} alt="Coin Icon" className="coin-icon" />
        </span>
      </h2>
      <div className="countdown-timer">
      <span>{props.hoursRemaining < 10 ? `0${props.hoursRemaining}` : props.hoursRemaining}</span>:
      <span>{props.minutesRemaining < 10 ? `0${props.minutesRemaining}` : props.minutesRemaining}</span>:
      <span>{props.secondsRemaining < 10 ? `0${props.secondsRemaining}` : props.secondsRemaining}</span>
      </div>    
    </div>
  )}

      <div className="balance">
        <p>
          Current Balance: {props.balance}
          <img src={coin} alt="Coin Icon" />
        </p>
        <p>
          Cart - Check out:
          <Link to="/cart" className="cart-link">
            <img
              src={cart2}
              style={{ width: "30px", height: "30px" }}
              alt="Cart Icon"
            />
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
                Price:  {pack.price}<img src={coin} alt="Coin Icon" />
              </div>
              <button
                className="storeButton"
                onClick={() => props.fireAddToCartClick(pack)}
                disabled={props.collectedByGeneration[pack.id] >= props.totalCountByGeneration[pack.id]}
          
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoreView;
