// firebaseModel.js
import { ref, get,set } from 'firebase/database';
import { database } from './firebaseConfig.js';
import { auth } from '/src/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

import model from './models/pokeModel.js';

const readUserDataFromFirebase = async (userId) => {
  try {
    const userCartRef = ref(database, `users/${userId}/cart`);
    const snapshot = await get(userCartRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log('No data available for this user.');
      return null;
    }
  } catch (error) {
    console.error('Error retrieving data from Firebase:', error);
    return null;
  }
};

/*const initializeFirebase = async () => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // If the user is logged in, fetch the necessary data
      const data = await readFromFirebase(user.uid);
      console.log("logging");
      console.log(data);
      model.setCartItems(data.cartItems);
      // Update your MobX model or React state with this data
    }
  });
};*/

const writeCartDataToFirebase = async (userId, cartItems) => {
  try {
    const userCartRef = ref(database, `users/${userId}/cart`);
    await set(userCartRef, cartItems);
    console.log('Cart data successfully written to Firebase');
  } catch (error) {
    console.error('Error writing cart data to Firebase:', error);
  }
};

export default { writeCartDataToFirebase , readUserDataFromFirebase};
