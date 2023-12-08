import React from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/details.css';
import attack from '../detailsImages/attack.png';
import def from '../detailsImages/def.png';
import hp from '../detailsImages/hp.png';
import speed from '../detailsImages/speed.png';
import specialAttack from '../detailsImages/specialAttack.png';
import specialDefence from '../detailsImages/specialDefence.png';

const DetailsView = (props) => {
  const navigate = useNavigate();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleBackClick = () => {
    navigate('/pokedex');
  };

  const renderAbilities = () => {
    return (
      <div>
        <h3>Abilities</h3>
        <ul>
          {props.pokemonDetails.Abilities.map((ability, index) => (
            <p key={index}>{ability}</p>
          ))}
        </ul>
      </div>
    );
  };

  const renderTypes = () => {
    return (
      <div>
        <h3>Types</h3>
        <ul>
          {props.pokemonDetails.Types.map((type, index) => (
            <p key={index}>{type}</p>
          ))}
        </ul>
      </div>
    );
  };

  const statImages = {
    attack: attack,
    defense: def,
    hp: hp,
    'special-attack': specialAttack,
    'special-defense': specialDefence,
    speed: speed,
  };
  
  const renderStats = () => {
    return (
      <div>
        <h3>Stats</h3>
        {Object.entries(props.pokemonDetails.Stats).map(([stat, value], index) => (
          <div key={index} className="stat">
            <div className="stat-info">
              <img src={statImages[stat]} alt={stat} className="stat-image" />
              <p className="stat-name">{capitalizeFirstLetter(stat)}</p>
            </div>
            <div className="stat-bar">
              <div className={`stat${index + 1}`} style={{ width: `${Math.min(value, 100)}%` }}>
                <span className={`stat-count${index + 1}`}>{value}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="details-container">
      <h1>{capitalizeFirstLetter(props.pokemonDetails.Name)}</h1>
      <div className="info-container">
        <div>
          <img className="pokemon-image" src={props.pokemonDetails.ImageURL}/>
        </div>
        <div className="info-container">
          <div>
            <h3>Pokédex Data</h3>
            <p>Pokédex ID: {props.pokemonDetails.ID}</p>
            <p>Base Experience: {props.pokemonDetails.BaseExperience}</p>
            <p>Height: {props.pokemonDetails.Height} m</p>
            <p>Weight: {props.pokemonDetails.Weight} Kg</p>
          </div>
          {renderTypes()}
          {renderAbilities()}
        </div>
      </div>
      <div className='stats'>
        {renderStats()}
      </div>
      <div>
        <button className='backButton' onClick={handleBackClick}>Back to Pokédex</button>
      </div>
    </div>
  );
};

export default DetailsView;
