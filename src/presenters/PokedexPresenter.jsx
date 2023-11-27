// src/presenters/HomePresenter.jsx
import React from "react";
import SearchFormView from "../views/searchFormView.jsx";
import SearchResultsView from "../views/searchResultsView.jsx";
//import SearchResultsView from "../views/searchResultsView.jsx";
//import StoreView from '../views/storeView';


// If you have some model for home, you can import it here
// import HomeModel from '../models/HomeModel';

const PokedexPresenter = () => {
  // Logic for the HomeView can be handled here
  // For example, if you have a model, you can use it to get data:
  // const homeData = HomeModel.getData();

  // Pass the data to the view as props

  return <div><SearchFormView /* data={homeData} */ /><SearchResultsView /></div>;

 /* return (
    <div>
      <SearchFormView data={homeData}  />
      <SearchResultsView /* data={homeData} />
    </div>
  );*/
};

export default PokedexPresenter;
