import React from 'react';
import LoginView from '../views/loginView';
import { observer } from "mobx-react-lite";
import { useAuthentication } from '../services/authService';

export default observer(function LoginPresenter() {

  return <LoginView googleSignIn={useAuthentication().googleSignIn} logOut={useAuthentication().logOut} user={useAuthentication().user} />;
});

