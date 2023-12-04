import React, { useState } from "react";
import "../search.css";
import "../searchButton.css"

const SearchFormView = (props) => {
  const icons = [
    "fighting",
    "psychic",
    "poison",
    "dragon",
    "ghost",
    "dark",
    "ground",
    "fire",
    "fairy",
    "water",
    "flying",
    "normal",
    "rock",
    "electric",
    "bug",
    "grass",
    "ice",
    "steel",
  ];

  function inputACB(evt){
    props.searchInput(evt.target.value);
  }

  function searchButtonACB(){
    props.clickSearch();
  }

  const renderSelectedTypes = () => {
    if (props.selectedTypes.length === 0) {
      return null;
    }

    return (
      <div className="selected-types">
        <h1>Filter:</h1>
        {props.selectedTypes.map((type) => (
          <div key={type} className="selected-type">
            <div className={`type-icon ${type}`} onClick={() => props.onSelectedIconClick(type)}></div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="icon-container">
        {icons.map((icon) => (
          <div
            key={icon}
            className={`type-icon ${icon} ${
              props.selectedTypes.includes(icon) ? "selected" : ""
            }`}
            onClick={() => props.onIconClick(icon)}
          ></div>
        ))}
      </div>
      {renderSelectedTypes()}
      <div className="searchButton">
        <input
          type="text"
          placeholder="Search Pokemon"
          value={props.text || ""}
          onChange={inputACB}
        />
        <button onClick={searchButtonACB}>Search!</button>
      </div>
    </div>
  );
};

export default SearchFormView;
