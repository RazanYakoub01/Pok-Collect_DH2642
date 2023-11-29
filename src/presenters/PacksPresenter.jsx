import React from 'react';
import PacksView from '../views/packsView.jsx';

import { observer } from "mobx-react-lite";



export default
observer(             // needed for the presenter to update (its view) when relevant parts of the model change
function PacksPresenter(props){ 
  if(!props.model.packs){
    // No packs, button to store?
  } else {
    return <PacksView model={props.model}/>;
  }
  
}
);
