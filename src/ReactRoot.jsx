import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { observer } from "mobx-react-lite";
import RequireAuth from './protectedRoutes.jsx';
import NavbarPresenter from './presenters/NavbarPresenter.jsx';
import HomePresenter from './presenters/HomePresenter.jsx';
import StorePresenter from './presenters/StorePresenter.jsx';
import AboutUsPresenter from './presenters/AboutUsPresenter.jsx';
import PokedexPresenter from './presenters/PokedexPresenter.jsx';
import ShoppingCartPresenter from './presenters/ShoppingCartPresenter.jsx';
import LoginPresenter from './presenters/LoginPresenter.jsx';
import PacksPresenter from './presenters/PacksPresenter.jsx';
import CollectionPresenter from './presenters/CollectionPresenter.jsx';
import DetailsPresenter from './presenters/DetailsPresenter.jsx';
import OpenCardsPresenter from './presenters/OpenCardsPresenter.jsx';

/*
  ReactRoot Component:
  The root component that sets up the application's routing using React Router.
  It includes the main navigation, different presenters for various pages, and private routes using RequireAuth.
  Also, it sets up an interval to update time in the model every second.
*/
export default observer(function ReactRoot(props) {
  // useEffect to update time in the model at a regular interval
  useEffect(() => {
    // Set up an interval to update time every second
    const updateInterval = setInterval(() => {
      props.model.updateTime();
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(updateInterval);
  }, [props.model]);

  // Render the Router component with navigation and routes
  return (
    <Router>
      {/* Render the NavbarPresenter component with the model */}
      <NavbarPresenter model={props.model} />

      {/* Define routes for different pages */}
      <Routes>
        <Route path="/" element={<HomePresenter model={props.model} />} />
        <Route path="/pokedex" element={<PokedexPresenter model={props.model} />} />
        <Route path="/about" element={<AboutUsPresenter />} />
        <Route path="/login" element={<LoginPresenter />} />

        {/* Route for details with dynamic parameter */}
        <Route path={`/details/:${props.model.currentPokemon}`} element={<DetailsPresenter model={props.model} />} />

        {/* Private routes wrapped with RequireAuth */}
        <Route element={<RequireAuth />}>
          <Route path="/store" element={<StorePresenter model={props.model} />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path="/cart" element={<ShoppingCartPresenter model={props.model} />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path="/packs" element={<PacksPresenter model={props.model} />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path="/openCards" element={<OpenCardsPresenter model={props.model} />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path="/collection" element={<CollectionPresenter model={props.model} />} />
        </Route>
      </Routes>
    </Router>
  );
});
