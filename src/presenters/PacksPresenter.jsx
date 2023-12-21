// packsPresenter.jsx
import React, { useState } from 'react';
import PacksView from '../views/packsView.jsx';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

export default observer(function PacksPresenter(props) {
  const navigator = useNavigate();
  const [selectedPack, setSelectedPack] = useState(null);

  const handleOpenPack = (pack) => {
    props.model.setPackQuantity(pack.id, -1);
    props.model.openPack(pack.id);
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

  
  const PacksViewWithHandlers = () => (
    <PacksView
      packs={props.model.packs}
      onOpenPack={handleOpenPack}
      handleAddToCart={handleAddToCart}
      handleNavigateToCart={handleNavigateToCart}
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
