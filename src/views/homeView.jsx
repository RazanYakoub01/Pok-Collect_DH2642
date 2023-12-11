import React from 'react';
import "/src/home.css";
import { Link } from 'react-router-dom';
import hm6 from '/src/homepageImages/hm6.png';
import hm1 from '/src/homepageImages/hm1.jpg';

const HomeView = () => {
  return (
    <div>
      <div className="title-container">
        <img className="titleImage" src={hm1}/>
        <h1>PokeCollect</h1>
      </div>
      <div className='paragraph-container'>
      <p>With PokeCollect, you can explore a comprehensive Pokédex, discover and purchase exciting Pokémon packs in our virtual store 
        and save your favorite pokémon to your collection.</p>
      <p>Dive into the adventure, catch 'em all, and become a Pokémon Master with PokeCollect!</p>
      </div>
      <div className="button-container">
        <Link to="/about">
          <button className="navigation-button">About Us</button>
        </Link>
        <Link to="/pokedex">
          <button className="navigation-button">Discover Pokémon</button>
        </Link>
      </div>
      <div>
        <img className='homeImg' src={hm6}/>
      </div>
    </div>
  );
};

export default HomeView;