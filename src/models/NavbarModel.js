import { observer } from "mobx-react-lite";
import about from '/src/navbarImages/about.png';
import cart1 from '/src/navbarImages/cart1.png';
import collection from '/src/navbarImages/collection.png';
import home from '/src/navbarImages/home.png';
import packs from '/src/navbarImages/packs.png';
import search1 from '/src/navbarImages/search1.png';
import shop from '/src/navbarImages/shop.png';
import login from '/src/navbarImages/login.png';

const navbarModel = {

  getNavbarItems(isLoggedIn, handleSignOut) {
    if (isLoggedIn) {
      return [
        { name: "Home", path: "/", image: home },
        { name: "About Us", path: "/about", image: about },
        { name: "Pokédex", path: "/pokedex", image: search1 },
        { name: "Store", path: "/store", image: shop },
        { name: "Cart", path: "/cart", image: cart1 },
        { name: "Packs", path: "/packs", image: packs },
        { name: "Collection", path: "/collection", image: collection },    
        { name: 'Sign Out', action: handleSignOut },
      ];
    } else {
      return [
        { name: "Home", path: "/", image: home },
        { name: "About Us", path: "/about", image: about },
        { name: "Pokédex", path: "/pokedex", image: search1 },
        { name: "Login", path: "/login", image: login },
      ];
    }
}
}

export default observer(navbarModel);
