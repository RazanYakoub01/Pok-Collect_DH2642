// src/presenters/HomePresenter.jsx
import React from 'react';
import PacksView from '../views/packsView.jsx';

// If you have some model for home, you can import it here
// import HomeModel from '../models/HomeModel';

const PacksPresenter = () => {
  // Logic for the HomeView can be handled here
  // For example, if you have a model, you can use it to get data:
  // const homeData = HomeModel.getData();

  // Pass the data to the view as props
  return <PacksView /* data={homeData} */ />;
};

export default PacksPresenter;
