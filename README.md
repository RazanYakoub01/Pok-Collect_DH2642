# PokeCollect

A web application created for Pokémon fans to work as a pokédex where you can search for pokémon and get useful information!
The application also works as a Pokémon pack opening simulator where you can save your favorite Pokémon to your collection.

# About PokeCollect

This is a project in the course DH2642 Interaction Programming and the Dynamic Web by 4 students at KTH. The aim of this project was to create a web application that works as a pokédex where you can search for pokémon and get useful information. The application also works as a Pokémon pack opening simulator where you can save and store your favorite Pokémon to your peronal collection.

This application works through the use of PokéAPI and with the use of this API you can search for different Pokémon to get details. If you open packs in our virtual store with our in game currency you can access the Pokémon you collect whenever you want since our app allows you to store them in a personal collection!

## What we have done and still plan to do

Done: 

- Login using google
- Protected routes (can only acces all routes when logged in)
- Navigation bar with routes
- Setup the basic framework
- Created initial layout of our app
- Able to show show data from API calls
- Filter pokédex by type

Still plan to do: 

- OpenPacks view/presenter for pack opening
- Search using PokéAPI
- Add packs to cart where you can change quantity etc and make a purchase
- Add Pokémon to personal collection 
- Search for Pokémon
- In game currrency
- CSS

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

### 5. Run the application:

```
npm run start
open http://localhost:3000
```

### 6. Deployment:

This application uses Vercel as a cloud platform.

This application is running on : [PokeCollect](https://pokecollect-pied.vercel.app/ )

## File Structure

### **/src**

- pokeSource.js: Functions to fetch data from PokéAPI

- promiseNoData.js: promises & data handler

- resolvePromise.js: promise handler

- apiConfig.js: Config file for PokéAPI

- firebaseConfig.js: Config file for firestore database

- storeData.js: Data used in the virtual store

- index.js: Where everything renders to the webpage

- ReactRoot.jsx: Routes

- css files for the views, gifs and images

- protectedRoutes.jsx: Used to make some routes only accesable when logged in


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

- OpenPacksPresenter.jsx: Used to render openPacksView and manages the presentation logic for opening packs

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

- openPacksView.jsx: Displays the Pokémon you get from opening a pack

### **/src/models**

- pokeModel.js: Our model for this application contains functions to set and save data etc

- NavbarModel.js: Our model for the navigation bar

## Tools

**Client:** React, Git, NPM,

**Server:** Node, Vercel, Firebase

## API

PokéAPI: https://pokeapi.co

## Authors

- [@Alexander Barhado](https://www.github.com/18alba1)
- [@Elias Amani](https://github.com/Eliasamani)
- [@Razan Yakoub](https://github.com/RazanYakoub01)
- [@Seema Bashir](https://github.com/Seemamian)
