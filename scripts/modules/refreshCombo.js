import { getData } from '../utils/fetch.js';

// Another combo - triggered by button, then fetches and renders again
function clickComboBtn() {
  console.log('Combo clicked');
  let comboBtn = document.getElementById('comboBtn');
  comboBtn.addEventListener('click', getData());
}

export { clickComboBtn };
