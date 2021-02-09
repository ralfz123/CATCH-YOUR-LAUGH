import { clickLikeBtn } from './modules/like.js';
import { clickReloadBtn } from './modules/reloadPage.js';
import { clickDisapearBtn, checkFavourites } from './modules/detailPage.js';


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

  let likeBtn = document.querySelector(
    'section:nth-child(4) button:nth-child(3)'
  );
  likeBtn.setAttribute('disabled', true); // Set variable to disabled so that you're not able to like the unfetched combo data

  const dataCatImages = await fetchData(urlCats);
  const dataJokes = await fetchData(urlJokes);
  likeBtn.removeAttribute('disabled', true); // Data is fetched, so you can hit the like button

  renderCatImages(dataCatImages);
  renderJokes(dataJokes);

  clickLikeBtn(dataCatImages, dataJokes);
}

// Must be in modules?
// Renders the data (cat images) in the HTML
function renderCatImages(data) {
  let image = document.getElementById('image-cat');
  image.src = data[0].url;
  console.log('😺 Cat data rendered');
}

// Must be in modules?
// Renders the data (jokes) in the HTML
function renderJokes(data) {
  let joke = document.getElementById('joke');
  let punchline = document.getElementById('punchline');
  joke.innerHTML = data.setup;
  punchline.innerHTML = data.punchline;
  console.log('🤣 Joke data rendered');
}
