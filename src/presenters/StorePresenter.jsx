// src/presenters/HomePresenter.jsx
import React from 'react';
import StoreView from '../views/storeView';
import { observer } from "mobx-react-lite";



export default
observer(             // needed for the presenter to update (its view) when relevant parts of the model change
function StorePresenter(props){ 
  return <StoreView /* data={homeData} */ />;
});

