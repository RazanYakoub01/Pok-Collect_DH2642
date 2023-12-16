import { observable, action } from "mobx";
import { initializePokemonData , getPokemonDetails ,getEvolutionDetails } from "../pokeSource";
import resolvePromise from "../resolvePromise";
import { packs as storePacks } from "../storeData";
const BASE_URL = "https://pokeapi.co/api/v2/";


const pokeModel =  observable({

  collection: [],
  initializePokemonDataPromiseState: {},
  currentPokemon: null,
  searchParams: {},
  searchResultsPromiseState: {},
  currentPokemonPromiseState: {},
  packs: storePacks.map((pack) => ({ ...pack, quantity: 0 })),
  balance: 200,
  // Making cartItems and totalPrice observable
  cartItems : [],
  totalPrice : 0,

  setCartItems: action(function(items) {
    this.cartItems = items;
  }),

  setTotalPrice(price) {
    this.totalPrice = price;
  },


  // Add an item to the cart
  addItem(item,user) {
    const existingItem = this.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      // If the item already exists in the cart, update its quantity
      existingItem.quantity++;
    } else {
      // If it's a new item, add it to the cart
      this.cartItems.push({ ...item, quantity: 1 });
    }
    this.totalPrice += item.price;
    this.updateUserCartInFirebase(user, this.cartItems, this.totalPrice);
  },

  // gets the total number of items in the cart
  getTotalItemsInCart() {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  },

  // Update the quantity of an item in the cart
  updateItemQuantity(itemId, newQuantity,user) {
    const itemToUpdate = this.cartItems.find((item) => item.id === itemId);
    if (itemToUpdate) {
      const priceDifference =
        itemToUpdate.price * (newQuantity - itemToUpdate.quantity);
      itemToUpdate.quantity = newQuantity;
      this.totalPrice += priceDifference;
      console.log(newQuantity);
    }

    this.updateUserCartInFirebase(user, this.cartItems, this.totalPrice);

  },

  // Remove an item from the cart
  removeItem(itemId,user) {
    const itemIndex = this.cartItems.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      const removedItem = this.cartItems.splice(itemIndex, 1)[0];
      this.totalPrice -= removedItem.price * removedItem.quantity;
    }
    this.updateUserCartInFirebase(user, this.cartItems, this.totalPrice);

  },

  // Set the quantity of a pack
  setPackQuantity(packID, quantity) {
    let found = false;
    const packToUpdate = this.packs.find((pack) => pack.id === packID);
  
    if (packToUpdate) {
      packToUpdate.quantity += quantity;
    } else {
      this.packs.push({ id: packID, quantity });
    }
  
    // Sort the packs by their numeric IDs
    this.packs.sort((a, b) => a.id - b.id);
  },  

  // Initialize and get the pokemon data
  getPokemonData() {
    const pokemonDataPromise = initializePokemonData();
    resolvePromise(pokemonDataPromise, this.initializePokemonDataPromiseState);
  },

  // Add a pack to the cart
  addToCart(packToAdd) {
    this.cart.items.push(packToAdd);
    this.cart.total += packToAdd.price;
  },

  // Purchase the items in the cart
  purchaseItems() {
    // we need this temporary until firebase is fixed, then we can use this.totalPrice I think
    const totalCost = this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  
    // Check if the user has enough balance
    if (totalCost <= this.balance) {
      // Move items from the cart to the packs array
      this.cartItems.forEach((item) => {
        this.setPackQuantity(item.id, item.quantity);
      });
  
      // update balance
      this.balance -= totalCost;
  
      // Clear the cart
      this.cartItems = [];
      this.totalPrice = 0;
  
      console.log("Purchase successful. Packs array: ", this.packs);
    } else {
      console.log("Insufficient balance. Unable to purchase.");
    }
  },  


  // Set the search query text
  setSearchQuery(queryText) {
    this.searchParams.query = queryText;
  },
  
  pokemonSearch(searchParams) {
    const allPokemons = this.initializePokemonDataPromiseState.data;

    // Filter based on search query and selected types
    const filteredPokemons = allPokemons.filter((pokemon) => {
      // Check if the pokemon type matches the selected types
      let typeMatch =
        !searchParams.selectedTypes.length ||
        pokemon.Types.some((type) => searchParams.selectedTypes.includes(type));

        // If there are two selected types, check if they both match
        if(searchParams.selectedTypes.length == 2){
          typeMatch = searchParams.selectedTypes.every(selectedType => 
            pokemon.Types.map(type => type.name).includes(selectedType));
        }
        // Check if the pokemon name matches the search query
      const searchMatch =
        !searchParams.query ||
        pokemon.Name.toLowerCase().includes(searchParams.query.toLowerCase());

        // Return pokemon that match both type and search inputs.
      return typeMatch && searchMatch;
    });

    // Update searchResultsPromiseState with filtered results
    resolvePromise(
      Promise.resolve(filteredPokemons),
      this.searchResultsPromiseState
    );
  },

  // Sets current pokemon based on pokemonID and fetches details about it.
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
  },

});

export default observable(pokeModel);



