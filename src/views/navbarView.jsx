import React from 'react';
import { Link } from 'react-router-dom';
import "/src/navbar.css";

export default function NavbarView(props) {
  return (
    <nav>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>
            {item.action ? (
              <button onClick={item.action}>{item.name}</button>
            ) : (
              <Link to={item.path}>{item.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
