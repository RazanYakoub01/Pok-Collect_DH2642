import React, { useState } from "react";
import { Link } from "react-router-dom";
import "/src/navbar.css";
import Hamburger from "../components/Hamburger";

export default function NavbarView(props) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const loginItem = props.items.find(
    (item) =>
      item.name.toLowerCase() === "sign out" ||
      item.name.toLowerCase() === "login"
  );
  const otherItems = props.items.filter(
    (item) =>
      item.name.toLowerCase() !== "sign out" &&
      item.name.toLowerCase() !== "login"
  );

  return (
    <nav>
      {/* Hamburger menu */}
      <div className="hamburger" onClick={toggleHamburger}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
        </div>

      {/* Other navbar items */}
      <ul className={`navbar-items ${hamburgerOpen ? "open" : ""}`}>
        {otherItems.map((item, index) => (
          <li key={index}>
            {item.action ? (
              <span className="navTextWithImage" onClick={item.action}>
                <img src={item.image} className="navbar-icon" alt={item.name} />
                {item.name}
              </span>
            ) : (
              <Link to={item.path}>
                <img src={item.image} className="navbar-icon" alt={item.name} />
                {item.name}
              </Link>
            )}
          </li>
        ))}

        {/* Add login/logout button to the hamburger menu */}
        {hamburgerOpen && loginItem && (
          <li>
            {loginItem.action ? (
              <span className='navTextWithImage' onClick={loginItem.action}>
                <img src={loginItem.image} className="navbar-icon" alt={loginItem.name} />
                {loginItem.name}
              </span>
            ) : (
              <Link to={loginItem.path}>
                <img src={loginItem.image} className="navbar-icon" alt={loginItem.name} />
                {loginItem.name}
              </Link>
            )}
          </li>
        )}
      </ul>

      {/* Login/Sign out link */}
      {loginItem && (
        <div
          className="login"
          onClick={loginItem.action ? loginItem.action : undefined}
        >
          {loginItem.action ? (
            <span className="navTextWithImage">
              <img
                src={loginItem.image}
                className="navbar-icon"
                alt={loginItem.name}
              />
              {loginItem.name}
            </span>
          ) : (
            <Link to={loginItem.path}>
              <img
                src={loginItem.image}
                className="navbar-icon"
                alt={loginItem.name}
              />
              {loginItem.name}
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
