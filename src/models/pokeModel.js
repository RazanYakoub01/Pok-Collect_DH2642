import { observable, action } from "mobx";
import {
  initializePokemonData,
  getPokemonDetails,
  getCachedPokemonData,
} from "../pokeSource";
import resolvePromise from "../resolvePromise";
import { packs as storePacks , generationRanges as generationRanges, LegandaryPokemon as LegandaryPokemon, icons as icons } from "../storeData";
import about from "/src/assets/navbarImages/about.png";
import cart1 from "/src/assets/navbarImages/cart1.png";
import collectionPicture from "/src/assets/navbarImages/collection.png";
import home from "/src/assets/navbarImages/home.png";
import packs from "/src/assets/navbarImages/packs.png";
import search1 from "/src/assets/navbarImages/search1.png";
import shop from "/src/assets/navbarImages/shop.png";
import login from "/src/assets/navbarImages/login.png";
import signOut from "/src/assets/navbarImages/signOut.png";
const BASE_URL = "https://pokeapi.co/api/v2/";


const pokeModel = observable({
  user: undefined,
  isLoggedIn: false,
  generationRanges: generationRanges,
  LegandaryPokemon : LegandaryPokemon,
  icons : icons,
  collection: [],
  initializePokemonDataPromiseState: {},
  currentPokemon: null,
  searchParams: {},
  searchResultsPromiseState: {},
  currentPokemonPromiseState: {},
  openPackPromiseState: {},
  addedPokemons: [],
  duplicatePokemons: [],
  collectionPromiseState: {},
  packs: storePacks.map((pack) => ({ ...pack, quantity: 0 })),
  balance: 500,
  cartItems : [],
  totalPrice : 0,
  lastLoginTime : null, 
  hoursRemaining : 0,
  minutesRemaining: 0,
  secondsRemaining:0,
  ONE_DAY_IN_MS : 24 * 60 * 60 * 1000, 

  
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
  
    if (this.lastLoginTime === null || (currentTime - this.lastLoginTime) > this.ONE_DAY_IN_MS) {
      const newBalance = this.balance + 75;
      console.log('Updating balance:', newBalance);
      this.balance = newBalance;
      this.lastLoginTime = currentTime;
      this.updateTime();
    }
  },
  
  updateTime() {
    if (this.lastLoginTime) {
      const currentTime = Date.now();
  
      const nextUpdateTime = this.lastLoginTime + this.ONE_DAY_IN_MS;
      const timeRemaining = Math.max(nextUpdateTime - currentTime, 0); // Ensure timeRemaining is not negative
  
      // Convert milliseconds to hours, minutes, and seconds
      this.hoursRemaining = Math.floor(timeRemaining / (60 * 60 * 1000));
      this.minutesRemaining = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
      this.secondsRemaining = Math.floor((timeRemaining % (60 * 1000)) / 1000);
  
      if (timeRemaining <= 0) {
        this.hoursRemaining = 0;
        this.minutesRemaining = 0;
        this.secondsRemaining = 0;
        this.updateLastLoginAndBalance();
      }
    } else {
      this.hoursRemaining = 0;
      this.minutesRemaining = 0;
      this.secondsRemaining = 0;
    }
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
    const addedPokemons = [];
    const duplicatePokemons = [];
  
    pokemonIDs.forEach(pokemonID => {
      // Check if the Pokémon ID is already in the collection to avoid duplicates
      if (!this.collection.includes(pokemonID)) {
        // Add the new Pokémon ID to the collection
        this.collection = [...this.collection, pokemonID];
        addedPokemons.push(pokemonID);
      } else {
        duplicatePokemons.push(pokemonID);
      }
    });
  
    // Update MobX observable arrays
    this.addedPokemons = addedPokemons;
    this.duplicatePokemons = duplicatePokemons;
  
    return { addedPokemons, duplicatePokemons };
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

getGenerationForSpecifik(pokemonID) {
  for (const gen in generationRanges) {
    const range = generationRanges[gen];
    if (pokemonID >= range.start && pokemonID <= range.end) {
      return gen;
    }
  }
  return 'Unknown Generation';
},

//func to open packs, dependant on packID
openPack(packId) {
 

  // Check if the pack ID is valid
  if (this.generationRanges.hasOwnProperty(packId)) {
    const range = this.generationRanges[packId];
    const randomPokemonID = this.generateRandomPokemon(range.start, range.end, 10);

    // If the pack ID is 10, guarantee at least one legendary Pokémon
    if (packId === 10) {
      // Check if the pack already contains a legendary Pokémon
      const hasLegendary = randomPokemonID.some((pokemon) =>
        this.LegandaryPokemon.includes(pokemon)
      );

      // If no legendary Pokémon is found, add one
      if (!hasLegendary) {
        const nonLegendaryPokemonIndex = randomPokemonID.findIndex(
          (pokemon) => !this.LegandaryPokemon.includes(pokemon)
        );

        // When a non-legendary Pokémon is found, replace it with a legendary Pokémon
        if (nonLegendaryPokemonIndex !== -1) {
          const randomIndex = Math.floor(Math.random() * this.LegandaryPokemon.length);
          randomPokemonID[nonLegendaryPokemonIndex] = this.LegandaryPokemon[randomIndex];
        }
      }
    }

    console.log("randompokemonid", randomPokemonID);
    // Add the random Pokemon to the user's collection
    this.addPokemonToCollection(randomPokemonID);
    console.log("added pokemon to collection: ", this.collection);
    this.getPokemonPackCards(randomPokemonID);

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
