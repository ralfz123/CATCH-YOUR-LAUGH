import { getData } from '../utils/fetch.js';

// Another combo - triggered by button, then fetches and renders again
let comboBtn = document.getElementById('comboBtn');
comboBtn.addEventListener('click', function () {
  // empty static HTML first, so when you like, you like not the liked ones twice

  getData(); // Fetches data again
});
