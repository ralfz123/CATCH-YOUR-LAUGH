import { clickLikeBtn } from './modules/like.js';
import { clickReloadButton } from './modules/reloadPage.js';
import { clickDisapearBtn } from './modules/detailPage.js';

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
  const endpointCats = 'https://api.thecatapi.com/v1/images/search';
  const endpointJokes = 'https://official-joke-api.appspot.com/jokes/random';

  const dataCatImages = await fetchData(endpointCats);
  const dataJokes = await fetchData(endpointJokes);

  renderCatImages(dataCatImages);
  renderJokes(dataJokes);
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
  let id = document.getElementById('joke-id');

  joke.innerHTML = data.setup;
  punchline.innerHTML = data.punchline;
  id.innerHTML = 'id: ' + data.id;
  console.log('🤣 Joke data rendered');
}
