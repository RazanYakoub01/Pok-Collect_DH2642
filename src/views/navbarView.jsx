import React from "react";
import { Link } from "react-router-dom";
import "/src/css/navbar.css";

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

  const renderNavItem = (item) => {
    const navTextWithImage = (
      <a className="navTextWithImage">
        <img src={item.image} className="navbar-icon" alt={item.name} />
        {item.name}
      </a>
    );

    const navLink = (
      <Link to={item.path}>
        <img src={item.image} className="navbar-icon" alt={item.name} />
        {item.name}
      </Link>
    );

    return item.action ? navTextWithImage : navLink;
  };

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
          <li
            key={index}
            onClick={props.hamburgerOpen ? props.toggleHamburger : undefined}
          >
            {renderNavItem(item)}
          </li>
        ))}

        {/* Add login/logout button to the hamburger menu */}
        {props.hamburgerOpen && loginItem && (
          <li
            onClick={() => {
              if (props.hamburgerOpen) {
                props.toggleHamburger();
              }
              if (loginItem.action) {
                loginItem.action();
              }
            }}
          >
            {renderNavItem(loginItem)}
          </li>
        )}
      </ul>

      {/* Login/Sign out link */}
      {loginItem && !props.hamburgerOpen && (
        <div
          className="login"
          onClick={() => {
            if (props.hamburgerOpen) {
              props.toggleHamburger();
            }
            if (loginItem.action) {
              loginItem.action();
            }
          }}
        >
          {renderNavItem(loginItem)}
        </div>
      )}
    </nav>
  );
}
