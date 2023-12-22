import React from "react";
import { observer } from "mobx-react-lite";
import Popup from "reactjs-popup";
import close from "/src/assets/storeImages/close.png";

const PackInformationView = observer((props) => {
  return (
    <Popup open={props.open}>
      <div className="packModal">
        <div className="infoContainer">
          <p>Gen 1 pack: Purchase this pack to collect amazing pokemon from the first generation, including Charizard, Zapdos or Mewtwo. 
            Totalt pokemon to collect from this pack: 151.
          </p>
          <p>Gen 2 pack: Purchase this pack to collect amazing Pokémon from the second generation, including Typhlosion, Feraligatr, or Lugia.
            Total Pokémon to collect from this pack: 100.
          </p>
          <p>Gen 3 pack: Purchase this pack to collect incredible Pokémon from the third generation, such as Blaziken, Registeel, or Sceptile.
             Total Pokémon to collect from this pack: 135.
          </p>
          <p>Gen 4 pack: Purchase this pack to collect fantastic Pokémon from the fourth generation, like Infernape, Empoleon, or Torterra.
              Total Pokémon to collect from this pack: 109.
          </p>
          <p>Gen 5 pack: Purchase this pack to collect outstanding Pokémon from the fifth generation, including Zekrom, Reshiram, or Samurott.
            Total Pokémon to collect from this pack: 154.
          </p>
          <p>Gen 6 pack: Purchase this pack to collect extraordinary Pokémon from the sixth generation, such as Xerneas, Greninja, or Yveltal.
            Total Pokémon to collect from this pack: 72.
          </p>
          <p>Gen 7 pack: Purchase this pack to collect remarkable Pokémon from the seventh generation, like Incineroar, Primarina, or Decidueye.
            Total Pokémon to collect from this pack: 88.
          </p>
          <p>Gen 8 pack: Purchase this pack to collect incredible Pokémon from the eighth generation, including Cinderace, Inteleon, or Regieleki.
              Total Pokémon to collect from this pack: 96.
          </p>
          <p>Gen 9 pack: Purchase this pack to collect amazing Pokémon from the ninth generation, such as Koraidon, Sobble, or Grookey.
              Total Pokémon to collect from this pack: 112.
          </p>
          <p>Legendary Pack: Purchase this special pack to be guaranteed to receive a legendary Pokémon, such as Mew, Rayquaza, or Arceus. You will also obtain random Pokémon from any generation, 
              total legendary Pokémon to collect from this pack: 106.
          </p>
          <p style={{ textAlign: 'center' }}>
          Note that once you have collected all Pokémon from a specifik pack, the pack will be disabled in the store.
          Each pack gives you 10 Pokémon, duplicates are not added to your collection.
        </p>
        </div>
        <div className="closeContainer">
          <img className="closeImage" src={close} onClick={() => props.onClose()} />
        </div>
      </div>
    </Popup>
  );
});
export default PackInformationView;
