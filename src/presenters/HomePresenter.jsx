// src/presenters/HomePresenter.jsx
import React from 'react';
import { observer } from 'mobx-react-lite';
import HomeView from '../views/homeView';

const HomePresenter = observer((props) => {
  return <HomeView loggedIn = {props.model.isLoggedIn} hoursRemaining = {props.model.hoursRemaining} minutesRemaining = {props.model.minutesRemaining}/>;
});

export default HomePresenter;
