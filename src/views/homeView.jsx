import React from 'react';
import "/src/home.css";
import { Link } from 'react-router-dom';

const HomeView = () => {
  return (
    <div className='full-screen bg-home'>
      <h1>PokeCollect</h1>
      <p>With PokeCollect you can explore a comprehensive Pokédex, discover and purchase exciting Pokémon packs in our virtual store 
        and save your favorite pokémon to your collection.</p>
      <p>Dive into the adventure, catch 'em all, and become a Pokémon Master with PokeCollect!"</p>
      <div className="button-container">
        <Link to="/about">
          <button className="navigation-button">About Us</button>
        </Link>
        <Link to="/pokedex">
          <button className="navigation-button">Discover Pokémon</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeView;