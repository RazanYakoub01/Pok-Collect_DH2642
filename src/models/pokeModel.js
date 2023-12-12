import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { initializePokemonData , getPokemonDetails } from "../pokeSource";
import resolvePromise from "../resolvePromise";
import { getPokemonDetails } from "../pokeSource";
import { getEvolutionDetails } from "../pokeSource";
const BASE_URL = "https://pokeapi.co/api/v2/";

import {  database } from '/src/firebaseConfig.js';
import { ref, update } from 'firebase/database';

const updateUserCartInFirebase = (user, cartItems, totalPrice) => {

  if (user) {
    const userCartRef = ref(database, `users/${user.uid}/cart`);

    update(userCartRef, { cartItems, totalPrice })
      .then(() => {
        console.log('User cart updated successfully');
      })
      .catch((error) => {
        console.error('Error updating user cart:', error);
      });

  }
};


const pokeModel = {

  collection: [],
  updateUserCartInFirebase: updateUserCartInFirebase, 
  initializePokemonDataPromiseState: {},
  currentPokemon: null,
  searchParams: {},
  searchResultsPromiseState: {},
  currentPokemonPromiseState: {},
  currentEvolution: null,
  currentEvolutionPromiseState: {},
  packs: [
    {
      packID: "1",
      quantity: 10,
    },
    {
      packID: "2",
      quantity: 5,
    },
  ],

  balance: 200,

  // Making cartItems and totalPrice observable
  cartItems : [],
  totalPrice : 0,

  setCartItems(items) {
    this.cartItems = items;
  },

  setTotalPrice(price) {
    this.totalPrice = price;
  },

  updateUserCartInFirebase  (user, cartItems, totalPrice) {
    updateUserCartInFirebase  (user, cartItems, totalPrice)
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

        // Fetch both details and evolution promises
        const pokemonDetailsPromise = getPokemonDetails(url);
        const evolutionPromise = getEvolutionDetails(pokemonID);

        // Resolve promises
        resolvePromise(pokemonDetailsPromise, this.currentPokemonPromiseState);
        resolvePromise(evolutionPromise, this.currentEvolutionPromiseState);
      }
    } else {
      this.currentPokemon = null;
      this.currentPokemonPromiseState = {};

      // Reset evolution data when no Pokémon is selected
      this.currentEvolution = null;
      this.currentEvolutionPromiseState = {};
    }
  },

};

export default observer(pokeModel);
