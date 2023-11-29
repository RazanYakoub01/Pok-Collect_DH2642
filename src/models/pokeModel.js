import { observer } from "mobx-react-lite";
import { initializePokemonData } from "../pokeSource";
import resolvePromise from "../resolvePromise";

const pokeModel = {
  collection: [],
  initializePokemonDataPromiseState: {},
  currentPokemon: null,
  searchParams: {}, 
  searchResultsPromiseState: {}, 
  currentpokemonPromiseState: {}, 
  packs: [{
    "packID": "1",
    "quantity": 10
  },
  {
    "packID": "2",
    "quantity": 5
  }
  ],

  balance: 200,

  setPackQuantity(packID, quantity) {
    let found = false;
    this.packs.forEach((pack) => {
      if (pack.packID === packID) {
        pack.quantity += quantity;
        found = true;
      }
    });
    if (!found) {
      this.packs.push({ packID, quantity });
    }
    this.packs.sort((a, b) => a.packID.localeCompare(b.packID));
  },



  getPokemonData() {
    const pokemonDataPromise = initializePokemonData();
    resolvePromise(pokemonDataPromise, this.initializePokemonDataPromiseState);
  },

};

export default observer(pokeModel);
