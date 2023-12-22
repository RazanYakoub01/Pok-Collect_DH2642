import { ref, get, set } from 'firebase/database';
import { database } from './firebaseConfig.js';
import model from './models/pokeModel.js';

/* Function to read user data from Firebase based on the provided userId. */
const readUserDataFromFirebase = async (userId) => {
  try {
    const userCartRef = ref(database, `users/${userId}/userData`);
    const snapshot = await get(userCartRef);
    if (snapshot.exists()) {
      return persistenceToModel(snapshot.val(), model);
    } else {
      console.log('No data available for this user.');
      return null;
    }
  } catch (error) {
    console.error('Error retrieving data from Firebase:', error);
    return null;
  }
};

/* Function to convert the application model to a persistence object for Firebase. */
function modelToPersistence(model) {
  const persistenceObject = {
    cartItems: model.cartItems,
    balance: model.balance,
    packs: model.packs,
    currentPokemon: model.currentPokemon,
    collection: model.collection,
    lastLoginTime: model.lastLoginTime
  };

  return persistenceObject;
}

/* Function to convert Firebase data to the application model. */
function persistenceToModel(data, model) {
  data = data || {};

  model.cartItems = data.cartItems || [];
  model.balance = data.balance || 200;
  model.packs = data.packs || [];
  model.collection = data.collection || [];

  // Set the current Pokemon in the model if available in the Firebase data.
  if (data.currentPokemon !== undefined) {
    model.setCurrentPokemon(data.currentPokemon);
  }

  model.lastLoginTime = data.lastLoginTime || null;
  model.updateLastLoginAndBalance();
}

/* Function to write cart data to Firebase for the specified user. */
const writeCartDataToFirebase = async (userId, model) => {
  try {
    const userCartRef = ref(database, `users/${userId}/userData`);
    await set(userCartRef, modelToPersistence(model));
    console.log('Cart data successfully written to Firebase');
  } catch (error) {
    console.error('Error writing cart data to Firebase:', error);
  }
};

/* Function to connect the application model to Firebase using a watch function. */
function connectToFirebase(model, watchFunction) {
  /* Function to check the application model's data (ACB: Array of Cart and Balance). */
  function checkACB() {
    const cartItemQuantities = model.cartItems.map(item => item.quantity);
    const data = [
      model.cartItems,
      model.balance,
      model.packs,
      model.currentPokemon,
      model.collection,
      model.lastLoginTime,
      cartItemQuantities
    ];
    return data;
  }

  /* Function to perform an effect based on changes in the ACB data. */
  function effectACB() {
    if (model.user && model.user.uid) {
      writeCartDataToFirebase(model.user.uid, model);
    }
  }
  
  watchFunction(checkACB, effectACB);

  if (model.user && model.user.uid) {
    readUserDataFromFirebase(model.user.uid);
  }
}
export default {
  writeCartDataToFirebase,
  readUserDataFromFirebase,
  connectToFirebase
};
