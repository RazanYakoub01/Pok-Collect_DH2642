import { observer } from "mobx-react-lite";
import { initializePokemonData } from "../pokeSource";
import resolvePromise from "../resolvePromise";
import { fetchSpecificPokemon } from "../pokeSource";
import { getPokemonDetails } from "../pokeSource";
import testPack1 from '/src/shoppingCartImages/testPack1.png';
import testPack2 from '/src/shoppingCartImages/testPack2.png'
const BASE_URL= "https://pokeapi.co/api/v2/";

const pokeModel = {
  collection: [],
  initializePokemonDataPromiseState: {},
  currentPokemon: null,
  searchParams: {}, 
  searchResultsPromiseState: {}, 
  currentPokemonPromiseState: {}, 
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

//Cart functions
  cartItems: [
    {
      id: 1,
      packName: 'Test Pack 1',
      price: 50,
      quantity: 1,
      packImage: testPack1,
    },
    {
      id: 2,
      packName: 'Test Pack 2',
      price: 75,
      quantity: 2,
      packImage: testPack2,
    },
  ],

  totalPrice: 200,

  addItem(item) {
      const existingItem = this.cartItems.find((cartItem) => cartItem.id === item.id);
  
      if (existingItem) {
        // If the item already exists in the cart, update its quantity
        existingItem.quantity++;
      } else {
        // If it's a new item, add it to the cart
        this.cartItems.push({ ...item, quantity: 1 });
      }
      this.totalPrice += item.price;
    },
  
  updateItemQuantity(itemId, newQuantity) {
    const itemToUpdate = this.cartItems.find((item) => item.id === itemId);
    if (itemToUpdate) {
      const priceDifference = itemToUpdate.price * (newQuantity - itemToUpdate.quantity);
      itemToUpdate.quantity = newQuantity;
      this.totalPrice += priceDifference;
     console.log(newQuantity);
    }
  }, 
  removeItem(itemId) {
    const itemIndex = this.cartItems.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      const removedItem = this.cartItems.splice(itemIndex, 1)[0];
      this.totalPrice -= removedItem.price * removedItem.quantity;
    }
  },
// end of cart functions  


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
  },

  setCurrentPokemon(pokemonID) {
    const url = BASE_URL + "pokemon/" + pokemonID;
    if (pokemonID) {
        if (this.currentPokemon !== pokemonID) {
            this.currentPokemon = pokemonID;
            const promise = getPokemonDetails(url);
            resolvePromise(promise, this.currentPokemonPromiseState);
        }
    } else {
        this.currentPokemon = null;
        this.currentPokemonPromiseState = {};
    }
  }

};

export default observer(pokeModel);
