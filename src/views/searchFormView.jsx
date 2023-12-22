import React from "react";
import "/src/css/search.css";
import "/src/css/searchBox.css"
import "/src/css/textFonts.css";
import k2 from '/src/assets/searchImages/k2.png';
import pokeball from '/src/assets/searchImages/pokeball.png';

const SearchFormView = (props) => {
  
  function inputACB(evt){
    props.searchInput(evt.target.value);
  }

  const renderSelectedTypes = () => {
    if (props.selectedTypes.length === 0) {
      return null;
    }

    return (
      <div className="selected-types">
        <h2>Filter:</h2>
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
      {renderSelectedTypes()}
      <div>
        <h1 className="titleFont">
        <img src={pokeball} width="50" height="50" />
          Pokédex
        </h1>
      </div>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search For Pokemon"
          value={props.text || ""}
          onChange={inputACB}
        />
        <img className='keyboardImage' src={k2}/>
      </div>
    </div>
  );
};

export default SearchFormView;
