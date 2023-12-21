import React from "react";
import { observer } from "mobx-react-lite";
import Popup from "reactjs-popup";
import close from "/src/storeImages/close.png";

const OpenCardsInformationView = observer((props) => {

    const addedPokemonNames = props.obtainedPokemon
    .filter(pokemon => props.addedPokemons.includes(pokemon.ID))
    .map(pokemon => pokemon.Name);

  const duplicatePokemonNames = props.obtainedPokemon
    .filter(pokemon => props.duplicatePokemons.includes(pokemon.ID))
    .map(pokemon => pokemon.Name);

    function onGoToCollectionClick() {
        props.onCollectionClick();
      }
    
    function onGoToPacksClick() {
        props.onPacksClick();
    }

    return (
        <Popup open={props.open} className="packSummaryModal">
          <div className="popup-content">
            <div className="packSummaryModal-content">
              <div>
                {addedPokemonNames.length > 0 && (
                  <div>
                    <h3>Added Pokémon:</h3>
                    <ul className="names-list">
                      {addedPokemonNames.map((name, index) => (
                        <li key={index} className="names-list-item">
                          {name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div>
                {duplicatePokemonNames.length > 0 && (
                  <div>
                    <h3>Duplicate Pokémon:</h3>
                    <ul className="names-list">
                      {duplicatePokemonNames.map((name, index) => (
                        <li key={index} className="names-list-item">
                          {name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div>
              <button className="packSummaryButton" onClick={onGoToCollectionClick}>
                Go To Collection!
              </button>
              <button className="packSummaryButton" onClick={onGoToPacksClick}>
                Open More Packs
              </button>
            </div>
            <div className="closeContainer">
              <img className="closeImage" src={close} onClick={() => props.onClose()}/>
            </div>
          </div>
        </Popup>
      );
    });    

export default OpenCardsInformationView;