import React from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/details.css';
import attack from '../detailsImages/attack.png';
import def from '../detailsImages/def.png';
import hp from '../detailsImages/hp.png';
import speed from '../detailsImages/speed.png';
import specialAttack from '../detailsImages/specialAttack.png';
import specialDefence from '../detailsImages/specialDefence.png';
import { getEvolutionChain } from "../pokeSource";

const DetailsView = (props) => {
  const navigate = useNavigate();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleBackClick = () => {
    navigate('/pokedex');
  };
  
  const renderPokedexData = () => {
    const dataEntries = [
      { label: 'Pokédex ID', value: props.pokemonDetails.ID, image: '/src/detailsImages/id.png'},
      { label: 'Base Experience', value: `${props.pokemonDetails.BaseExperience} XP`, image: '/src/detailsImages/exp.png' },
      { label: 'Height', value: `${props.pokemonDetails.Height} m`, image: '/src/detailsImages/height.png' },
      { label: 'Weight', value: `${props.pokemonDetails.Weight} Kg`, image: '/src/detailsImages/kg.png' },
    ];
  
    return (
      <div>
        <h3>Pokédex Data</h3>
        <div className="pokedex-data-container">
          {dataEntries.map((entry, index) => (
            <div key={index} className="pokedex-data-item">
              {entry.image && <img src={entry.image} alt={entry.label} className="pokedex-data-image" />}
              <p>{`${entry.label}: ${entry.value}`}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderTypes = () => {
    return (
      <div>
        <h3>Types</h3>
        <div className="type-container">
          {props.pokemonDetails.Types.map((type, index) => (
            <span key={index} className={`type-pill type-${type.toLowerCase()}`}>
              {type}
            </span>
          ))}
        </div>
      </div>
    );
  };

  const renderAbilities = () => {
    return (
      <div>
        <h3>Abilities</h3>
        <div>
          {props.pokemonDetails.Abilities.map((ability, index) => (
            <span key={index} className="pill">
              {ability}
            </span>
          ))}
        </div>
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
          {renderPokedexData()}
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
