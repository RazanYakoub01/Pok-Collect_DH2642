import React, { useState } from "react";
import "../search.css";

const SearchFormView = () => {
  const [selectedIcons, setSelectedIcons] = useState([]);

  // Selects up to 2 icons, if a third is pressed, it removes the an icon based on FIFO. If a selected icon is pressed, it is unselected.
  const handleIconClick = (icon) => {
    if (selectedIcons.includes(icon)) {
      setSelectedIcons((prevIcons) =>
        prevIcons.filter((prevIcon) => prevIcon !== icon)
      );
    } else if (selectedIcons.length < 2) {
      setSelectedIcons((prevIcons) => [...prevIcons, icon]);
    } else {
      setSelectedIcons((prevIcons) => [prevIcons[1], icon]);
    }
  };

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
            selectedIcons.includes(icon) ? "selected" : ""
          }`}
          onClick={() => handleIconClick(icon)}
        ></div>
      ))}
    </div>
  );
};

export default SearchFormView;
