/*import { useState, useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, database } from '../firebaseConfig.js';
import { useNavigate } from 'react-router-dom';


export const useAuthentication = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setIsLoggedIn(!!currentUser);
      console.log(currentUser.uid);

       const userCartRef = ref(database, `users/${currentUser.uid}/cart`);
        try {
          const snapshot = await get(userCartRef);
          const cartData = snapshot.val();         

          model.setCartItems(cartData?.cartItems || []);
          model.setTotalPrice(cartData?.totalPrice || 0);
          console.log(model.cartItems);
          console.log('User cart data: OK');
        } catch (error) {
          console.error('Error retrieving user cart data:', error);
        }
    
    });
    
    return () => {
      unsubscribe();
    };
  }, []);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    navigate('/');
  };

  const logOut = () => {
    signOut(auth);
    navigate('/');
  };

  return { user, isLoggedIn, googleSignIn, logOut };
};*/

import { useState, useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, database } from '../firebaseConfig.js';
import { ref, get } from 'firebase/database';
import model from '/src/models/pokeModel.js';
import { useNavigate } from 'react-router-dom';

export const useAuthentication = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setIsLoggedIn(!!currentUser);
      console.log(currentUser?.uid);

      if (currentUser) {
        // Store user information in local storage or cookies upon authentication
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
      }
      
      // Fetch cart data and update model based on stored user information
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        const userCartRef = ref(database, `users/${parsedUser.uid}/cart`);
        try {
          const snapshot = await get(userCartRef);
          const cartData = snapshot.val();         

          // Update model with fetched cart data
          model.cartItems = cartData.cartItems ;
          model.totalPrice = cartData.totalPrice;
          console.log(model.cartItems);
          console.log('User cart data: OK');
        } catch (error) {
          console.error('Error retrieving user cart data:', error);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    navigate('/');
  };

  const logOut = () => {
    signOut(auth);
    navigate('/');
  };

  return { user, isLoggedIn, googleSignIn, logOut };
};


