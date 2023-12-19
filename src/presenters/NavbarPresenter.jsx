import React, { useState } from "react";
import NavbarView from '../views/navbarView';
import { observer } from 'mobx-react-lite';
import { logOut } from '/src/services/authService.js'; 
import { useNavigate } from 'react-router-dom';



export default observer(function NavbarPresenter(props) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const handleMenuItemClick = (action) => {
    // Close the hamburger menu (not working right now)
    toggleHamburger();

    // If there's an additional action, execute it
    if (action) {
      action();
    }
  };

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut(navigate); 
  };

  const items = props.model.getNavbarItems(handleLogOut);

  return <NavbarView 
  items={items}
  toggleHamburger={toggleHamburger}
  hamburgerOpen={hamburgerOpen}
  onMenuItemClick={handleMenuItemClick}
   />;
});

