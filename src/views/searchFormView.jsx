import React, { useState } from "react";
import "../search.css";

const SearchFormView = (props) => {
  console.log(props)
  
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

  const renderSelectedTypes = () => {
    if (props.selectedTypes.length === 0) {
      return null;
    }

    return (
      <div className="selected-types">
        <h1>Selected types:</h1>
        {props.selectedTypes.map((type) => (
          <div key={type} className="selected-type">
            <div className={`type-icon ${type}`}></div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div>
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
    </div>
  );
};

export default SearchFormView;
