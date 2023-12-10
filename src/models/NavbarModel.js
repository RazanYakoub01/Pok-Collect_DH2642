import about from '/src/navbarImages/about.png';
import cart1 from '/src/navbarImages/cart1.png';
import collection from '/src/navbarImages/collection.png';
import home from '/src/navbarImages/home.png';
import packs from '/src/navbarImages/packs.png';
import search1 from '/src/navbarImages/search1.png';
import shop from '/src/navbarImages/shop.png';
import login from '/src/navbarImages/login.png';

export default function getNavbarItems() {
  return [
    { name: "Home", path: "/", image: home },
    { name: "About Us", path: "/about", image: about },
    { name: "Pokédex", path: "/pokedex", image: search1 },
    { name: "Store", path: "/store", image: shop },
    { name: "Cart", path: "/cart", image: cart1 },
    { name: "Packs", path: "/packs", image: packs },
    { name: "Collection", path: "/collection", image: collection },
    { name: "Login or sign out", path: "/login", image: login },
  ];
}
