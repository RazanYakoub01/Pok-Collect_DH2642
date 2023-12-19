// packsPresenter.jsx
import React, { useState } from 'react';
import PacksView from '../views/packsView.jsx';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

export default observer(function PacksPresenter(props) {
  const navigator = useNavigate();
  const [selectedPack, setSelectedPack] = useState(null);

  const handleOpenPack = (pack) => {
    props.model.openPack(pack.id);
    props.model.setPackQuantity(pack.id, -1);
    navigator('/openCards');
  };

  const handleAddToCart = (pack) => {
    props.model.addToCartACB(pack);
    setSelectedPack(pack);
  };

  const handleNavigateToCart = () => {
    navigator('/cart');
    setSelectedPack(null);
  };

  const getGenerationClass = (pack) => {
  
  switch (pack.id) {
    case 1:
      return 'gen1';
    case 2:
      return 'gen2';
    case 3:
      return 'gen3';
    case 4:
      return 'gen4';
    case 5:
      return 'gen5';
    case 6:
      return 'gen6';
    case 7:
      return 'gen7';
    case 8:
      return 'gen8';
    case 9:
      return 'gen9'
    case 10:
      return 'legendary';
    default:
      return ''; 
    
  }

};

  const PacksViewWithHandlers = () => (
    <PacksView
      packs={props.model.packs}
      onOpenPack={handleOpenPack}
      handleAddToCart={handleAddToCart}
      handleNavigateToCart={handleNavigateToCart}
      getGenerationClass={getGenerationClass}
      selectedPack={selectedPack}
      setSelectedPack={setSelectedPack}
  
    />
  );

  if (!props.model.packs || props.model.packs.length === 0) {
    return <h2>No packs available. Go to the store to purchase.</h2>;
  } else {
    return <PacksViewWithHandlers />;
  }
});
