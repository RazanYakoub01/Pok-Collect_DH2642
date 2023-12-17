import React from 'react';
import NavbarView from '../views/navbarView';
import { observer } from 'mobx-react-lite';
import { logOut } from '/src/services/authService.js'; 
import { useNavigate } from 'react-router-dom';



export default observer(function NavbarPresenter(props) {
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut(navigate); 
  };

  const items = props.model.getNavbarItems(handleLogOut);

  return <NavbarView items={items} />;
});

