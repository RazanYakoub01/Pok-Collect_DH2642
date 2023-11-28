import React from 'react';
import { Link } from 'react-router-dom';
import "/src/navbar.css";
 

const NavbarView = ({ items }) => {
  return (
    <nav>
      {items.map((item, index) => (
        <Link key={index} to={item.path}>{item.name}</Link>
      ))}
    </nav>
  );
};

export default NavbarView;