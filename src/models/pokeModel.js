import { observer } from "mobx-react-lite";
import { initializePokemonData } from "../pokeSource";
import resolvePromise from "../resolvePromise";

const pokeModel = {
  collection: [],
  initializePokemonDataPromiseState: {},
  getPokemonData() {
    const pokemonDataPromise = initializePokemonData();
    resolvePromise(pokemonDataPromise, this.initializePokemonDataPromiseState);
  },
};

export default observer(pokeModel);
