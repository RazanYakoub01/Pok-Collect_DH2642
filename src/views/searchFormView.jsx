import React from "react";
import "../search.css";
import "../searchBox.css";
import "/src/textFonts.css";
import k2 from '/src/searchImages/k2.png';
import pokeball from '/src/searchImages/pokeball.png';
import { SearchFormView} from "../utils";

const SearchFormView = (props) => {
  return (
    <div>
      <div className="icon-container">
        {props.icons.map((icon) => (
          <div
            key={icon}
            className={`type-icon ${icon} ${
              props.selectedTypes.includes(icon) ? "selected" : ""
            }`}
            onClick={() => props.onIconClick(icon)}
          ></div>
        ))}
      </div>
      {props.renderSelectedTypes()}
      <div>
        <h1 className="titleFont">
          <img src={pokeball} width="50" height="50" alt="Pokeball" />
          Pokédex
        </h1>
      </div>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search For Pokemon"
          value={props.text || ""}
          onChange={props.inputACB}
        />
        <img className='keyboardImage' src={k2} alt="Keyboard" />
      </div>
    </div>
  );
};

export default SearchFormView;
