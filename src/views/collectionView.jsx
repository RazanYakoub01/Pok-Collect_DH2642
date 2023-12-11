import React from 'react';
import "../search.css";
import "../collection.css";
import { useNavigate } from 'react-router-dom';
import test1C from '/src/collectionImages/test1C.jpg';
import test2C from '/src/collectionImages/test2C.jpg';
import backpack from '/src/collectionImages/backpack.png';

const CollectionView = (props) => {
  const hardCodedPokemonData = [
    {
      id: 1,
      name: 'bulbasaur',
      imageUrl: test1C,
      collectedDate: '2023-12-11',
    },
    {
      id: 4,
      name: 'charmander',
      imageUrl: test2C,
      collectedDate: '2023-12-12',
    },
  ];

  const totalPokemonCount = 1017; // Total number of Pokemon
  const username = props.user || 'Guest';

  return (
    <div className="collection-view">
      <div className="collection-header">
        <img src={backpack}/>
        <h1 className="collection-title">{username}'s Pokémon Collection</h1>
      </div>
      <div>{`Collected ${hardCodedPokemonData.length} Pokémon out of ${totalPokemonCount}`}</div>
      <div className="pokemon-cards">
        {hardCodedPokemonData.map((pokemon) => (
          <div key={pokemon.id} className="pokemon-card">
            <img src={pokemon.imageUrl} alt={pokemon.name} />
            <p className="collected-info">{`Collected ${pokemon.collectedDate}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionView;
