// src/presenters/HomePresenter.jsx
import React from 'react';
import AboutUsView from '../views/aboutUsView.jsx';

// If you have some model for home, you can import it here
// import HomeModel from '../models/HomeModel';

const AboutUsPresenter = () => {
  // Logic for the HomeView can be handled here
  // For example, if you have a model, you can use it to get data:
  // const homeData = HomeModel.getData();

  // Pass the data to the view as props
  return <AboutUsView /* data={homeData} */ />;
};

export default AboutUsPresenter;
