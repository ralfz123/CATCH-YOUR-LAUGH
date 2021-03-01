import { urlCats, urlJokes } from '../constants/api.js';
import { loader } from './loader.js';
import { renderData } from '../modules/render.js';
import { filterCatData, filterJokeData } from './filter.js';
import '../modules/refreshCombo.js';

/**
 * Fetching data and parses to JSON
 *
 * @param {string} url - The url of the API endpoint
 * @return {string} jsonData - JSON data
 *
 */

async function fetchData(url) {
  const dataResponse = await fetch(url);
  const jsonData = await dataResponse.json();
  loader(); // Feedback to user while fetching data
  return jsonData;
}

/**
 * Getting data from endpoints and invoke functions with that data
 *
 * @return {string} jsonData - Filtered JSON data, ready to be used and rendered in the application
 *
 */

async function getData() {
  const likeBtn = document.getElementById('likeBtn');
  likeBtn.setAttribute('disabled', true); // Set variable to disabled so that you're not able to like the unfetched data

  const dataCats = await fetchData(urlCats);
  const dataJokes = await fetchData(urlJokes);

  // Filter data
  const filteredDataCat = filterCatData(dataCats);
  const filteredDataJoke = filterJokeData(dataJokes);

  likeBtn.removeAttribute('disabled', true); // Data is fetched, so now the like button is enabled

  return { filteredDataCat, filteredDataJoke };
}

export { getData };
