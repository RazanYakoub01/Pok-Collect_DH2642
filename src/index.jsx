// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarPresenter from './presenters/NavbarPresenter.jsx';

// ... other imports
import HomePresenter from './presenters/HomePresenter.jsx';
import StorePresenter from './presenters/StorePresenter.jsx';
import PacksPresenter from './presenters/PacksPresenter.jsx';
import AboutUsPresenter from './presenters/AboutUsPresenter.jsx';
import PokedexPresenter from './presenters/PokedexPresenter.jsx';

// Create root outside to ensure strict mode can be applied.
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Router>
      <NavbarPresenter />
      <Routes>
        <Route path="/" element={<HomePresenter />} />
        <Route path="/pokedex" element={<PokedexPresenter />} />
        <Route path="/store" element={<StorePresenter />} />
        <Route path="/packs" element={<PacksPresenter />} />
        <Route path="/about" element={<AboutUsPresenter />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
);