// NavbarPresenter.jsx
import React from 'react';
import NavbarView from '../views/navbarView';
import getNavbarItems from '../models/NavbarModel';
import { observer } from "mobx-react-lite";


export default observer(    
  function NavbarPresenter() {
  const items = getNavbarItems();
  // Any additional logic can go here

  return <NavbarView items={items} />;
});