import { onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import model from '/src/models/pokeModel.js';
import { auth } from '/src/firebaseConfig.js';


const handleAuthStateChange = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      model.setUser(auth.currentUser);
    } else {
      model.setUser(undefined);
    }
    console.log(user);
  });
};

export const googleSignIn = (navigateCallback) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then(() => {
      handleAuthStateChange();
      navigateCallback('/'); // Navigating after successful sign-in
    })
    .catch((error) => {
      console.error('Google Sign-In Error:', error);
    });
};


export const logOut = (navigateCallback) => {
  signOut(auth)
    .then(() => {
      handleAuthStateChange();
      navigateCallback('/'); // Navigating after successful logout
    })
    .catch((error) => {
      console.error('Logout Error:', error);
    });
};


export default handleAuthStateChange;
