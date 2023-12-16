import React from 'react';
import PacksView from '../views/packsView.jsx';
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';

export default observer(function PacksPresenter(props) {

  const navigate = useNavigate();

  const handleOpenPack = (pack) => {
    props.model.openPack(pack.id);
    navigate('/openCards');
  };


  if (!props.model.packs || props.model.packs.length === 0) {
    return <h2>No packs available. Go to the store to purchase.</h2>;
  } else {
    return <PacksView packs={props.model.packs} onOpenPack={handleOpenPack} />;
  }
});

