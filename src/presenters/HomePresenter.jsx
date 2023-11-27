// src/presenters/HomePresenter.jsx
import React from 'react';
import { observer } from "mobx-react-lite";
import HomeView from '../views/homeView.jsx';


export default
observer(             // needed for the presenter to update (its view) when relevant parts of the model change
function HomePresenter(props){ 

  return <HomeView /* data={homeData}*/  />;

}
);
