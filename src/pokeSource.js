import { BASE_URL } from "./config/apiConfig";

// Fetches all Pokemon URLs from the API.
function fetchAllPokemon() {
  // Edit limit to fetch more Pokemon
    return fetch(BASE_URL + 'pokemon?limit=15')
        .then(response => response.json())
        .then(data => data.results.map(pokemon => pokemon.url))
        .catch(error => console.error("Error fetching initial Pokémon data:", error));
}

// Fetches Pokemon details from the API with URL as parameter.
function getPokemonDetails(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(extractPokeData)
        .catch(error => {
            console.error("Error fetching Pokémon details:", error);
            throw error;
        });
}

// Extracts Pokemon data from the API response.
function extractPokeData(data) {
    let stats = {};
    data.stats.forEach(statItem => {
        stats[statItem.stat.name] = statItem.base_stat;
    });
    return {
        Name: data.name,
        ID: data.id,
        BaseExperience: data.base_experience,
        Height: data.height,
        Weight: data.weight,
        Types: data.types.map(typeInfo => typeInfo.type.name),
        Abilities: data.abilities.map(ability => ability.ability.name),
        ImageURL: data.sprites.front_default,
        Stats: stats
    };
}

// Caches Pokemon data in local storage.
function cachePokemonData(pokemonData) {
    localStorage.setItem('pokemonData', JSON.stringify(pokemonData));
}

// Caches collection data in local storage.
function cacheCollectionData(collectionData){
    localStorage.setItem('collectionData', JSON.stringify(collectionData));
}

// Retrieves cached Pokemon data from local storage.
function getCachedPokemonData() {
    const data = localStorage.getItem('pokemonData');
    return data ? JSON.parse(data) : null;
}

// Retrieves cached collection data from local storage.
function getCachedCollectionData(){
    const data = localStorage.getItem('collectionData');
    return data ? JSON.parse(data) : null;
}

// This code initializes Pokemon data by first checking if there is cached data available. 
// If there is, it returns the cached data. 
// If not, it fetches fresh data from an API, retrieves the details of each Pokemon, caches the data, and returns the fetched data.
function initializePokemonData() {
    const cachedData = getCachedPokemonData();
    if (cachedData) {
      console.log("Using cached data")
        return Promise.resolve(cachedData);
    } else {
      console.log("Using fresh data from api")
        return fetchAllPokemon().then(urls => {
            const detailPromises = urls.map(url => getPokemonDetails(url));
            return Promise.all(detailPromises);
        })
        .then(allPokemonDetails => {
            cachePokemonData(allPokemonDetails);
            return Promise.resolve(allPokemonDetails);
        });
    }
}

export { initializePokemonData };
