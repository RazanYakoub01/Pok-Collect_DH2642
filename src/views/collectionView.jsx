import React from 'react';
import "../search.css";
import "../collection.css";
import "/src/textFonts.css";
import { useNavigate } from 'react-router-dom';
import backpack from '/src/collectionImages/backpack.png';

const CollectionView = (props) => {
  const { user, collection } = props;
  const username = user || 'Guest';

  return (
    <div className="collection-view">
      <div className="collection-header">
        <img src={backpack} />
        <h1 className="titleFont collection">{username}'s Pokémon Collection</h1>
      </div>
      <div>{`Collected ${collection.length} Pokémon`}</div>
      <div className="pokemon-cards">
        {collection.map((pokemon) => (
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