import { observer } from "mobx-react-lite";
import { initializePokemonData } from "../pokeSource";
import resolvePromise from "../resolvePromise";
import { fetchSpecificPokemon } from "../pokeSource";
import { getPokemonDetails } from "../pokeSource";

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

  cart: {
    items: [],
    total: 0,
  },

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

  addToCart(packToAdd) {
    this.cart.items.push(packToAdd);
    this.cart.total += packToAdd.price;
  },

  setSearchQuery(queryText) {
    this.searchParams.query = queryText;
  },

  pokemonSearch(searchParams) {
    const promise = fetchSpecificPokemon(searchParams);
    resolvePromise(promise, this.searchResultsPromiseState);
  }

};

export default observer(pokeModel);
