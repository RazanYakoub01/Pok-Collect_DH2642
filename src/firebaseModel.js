// firebaseModel.js
import { ref, get,set } from 'firebase/database';
import { database } from './firebaseConfig.js';
import model from './models/pokeModel.js';

const readUserDataFromFirebase = async (userId) => {
  try {
    const userCartRef = ref(database, `users/${userId}/userData`);
    const snapshot = await get(userCartRef);
    if (snapshot.exists()) {
      console.log(snapshot.val());
      persistenceToModel(snapshot.val(), model); 
    } else {
      console.log('No data available for this user.');
      return null;
    }
  } catch (error) {
    console.error('Error retrieving data from Firebase:', error);
    return null;
  }
};

function modelToPersistence(model) {
  const persistenceObject = {
    cartItems: model.cartItems,
    totalPrice: model.totalPrice,
    balance: model.balance,
    packs : model.packs,
    currentPokemon: model.currentPokemon
  }

  return persistenceObject;
}

function persistenceToModel(data, model) {
  data = data || {};

  model.cartItems = data.cartItems || [];
  model.totalPrice = data.totalPrice || 0;
  model.balance = data.balance || 200;
  model.packs = data.packs || [];
  if (data.currentPokemon !== undefined){
    model.setCurrentPokemon(data.currentPokemon);
  }
}


const writeCartDataToFirebase = async (userId, model) => {
  try {
    const userCartRef = ref(database, `users/${userId}/userData`);
    await set(userCartRef, modelToPersistence(model));
    console.log('Cart data successfully written to Firebase');
  } catch (error) {
    console.error('Error writing cart data to Firebase:', error);
  }
};


function connectToFirebase(model, watchFunction) {
  function checkACB() {
    const data = [model.cartItems, model.balance,model.totalPrice,model.packs, model.currentPokemon];
    return data;
  }
  function effectACB() {
    if (model.user && model.user.uid) {
      writeCartDataToFirebase(model.user.uid, model);
    }
  }
  // Check if the user is already authenticated
  if (model.user && model.user.uid) {
    readUserDataFromFirebase(model.user.uid).then((data) => {
      if (data) {
        persistenceToModel(model); 
      }
    });
  }
  watchFunction(checkACB, effectACB);
}

export default { writeCartDataToFirebase , readUserDataFromFirebase, connectToFirebase };
