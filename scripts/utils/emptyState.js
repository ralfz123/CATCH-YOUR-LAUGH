import { favouritesArray } from '../modules/like.js';

// EMPTY STATE HANDLER - Not dry, I know
function emptyStateHandler() {
  let listItems = document.querySelector('ol').childNodes;
  const emptyStateElement = document.querySelector('ol p');
  let array = favouritesArray;
  console.log(array.length);

  // Show empty state - If array is empty
  if (array.length == 0) {
    console.log('Empty state - ON 🟢');
    // emptyStateElement.setAttribute('aria-hidden', 'true');
    // emptyStateElement.hidden = true;
  }

  // Hide empty state - If array has minimal one element
  if (array.length !== 0) {
    console.log('Empty state - OFF 🔴');
    // emptyStateElement.setAttribute('aria-hidden', 'false');
    // emptyStateElement.hidden = false;
  }
}

emptyStateHandler();
export { emptyStateHandler };
