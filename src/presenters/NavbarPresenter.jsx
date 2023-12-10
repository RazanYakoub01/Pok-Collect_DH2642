import React from 'react';
import NavbarView from '/src/views/NavbarView.jsx';
import { observer } from 'mobx-react-lite';
import { useAuthentication } from '/src/services/authService';

export default observer(function NavbarPresenter(props) {

  const items = props.model.getNavbarItems(useAuthentication().isLoggedIn, useAuthentication().logOut);

  return <NavbarView items={items} />;
});

