import { renderData } from '../modules/render.js';
import { loader } from './loader.js';
import { cleanData } from './filter.js';
import '../modules/refreshCombo.js';

// Fetching data and parses to JSON
async function fetchData(url) {
  const dataResponse = await fetch(url);
  const jsonData = await dataResponse.json();
  loader(); // Feedback to user while fetching data
  return jsonData;
}

// Starting application - getting data from endpoints and invoke functions with that data
async function getData() {
  // API - Cats
  const endpointCats = 'https://api.thecatapi.com';
  const pathCats = 'v1/images/search';
  const urlCats = `${endpointCats}/${pathCats}`;

  // API - Jokes
  const endpointJokes = 'https://official-joke-api.appspot.com/';
  const pathJokes = 'jokes/random';
  const urlJokes = `${endpointJokes}/${pathJokes}`;

  const likeBtn = document.getElementById('likeBtn');
  likeBtn.setAttribute('disabled', true); // Set variable to disabled so that you're not able to like the unfetched combo data

  const dataCatImages = await fetchData(urlCats);
  const dataJokes = await fetchData(urlJokes);
  likeBtn.removeAttribute('disabled', true); // Data is fetched, so now you can hit the like button

  // cleanData(dataCatImages, dataJokes); // NOT WORKING
  renderData(dataCatImages, dataJokes);
}

export { getData };
