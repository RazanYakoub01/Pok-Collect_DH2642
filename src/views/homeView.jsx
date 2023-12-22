import React from "react";
import { Link } from "react-router-dom";
import "/src/css/home.css";
import hm6 from "/src/assets/homepageImages/hm6.png";
import hm1 from "/src/assets/homepageImages/hm1.jpg";

function HomeView(props) {
  return (
    <div>
      <div className="title-container">
        <img className="titleImage" src={hm1} alt="PokéCollect Logo" />
        <h1 className="titleFont">PokéCollect</h1>
      </div>
      <div className="paragraph-container">
        <p className="textFont">
          Explore a comprehensive Pokédex, discover and purchase exciting
          Pokémon packs in our virtual store, and save your favorite Pokémon to
          your collection with PokéCollect.
        </p>
        <p className="textFont">
          Dive into the adventure, catch 'em all, and become a Pokémon Master
          with PokeCollect!
        </p>

        <p className="textFont">
          Every 24 hours, you will receive coins as a part of the daily reward
          system.
        </p>
      </div>
      <div className="button-container">
        <Link to="/about">
          <button className="navigation-button">About Us</button>
        </Link>
        <Link to="/pokedex">
          <button className="navigation-button">Discover Pokémon</button>
        </Link>
      </div>
      <div className="homeImg-container">
        <img className="homeImg" src={hm6} alt="Pokémon Illustration" />
      </div>
    </div>
  );
}

export default HomeView;
