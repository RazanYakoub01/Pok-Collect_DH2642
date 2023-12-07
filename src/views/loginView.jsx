import React from 'react';
import '/src/login.css';
import { Link } from 'react-router-dom';

const LoginView = ({ googleSignIn, logOut, user }) => {

  const handleGoogleLogin = (event) => {
    event.preventDefault();
    googleSignIn();
  };

  return (
    <div className='full-screen bg-login'>
      <h1>Login to your account or sign out</h1>
      {user ? (
        <Link to="/">
        <button className='signOutButton' onClick={logOut}>
          Sign out
        </button>
        </Link>
      ) : (
        <button className='googleButton' onClick={handleGoogleLogin}>
          Sign in with Google
        </button>
      )}
    </div>
  );
};

export default LoginView;
