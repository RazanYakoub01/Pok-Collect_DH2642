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
          <li key={index} onClick={() => props.onMenuItemClick()}>
            {item.action ? (
              <a className="navTextWithImage">
                <img src={item.image} className="navbar-icon" alt={item.name} />
                {item.name}
              </a>
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
          <li onClick={() => props.onMenuItemClick(loginItem.action)}>
            {loginItem.action ? (
              <a className='navTextWithImage'>
                <img src={loginItem.image} className="navbar-icon" alt={loginItem.name} />
                {loginItem.name}
              </a>
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
          onClick={() => props.onMenuItemClick(loginItem.action)}
        >
          {loginItem.action ? (
            <a className="navTextWithImage">
              <img
                src={loginItem.image}
                className="navbar-icon"
                alt={loginItem.name}
              />
              {loginItem.name}
            </a>
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
