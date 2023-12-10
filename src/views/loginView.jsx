import React from 'react';
import '/src/login.css';
import { useNavigate } from 'react-router-dom';
import hm4 from '/src/homepageImages/hm4.png';

const LoginView = ({ googleSignIn, logOut, user }) => {

  const navigate = useNavigate();

  const handleGoogleLoginACB = (event) => {
    event.preventDefault();
    googleSignIn();
  };

  const handleGoogleSignOutACB = (event) => {
    event.preventDefault();
    logOut();
    navigate('/');
  };

  return (
    <div>
      <h1>Login to your account or sign out</h1>
      {user ? (
        <button className='signOutButton' onClick={handleGoogleSignOutACB}>
          Sign out
        </button>
      ) : (
        <button className='googleButton' onClick={handleGoogleLoginACB}>
          Sign in with Google
        </button>
      )}
      <div>
        <p>Please login in order to use our store and see your personal collection</p>
      </div>
      <div>
        <img className='homeImg' src={hm4}></img>
      </div>
    </div>
  );
};

export default LoginView;
