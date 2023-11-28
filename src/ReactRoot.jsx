import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarPresenter from './presenters/NavbarPresenter.jsx';
import HomePresenter from './presenters/HomePresenter.jsx';
import StorePresenter from './presenters/StorePresenter.jsx';
import AboutUsPresenter from './presenters/AboutUsPresenter.jsx';
import PokedexPresenter from './presenters/PokedexPresenter.jsx';
import ShoppingCartPresenter from './presenters/ShoppingCartPresenter.jsx';
import LoginPresenter from './presenters/LoginPresenter.jsx';

// Create root outside to ensure strict mode can be applied.
import { createHashRouter,  RouterProvider} from "react-router-dom";
import { observer } from "mobx-react-lite";


// Import your other presenters/components
/*
export default
observer(    
function ReactRoot(props){
    const routes = [
        {
          path: "/",
          element: <HomePresenter model={props.model} />,
        },
        {
          path: "/pokedex",
          element: <PokedexPresenter model={props.model} />
        },
        {
          path: "/store",
          element: <StorePresenter model={props.model} />
        },
        {
          path: "/packs",
          element: <PacksPresenter model={props.model} />
        },
        {
          path: "/about",
          element: <AboutUsPresenter model={props.model} />
        }
      ];
    
      return (
        <div>
            <div>
                <NavbarPresenter />
            </div>
          
          <div>
            <RouterProvider router={createHashRouter(routes)} />
          </div>
        </div>
      );
});
  */





export default
observer(    
function ReactRoot(props){

    console.log(props);

    return (
    <Router>
      <NavbarPresenter />
      <Routes>
        <Route path="/" element={<HomePresenter />} />
        <Route path="/pokedex" element={<PokedexPresenter />} />
        <Route path="/store" element={<StorePresenter />} />
        <Route path="/cart" element={<ShoppingCartPresenter />} />
        <Route path="/about" element={<AboutUsPresenter />} />
        <Route path="/login" element={<LoginPresenter />} />
      </Routes>
    </Router>
    )
    
});