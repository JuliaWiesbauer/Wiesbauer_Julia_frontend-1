import Navigo from 'navigo';

import './styles/main.scss';
import pokemonData from './pokemon-data';

import pokemonTemplate from './partials/pages/pokemon.hbs';
import aboutTemplate from './partials/pages/about.hbs';
import fireTemplate from './partials/pages/fire.hbs';
import waterTemplate from './partials/pages/water.hbs';
import grassTemplate from './partials/pages/grass.hbs';

// Setup Router
const config = {
  root: null,
  useHash: true,
  hash: '#',
};
const router = new Navigo(config.root, config.useHash, config.hash);

// Our main element to replace content
const appEl = document.querySelector('#app');

router.on({
  about: () => { appEl.innerHTML = aboutTemplate(); },
  ':type/:name': (params) => {
    // going through all pokemons in `pokemon-data.js` and getting the right pokemon with its name
    const pokemon = pokemonData[params.type].filter((p) => p.name === params.name)[0];

    // replacing the content in our app with the template
    appEl.innerHTML = pokemonTemplate({
      name: pokemon.name, type: pokemon.type, id: pokemon.id, image: pokemon.image
    });
  },
  // TODO: Generate Routes & Template for those routes
  fire: () => {
    appEl.innerHTML = fireTemplate({ route: 'fire', pokemonList: pokemonData['fire'] });
  },
  water: () => {
    appEl.innerHTML = waterTemplate({ route: 'water', pokemonList: pokemonData['water'] });
  },
  grass: () => {
    appEl.innerHTML = grassTemplate({ route: 'grass', pokemonList: pokemonData['grass'] });
  },
}).resolve();
