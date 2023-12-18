import { onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut, GoogleAuthProvider } from 'firebase/auth';
import model from '/src/models/pokeModel.js';
import { auth } from '/src/firebaseConfig.js';
import db from '/src/firebaseModel';


const handleAuthStateChange = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      model.setUser(user);
      db.readUserDataFromFirebase(user.uid);
    } else {
      model.setUser(undefined);
    }
    console.log(user);
  });
};

export const googleSignIn = (navigateCallback) => {
  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({
    prompt: 'login',
  });

  signInWithPopup(auth, provider)
    .then(() => {
      handleAuthStateChange();
      //model.updateLastLoginAndBalance();
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


/*window.addEventListener('beforeunload', () => {
  const user = model.user;
  if (user) {
    signOut(auth)
      .then(() => {
        // Handle any necessary cleanup or notification
      })
      .catch((error) => {
        console.error('Logout Error during page unload:', error);
      });
  }
});*/



export default handleAuthStateChange;
