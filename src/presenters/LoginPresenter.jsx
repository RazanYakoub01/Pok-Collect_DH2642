import React from 'react';
import LoginView from '../views/loginView';
import { observer } from "mobx-react-lite";
import { googleSignIn } from '/src/services/authService.js';
import { useNavigate } from 'react-router-dom';

export default observer(function LoginPresenter() {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn(navigate); 
  };

  return <LoginView googleSignIn={handleGoogleSignIn} />;
});

