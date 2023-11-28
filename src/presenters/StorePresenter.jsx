import React from 'react';
import StoreView from '../views/storeView';
import { observer } from "mobx-react-lite";
import { packs } from '../storeData';


export default
observer(            
function StorePresenter(props){ 
  return <StoreView packs={packs} />;
});

