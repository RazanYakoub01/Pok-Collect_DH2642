// src/index.js
import "/src/teacherFetch.js"; // protection against fetch() in infinite re-render
import { observable, configure, reaction } from "mobx";
import { initializePokemonData } from "./pokeSource.js"

import model from './models/pokeModel.js';

configure({ enforceActions: "never", });  // we don't use Mobx actions
const reactiveModel= observable(model);

import {createElement} from "react";
window.React= {createElement:createElement}; // needed in the lab because it works with both React and Vue

import {createRoot} from "react-dom/client";
import ReactRoot from "/src/ReactRoot.jsx";

// this is a test to see if fetching pokemon data from api/local cache works on startup.
initializePokemonData().then(pokemonData => {
    console.log(pokemonData);
  });

createRoot(document.getElementById('root')).render(<ReactRoot model={reactiveModel}/>);  // mounts the app in the page DIV with the id "root"
// to see the DIV, look at react.html in the developer tools Sources
// react.html, with the content <div id="root"></div> is configured in vite.config.js

console.log(reactiveModel)
// ------ for debug purposes ----------
//window.myModel= model;             // make the model available in the Console
window.myModel= reactiveModel;  


