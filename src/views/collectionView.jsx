import React from 'react';
import "../search.css";
import "../collection.css";
import "/src/textFonts.css";
import { useNavigate } from 'react-router-dom';
import backpack from '/src/collectionImages/backpack.png';

// add collected date? 

const CollectionView = (props) => {
  const totalPokemonCount = 1017;
  const username = props.user;
  const userCollection = props.collection || [];

  return (
    <div className="collection-view">
      <div className="collection-header">
        <img src={backpack} />
        <h1 className="titleFont collection">{username}'s Pokémon Collection</h1>
      </div>
      <div>{`Collected ${userCollection.length} Pokémon out of ${totalPokemonCount}`}</div>
      <div className="pokemon-cards">
        {userCollection.map((pokemon) => (
          <div key={pokemon.ID} className="pokemon-card">
            <img src={pokemon.imageUrl} alt={pokemon.Name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionView;