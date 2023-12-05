import React from 'react';
import auth from '/src/firebaseConfig'; // Import the Firebase auth object
import { Link } from 'react-router-dom';
import '/src/login.css';
import googleImage from '/src/loginImages/google.png';


const LoginView = () => {
  
  const handleEmailLoginACB = () => {
    
    }


  const handleGoogleAuthACB = () => {
  };


  return (
    <div className='full-screen bg-login'>
    <h1>Sign in</h1>
    <form>
      <label>Email:</label>
      <input type='email' placeholder='Enter your email' />

      <label>Password:</label>
      <input type='password' placeholder='Enter your password' />

      <button type='button' onClick={handleEmailLoginACB}>
        login
      </button>
      <p>
      Don't have an account? Get started by pressing the button below!
    </p>
      <div className='google-auth-button' onClick={handleGoogleAuthACB}>
        <img src={googleImage}/>
      </div>
    </form>
  </div>
  );
};

export default LoginView;
