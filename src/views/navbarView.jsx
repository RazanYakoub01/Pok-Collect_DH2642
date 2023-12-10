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
             <span className='navTextWithImage' onClick={item.action}>
             <img src={item.image} className="navbar-icon" alt={item.name} />
             {item.name}
           </span>
            ) : (
              <Link to={item.path}>           
              <img src={item.image} className="navbar-icon" />
              {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
