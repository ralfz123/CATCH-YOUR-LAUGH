import { clickLikeBtn } from './modules/like.js';
import { clickReloadBtn } from './modules/reloadPage.js';
import { clickDisapearBtn, deleteFavItem, checkFavourites } from './modules/detailPage.js';


getData();

// Fetching data and parses to JSON
async function fetchData(url) {
  const dataResponse = await fetch(url);
  console.log('🌐 Fetching data...'); // Feedback to user while fetching data
  const jsonData = await dataResponse.json();
  return jsonData;
}

// Starting application - getting data from endpoints and invoke functions with that data
export async function getData() {
  // API - Cats
  const endpointCats = 'https://api.thecatapi.com';
  const pathCats = 'v1/images/search';
  const urlCats = `${endpointCats}/${pathCats}`;

  // API - Jokes
  const endpointJokes = 'https://official-joke-api.appspot.com/';
  const pathJokes = 'jokes/random';
  const urlJokes = `${endpointJokes}/${pathJokes}`;

  const dataCatImages = await fetchData(urlCats);
  const dataJokes = await fetchData(urlJokes);

  renderCatImages(dataCatImages);
  renderJokes(dataJokes);
}

// Must be in modules?
// Renders the data (cat images) in the HTML
function renderCatImages(data) {
  let image = document.getElementById('image-cat');
  let id = document.getElementById('cat-id');
  let url = document.getElementById('cat-url');

  image.src = data[0].url;
  id.innerHTML = 'id: ' + data[0].id;
  url.innerHTML = 'URL: ' + data[0].url;
  console.log('😺 Cat data rendered');
}

// Must be in modules?
// Renders the data (jokes) in the HTML
function renderJokes(data) {
  let joke = document.getElementById('joke');
  let punchline = document.getElementById('punchline');
  let id = document.getElementById('joke-id');

  joke.innerHTML = data.setup;
  punchline.innerHTML = data.punchline;
  id.innerHTML = 'id: ' + data.id;
  console.log('🤣 Joke data rendered');
}
