import { observer } from "mobx-react-lite";

const navbarModel = {

  getNavbarItems(isLoggedIn, handleSignOut) {
    if (isLoggedIn) {
      return [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Pokédex', path: '/pokedex' },
        { name: 'Store', path: '/store' },
        { name: 'Cart', path: '/cart' },
        { name: 'Packs', path: '/packs' },
        { name: 'Collection', path: '/collection' },
        { name: 'Sign Out', action: handleSignOut },
      ];
    } else {
      return [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Pokédex', path: '/pokedex' },
        { name: 'Login', path: '/login' },
      ];
    }
}
}

export default observer(navbarModel);
