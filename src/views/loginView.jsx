import React from 'react';
import '/src/login.css';
import { useNavigate } from 'react-router-dom';
import hm4 from '/src/homepageImages/hm4.png';

const LoginView = (props) => {

  const navigate = useNavigate();

  const handleGoogleLoginACB = (event) => {
    event.preventDefault();
    props.googleSignIn();
    navigate('/');
  };


  return (
    <div>
      <h1>Login to your account </h1>
      <button className='googleButton' onClick={handleGoogleLoginACB}>
        Sign in with Google
      </button>
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
