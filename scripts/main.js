import { clickLikeBtn } from './modules/like.js';
import { clickReloadBtn } from './modules/reloadPage.js';
import { clickDisapearBtn, checkFavourites } from './modules/detailPage.js';

getData(); // Starts application 

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

  renderData(dataCatImages, dataJokes);
  clickLikeBtn(dataCatImages, dataJokes);
}

// Must be in modules?
// Renders the data (cat images & jokes) in the HTML
function renderData(catData, jokeData) {
  let image = document.getElementById('image-cat');
  let joke = document.getElementById('joke');
  let punchline = document.getElementById('punchline');

  image.src = catData[0].url;
  joke.innerHTML = jokeData.setup;
  punchline.innerHTML = jokeData.punchline;
  console.log('✅ Data rendered');
}
