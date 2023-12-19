import React from "react";
import { Link } from "react-router-dom";
import "/src/navbar.css";

export default function NavbarView(props) {


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
      <div className="hamburger" onClick={props.toggleHamburger}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
        </div>

      {/* Other navbar items */}
      <ul className={`navbar-items ${props.hamburgerOpen ? "open" : ""}`}>
        {otherItems.map((item, index) => (
          <li key={index}>
            {item.action ? (
              <span className="navTextWithImage" onClick={() => props.onMenuItemClick(item.action)}>
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
        {props.hamburgerOpen && loginItem && (
          <li>
            {loginItem.action ? (
              <span className='navTextWithImage' onClick={() => props.onMenuItemClick(item.action)}>
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
