// src/presenters/HomePresenter.jsx
import React from "react";
import SearchFormView from "../views/searchFormView.jsx";
import SearchResultsView from "../views/searchResultsView.jsx";
import { observer } from "mobx-react-lite";

export default
observer(             // needed for the presenter to update (its view) when relevant parts of the model change
function PokedexPresenter(props){ 
  
  
  
  return (<div>
  <SearchFormView /* data={homeData} */ />
  <SearchResultsView />
  </div>);
  
}

);

