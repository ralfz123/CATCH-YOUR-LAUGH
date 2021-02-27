import { favouritesArray } from '../modules/like.js';

// EMPTY STATE HANDLER
function emptyStateHandler(numberFavItems) {
  const emptyStateElement = document.querySelector('ol p');
  console.log(numberFavItems);

  // Show empty state - If array is empty
  if (numberFavItems == 0) {
    console.log('Empty state - ON 🟢');
    emptyStateElement.setAttribute('aria-hidden', 'true');
    emptyStateElement.hidden = true;
  }

  // Hide empty state - If array has minimal one element
  else if (numberFavItems > 0) {
    console.log('Empty state - OFF 🔴');
    emptyStateElement.setAttribute('aria-hidden', 'false');
    emptyStateElement.hidden = false;
  }
}

// emptyStateHandler();
export { emptyStateHandler };
