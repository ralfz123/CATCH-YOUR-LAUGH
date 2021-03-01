import { getData } from '../utils/fetch.js';
import { renderData } from './render.js';

// Another combo - triggered by button, then fetches and renders again
const comboBtn = document.getElementById('comboBtn');
comboBtn.addEventListener('click', async function () {
  // Fetches data again
  const receivedData = await getData();
  renderData(receivedData.filteredDataCat, receivedData.filteredDataJoke);
});
