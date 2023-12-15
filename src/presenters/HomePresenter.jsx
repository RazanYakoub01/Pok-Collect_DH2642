// src/presenters/HomePresenter.jsx
import React from 'react';
import { observer } from 'mobx-react-lite';
import HomeView from '../views/homeView';

const HomePresenter = observer((props) => {
  return <HomeView /* data={homeData} */ />;
});

export default HomePresenter;
