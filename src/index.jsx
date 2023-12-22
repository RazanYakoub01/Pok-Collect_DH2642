import { observable, configure, reaction } from "mobx";
import model from './models/pokeModel.js';
import db from '/src/firebaseModel';
import  handleAuthStateChange from '/src/services/authService.js';


configure({ enforceActions: "never", });  // we don't use Mobx actions
const reactiveModel= observable(model);


import {createRoot} from "react-dom/client";
import ReactRoot from "/src/ReactRoot.jsx";

createRoot(document.getElementById('root')).render(<ReactRoot model={reactiveModel}/>);  // mounts the app in the page DIV with the id "root"

handleAuthStateChange();

reactiveModel.getPokemonData();

reactiveModel.updateLastLoginAndBalance();

// ------ for debug purposes ----------
window.myModel= reactiveModel;

db.connectToFirebase(reactiveModel,reaction);