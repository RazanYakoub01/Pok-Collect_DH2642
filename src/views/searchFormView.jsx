import React, { useState } from "react";
import "../search.css";

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

  return (
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
  );
};

export default SearchFormView;
