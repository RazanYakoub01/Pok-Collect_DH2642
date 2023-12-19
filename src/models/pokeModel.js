import { observable, action } from "mobx";
import {
  initializePokemonData,
  getPokemonDetails,
  getEvolutionDetails,
  getCachedPokemonData,
} from "../pokeSource";
import resolvePromise from "../resolvePromise";
import { packs as storePacks } from "../storeData";
import about from "/src/navbarImages/about.png";
import cart1 from "/src/navbarImages/cart1.png";
import collectionPicture from "/src/navbarImages/collection.png";
import home from "/src/navbarImages/home.png";
import packs from "/src/navbarImages/packs.png";
import search1 from "/src/navbarImages/search1.png";
import shop from "/src/navbarImages/shop.png";
import login from "/src/navbarImages/login.png";
import signOut from "/src/navbarImages/signOut.png";
const BASE_URL = "https://pokeapi.co/api/v2/";


const pokeModel = observable({
  user: undefined,
  isLoggedIn: false,
  generationRanges: {
    1: { start: 1, end: 151 },
    2: { start: 152, end: 251 },
    3: { start: 252, end: 386 },
    4: { start: 387, end: 495 },
    5: { start: 496, end: 649 },
    6: { start: 650, end: 721 },
    7: { start: 722, end: 809 },
    8: { start: 810, end: 905 },
    9: { start: 906, end: 1017 },
  },
  LegandaryPokemon : [144, 145, 146, 150, 151, 243, 244, 245, 249, 250, 
    251, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 479, 480, 
    481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 
    638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 716, 
    717, 718, 719, 720, 721, 772, 773, 785, 786, 787, 788, 789, 790, 
    791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 
    804, 805, 806, 807, 808, 809, 888, 889, 890, 891, 892, 893, 894, 
    895, 896, 897, 898, 905, 998, 1000, 1001, 1002, 1003, 1004, 1007, 
    1008, 1009, 1010, 1014, 1016, 1017],
  collection: [],
  initializePokemonDataPromiseState: {},
  currentPokemon: null,
  searchParams: {},
  searchResultsPromiseState: {},
  currentPokemonPromiseState: {},
  openPackPromiseState: {},
  collectionPromiseState: {},
  packs: storePacks.map((pack) => ({ ...pack, quantity: 0 })),
  obtainedPokemonFromLatestPack: [],
  balance: 200,
  cartItems : [],
  totalPrice : 0,
  lastLoginTime : null, 
  hoursRemaining : 0,
  minutesRemaining: 0,
  
  getNavbarItems(handleSignOut) {
    if (this.isLoggedIn) {
      return [
        { name: "Home", path: "/", image: home },
        { name: "About Us", path: "/about", image: about },
        { name: "Pokédex", path: "/pokedex", image: search1 },
        { name: "Store", path: "/store", image: shop },
        { name: "Cart", path: "/cart", image: cart1 },
        { name: "Packs", path: "/packs", image: packs },
        { name: "Collection", path: "/collection", image: collectionPicture },
        { name: "Sign Out", action: handleSignOut, image: signOut },
      ];
    } else {
      return [
        { name: "Home", path: "/", image: home },
        { name: "About Us", path: "/about", image: about },
        { name: "Pokédex", path: "/pokedex", image: search1 },
        { name: "Login", path: "/login", image: login },
      ];
    }
  },
  updateLastLoginAndBalance() {
    const currentTime = Date.now();
    const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000; // 24 hours in ms
  
    console.log(currentTime);  
    console.log(this.lastLoginTime);
  
    if (this.lastLoginTime === null || (currentTime - this.lastLoginTime) > ONE_DAY_IN_MS) {
      const newBalance = this.balance + 75;
      console.log('Updating balance:', newBalance);
      this.balance = newBalance;
      this.lastLoginTime = currentTime;
    }

    // Calculate remaining time until the next update
    const nextUpdateTime = this.lastLoginTime + ONE_DAY_IN_MS;
    const timeRemaining = nextUpdateTime - currentTime;

    // Convert milliseconds to hours and minutes
    this.hoursRemaining = Math.floor(timeRemaining / (60 * 60 * 1000));
    this.minutesRemaining = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));

    console.log(this.hoursRemaining);
    console.log(this.minutesRemaining);
  },  

  setCartItems: action(function(items) {
    this.cartItems = items;
  }),

  setTotalPrice(price) {
    this.totalPrice = price;
  },

  initializeTotalPrice() {
    // Calculate total price based on items in cartItems
    let totalPrice = 0;
    for (const item of this.cartItems) {
      totalPrice += item.price * item.quantity;
    }
    this.totalPrice = totalPrice;
  },
  

  // Add an item to the cart
  addItem(item) {
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
  },

  // gets the total number of items in the cart
  getTotalItemsInCart() {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  },

  // Update the quantity of an item in the cart
  updateItemQuantity(itemId, newQuantity) {
    const itemToUpdate = this.cartItems.find((item) => item.id === itemId);
    if (itemToUpdate) {
      const priceDifference =
        itemToUpdate.price * (newQuantity - itemToUpdate.quantity);
      itemToUpdate.quantity = newQuantity;
      this.totalPrice += priceDifference;
      console.log(newQuantity);
      console.log(this.cartItems.length);
    }
  },

  // Remove an item from the cart
  removeItem(itemId) {
    const itemIndex = this.cartItems.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      const removedItem = this.cartItems.splice(itemIndex, 1)[0];
      this.totalPrice -= removedItem.price * removedItem.quantity;
    }
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
      if (searchParams.selectedTypes.length == 2) {
        const pokemonTypeNames = pokemon.Types.map((type) => type);
        typeMatch = searchParams.selectedTypes.every((selectedType) =>
          pokemonTypeNames.includes(selectedType)
        );
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

  pokemonSearchByIDs(pokemonIDs) {
    const allPokemons = this.initializePokemonDataPromiseState.data;
  
    // Filter based on provided Pokémon IDs
    const filteredPokemons = allPokemons.filter(pokemon => pokemonIDs.includes(pokemon.ID));
  
    // Create and return a promise with the filtered results
    resolvePromise(Promise.resolve(filteredPokemons), this.collectionPromiseState);
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

  // Function to get the user's collection
  getCollection() {
    // Retrieve the cached Pokémon data
    const data = getCachedPokemonData();

    // Filter the cached data to include only Pokémon whose IDs are in the collection
    const collectionPokemons = data.filter((pokemon) =>
      this.collection.includes(pokemon.id)
    );

    // Return the filtered list of Pokémon
    return collectionPokemons;
  },

  // Function to add Pokemon to the user's collection
  addPokemonToCollection(pokemonIDs) {
    pokemonIDs.forEach(pokemonID => {
      // Check if the Pokémon ID is already in the collection to avoid duplicates
      if (!this.collection.some(p => p === pokemonID)) {
        // Add the new Pokémon ID to the collection
        this.collection = [...this.collection, pokemonID];
      }
    });
  },


  getPokemonPackCards(pokemonIDs) {
    const allPokemons = this.initializePokemonDataPromiseState.data;
  
    // Filter based on provided Pokémon IDs
    const filteredPokemons = allPokemons.filter(pokemon => pokemonIDs.includes(pokemon.ID));
  
    // Create and return a promise with the filtered results
    resolvePromise(Promise.resolve(filteredPokemons), this.openPackPromiseState);
  },

  divideCollectionByGeneration () {
    const collectionsByGeneration = {};
    // Initialize empty arrays for each generation
    for (const gen in this.generationRanges) {
      collectionsByGeneration[gen] = [];
    }
    // Categorize Pokémon IDs into respective generation arrays
    this.collection.forEach((pokemonID) => {
      for (const gen in this.generationRanges) {
        const range = this.generationRanges[gen];
        if (pokemonID >= range.start && pokemonID <= range.end) {
          collectionsByGeneration[gen].push(pokemonID);
          break;
        }
      }
    });
    return collectionsByGeneration;
  },
  
  countCollectedByGeneration ()  {
      const dividedCollections = this.divideCollectionByGeneration();
      const collectedByGeneration = {};
      // Count the number of Pokémon collected for each generation
      for (const gen in dividedCollections) {
        collectedByGeneration[gen] = dividedCollections[gen].length;
      }
      return collectedByGeneration;
  },

  getTotalCountByGeneration() {
    const totalCountByGeneration = {};
    for (const gen in this.generationRanges) {
      const range = this.generationRanges[gen];
      totalCountByGeneration[gen] = range.end - range.start + 1;
    }
    return totalCountByGeneration;
  },

  // Method to count collected Pokémon for Generation 10
countCollectedGenTen() {
  const legendariesInCollection = this.collection.filter((pokemonID) =>
    this.LegandaryPokemon.includes(pokemonID)
  );
  return legendariesInCollection.length;
},

// Method to get total count of Generation 10 Pokémon
getTotalCountGenTen() {
  return this.LegandaryPokemon.length;
},


  

  //func to open packs, depandant on packID
  openPack(packId) {
    // Check if the pack ID is valid
    if (this.generationRanges.hasOwnProperty(packId)) {
      const range = this.generationRanges[packId];
      const randomPokemonID = this.generateRandomPokemon(
        range.start,
        range.end,
        10
      );
      console.log("randompokemonid", randomPokemonID)
      // Add the random Pokemon to the user's collection
      this.addPokemonToCollection(randomPokemonID);
      console.log("added pokemon to collection: ", this.collection);
      this.getPokemonPackCards(randomPokemonID);

      // return the list of random Pokemon if needed
      return randomPokemonID;
    } else {
      console.error(`Invalid pack ID: ${packId}`);
      return null;
    }
  },

  // needed to generate 10 random pokemon for the pack opening
  generateRandomPokemon(start, end, count) {
    const randomPokemon = [];
    while (randomPokemon.length < count) {
      const randomId = Math.floor(Math.random() * (end - start + 1)) + start;
      if (!randomPokemon.includes(randomId)) {
        randomPokemon.push(randomId);
      }
    }
    console.log("pokemon from pack: ", randomPokemon);
    return randomPokemon;
  },

  setUser(user) {
    if (user == undefined) {
      this.isLoggedIn = false;
    } else {
      this.user = user;
      this.isLoggedIn = true;
    }
  },
});

export default observable(pokeModel);
