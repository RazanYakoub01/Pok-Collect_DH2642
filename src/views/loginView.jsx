import React from 'react';
import '/src/login.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginView = (props) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGoogleLogin = (event) => {
    event.preventDefault();
    props.googleSignIn();
    navigate('/'); // Use navigate('/') for redirection after successful login
  };

  return (
    <div className='full-screen bg-login'>
      <h1>Login to your account </h1>
      <button className='googleButton' onClick={handleGoogleLogin}>
        Sign in with Google
      </button>
      <div>
        <p>Please login in order to use our store and see your personal collection</p>
      </div>
    </div>
  );
};

export default LoginView;
