# PokeCollect

A web application created for Pokémon fans to work as a pokédex where you can search for Pokémon and get useful information!
The application also works as a Pokémon pack opening simulator where you can collect your favorite Pokémon and save them to your personal collection.

# About PokeCollect

This is a project in the course DH2642 Interaction Programming and the Dynamic Web by 4 students at KTH. The aim of this project was to create a web application that works as a pokédex where you can search for Pokémon and get useful information. The application also works as a Pokémon pack opening simulator where you can save and store your favorite Pokémon to your personal collection.

This application works through the use of PokéAPI and with the use of this API you can search for different Pokémon to get details. If you open packs in our virtual store with our in game currency you can access the Pokémon you collect whenever you want since our app allows you to store them in a personal collection!

## Deployment:

This application uses Vercel as a cloud platform.

This application is running on : [PokeCollect](https://pokecollect-pied.vercel.app/ )

## What we have done and still plan to do

Done: 

- About us page with information about the contributors
- Login using google
- Per-user persistence
- Navigation bar with routes
- Protected routes (can only acces all routes when logged in)
- Search for Pokémon in pokédex
- Filter pokédex by type
- Filter pokédex by Pokémon generation
- Click on a pokémon to get more details
- Add packs to cart where you can change quantity or remove items
- Third party pop up to indicate when item has been added to cart and pack information in store
- In game currrency so you can make purchase
- Timer for when users balance will increase
- A packs page where the user can see all their purchased packs and open them
- Open packs and collect pokemon with third party flip-effect and pop up information
- Add Pokémon to personal collection
- Se collection progress and filter collection by Pokémon generation
- See collected pokemon in pokédex if you are logged in by using a third party component 
- CSS
- Responsive application

Still plan to do: 

- Finished for submission 23-12-22


User evaluation 1 (2023-12-08):

- Users said that our text style was basic so we added a pokemon style to our text to make it look better

- Users said that it would be better to give an indication when the ”add to cart” button was pressed in the store. We fixed this by showing the number of items in the cart, so when you press add to cart you will se the quantity increase

- Users found a bug where if you pressed sign out on a protected route you would still be at that page and will be able to for example add items to cart. We fixed this by redirecting the user to the home page after pressing sign out. 

- Users felt like the website did not work great on mobile. We improved this by using css media queries. 

- Users found a bug where they would get a 404 error if they refreshed a page. We solved this by using hash router. 

User evaluation 2 (2023-12-19):

- Users felt like it would look better with icons for GitHub and linkedIn in aboutUsView, removed the links and used icons instead.

- Users felt like they should be able to see which Pokémon they have collected in our pokedex. We solved this by using
  a thrid party star rating component to indicate to the user if they have a Pokémon or not in their collection. 

- Users wonderd if they could still purchase a pack if they have collected all the Pokémon from it. We solved this by
 disabeling the add to cart button for the packs when all pokemon have been collected from a specifik pack.

- Users felt like there needed to be more information about how the coin system works. We solved this by adding infromation to our home page and we also added a countdown in our store to let the user know when they will get more coins. 

- Users felt like there should be a better indication of their collection progress. We solved this by creating filters so that the
users can see how many pokemon they have left to collect from a specifik generation. 

- Users flet like it could be good to have infromation about the packs for people who are not Pokémon fans. We solved this by adding a popup button that displays text information about each pack. 

- Some users still thought it was unclear if a pack was added to cart. We solved this by adding a third party pop up in addition to our previous solution.

## Run The App Locally

### 1. Download or Clone this repository:

Start by cloning the repository

```
git clone https://github.com/RazanYakoub01/PokeCollect_DH2642
```

### 2. Install node.js if you do not have it

[Follow the link](https://nodejs.org/en/)

### 3. Go to the project directory

```bash
  cd my-project
```

### 4. Install dependencies:

Navigate to the directory where you saved the cloned repo and write he following command

```
npm install     # Installs dependencies
```
```
npm install --save react-card-flip   #react-card-flip
```
```
npm install reactjs-popup --save    #reactjs-popup
```
```
npm install @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/fontawesome-svg-core  #fontawesome icons
```
```
npm install react-rating --save    #star rating
```

### 5. Run the application:

```
npm run start
open http://localhost:3000
```

## File Structure

### **/src**

- pokeSource.js: Functions to fetch data from PokéAPI

- resolvePromise.js: promise handler

- apiConfig.js: Config file for PokéAPI

- firebaseConfig.js: Config file for firestore database

- firebaseModel.js: Our model for persistence

- storeData.js: Data used in the virtual store

- index.js: Where everything renders to the webpage

- ReactRoot.jsx: Routes

- css files for the views, gifs and images

- protectedRoutes.jsx: Used to make some routes only accesable when logged in

- utils.js: used to get Pokémon generation info from the packs


### **/src/presenters**

- AboutUs.jsx: Used to render aboutUsView

- CollectionPresenter.jsx: Used to render collectionView and manages the presentation logic for the user's collection

- HomePresenter.jsx: Used to render homeView

- LoginPresenter.jsx: Used to render loginView and manages the presentation logic for user authentication and login

- NavbarPresenter.jsx: Used to render navbarView and manages the presentation logic for the navigation bar

- PacksPresenter.jsx: Used to render packsView and manages the presentation logic for purchased packs

- PokedexPresenter.jsx: Used to render searchFormView and searchResultsVie. Manages the presentation logic for the Pokedex, which includes handling user input for searching, fetching data from API etc

- ShoppingCartPresenter.jsx: Used to render shoppingCartView and manages the presentation logic for the shopping cart, handling the display of items, quantities etc

- StorePresenter.jsx: Used to render storeView and manages the presentation logic for the store

- OpenCardsPresenter.jsx: Used to render openPacksView and manages the presentation logic for opening packs

- DetailsPresenter.jsx: Used to render detailsview and manages the presentation logic for clicking on a Pokémon

### **/src/views**

- aboutUsView.jsx: Information about the creators

- collectionView.jsx: Displays personal collection of collected Pokémon

- detailsView.jsx: Displays additional information about a Pokémon that the user clicks on

- homeView.jsx: Landing page, short description of the application

- loginView.jsx: Login page where the user can log in with google

- navbarView.jsx: The navigationbar at the top of the page where the user can change routes

- packsView.jsx: Displays the packs that the user has purchased and that they can open

- searchFormView.jsx: Search for Pokémon

- searchReultsView.jsx: The view to show the result of a search for a Pokémon

- shoppingCartView.jsx: Displays the shopping cart where you can change quantites or remove items

- storeView.jsx: Displays the store with the different packs you can buy

- openCardsView.jsx: Displays the Pokémon you get from opening a pack

- PopupView.jsx: Displays pop up when add to cart is pressed in store

- packInformationView.jsx: Displays pop up with text infromation about the different packs in the store

- openCardsInformationView.jsx: Displays pop up with text infromation about the collected Pkémon

### **/src/models**

- pokeModel.js: Our model for this application contains functions to set and save data etc

### **/src/services**

- authService.js: Our sign in and sign out functionality

## Tools

**Client:** React, Git, NPM,

**Server:** Node, Vercel, Firebase

## API

PokéAPI: https://pokeapi.co


## Team Responsibilities

### Seema
- **Views and Presenters:** Home, About Us, Store, PopupView, Collection

### Razan
- **Views and Presenters:** Cart, Packs, Navbar, persistence, Collection

### Alexander
- **Views and Presenter:** Login, Details, Navbar, OpenCrads, PackInformation, OpenCardsInformation

### Elias
- **Views and Presenter:** SearchResults, SearchForm, Pokedex, Navbar, API

## Authors

- [@Alexander Barhado](https://www.github.com/18alba1)
- [@Elias Amani](https://github.com/Eliasamani)
- [@Razan Yakoub](https://github.com/RazanYakoub01)
- [@Seema Bashir](https://github.com/Seemamian)
