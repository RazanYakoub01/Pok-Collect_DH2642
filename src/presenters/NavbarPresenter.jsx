// NavbarPresenter.jsx
import React from 'react';
import NavbarView from '../views/navbarView';
import getNavbarItems from '../models/NavbarModel';

export default function NavbarPresenter() {
  const items = getNavbarItems();
  // Any additional logic can go here

  return <NavbarView items={items} />;
}