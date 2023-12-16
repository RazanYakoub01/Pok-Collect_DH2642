import React from 'react';
import PacksView from '../views/packsView.jsx';
import { observer } from "mobx-react-lite";



export default observer(function PacksPresenter(props) {
  if (!props.model.packs || props.model.packs.length === 0) {
    return <h2>No packs available. Go to the store to purchase.</h2>;
  } else {
    return <PacksView packs={props.model.packs} />;
  }
});

