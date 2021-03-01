import { favouritesArray, renderFavItem } from './like.js';
import { renderDetail } from './favDetail.js';
import { emptyStateHandler } from '../utils/emptyState.js';

function clickDetailFav(arrayData) {
  let checkFavItemBtns = document.querySelectorAll('.checkBtn');

  for (let i = 0; i < checkFavItemBtns.length; i++) {
    checkFavItemBtns[i].addEventListener('click', () => {
      // Determain which object in array it is
      for (let i = 0; i < favouritesArray.length; i++) {
        renderDetail(favouritesArray[i]);
      }

      location.hash = `favourites/${favouritesArray[i].jokeData.id}`;
    });
  }
}

// Removes one favourite item from favourites list
function deleteFavItem(arrayData) {
  let deleteBtns = document.querySelectorAll('.deleteBtn');

  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', () => {
      // let num = 0;
      // let button = deleteBtns[i];
      // let numIndex = button - 1;

      let buttonSpecific = document.querySelector('ol li .deleteBtn').length
      

      console.log(buttonSpecific);
      // Determain which object in array it is
      // let favItem = document.querySelector('.fav-item');
      // favItem.remove();

      //----  Code to remove it from array:
      // Count li (object) from ol
      // Count li.number - 1
      // Take that value and remove object out array (arrayData.splice(indexOf, 1))
    });
  }
}

//  Removes all favourites from favourites list
function deleteAllFavItems() {
  const deleteAllBtn = document.querySelector('.deleteAllBtn');
  deleteAllBtn.addEventListener('click', function () {
    let favouritesArray = [];
    renderFavItem(favouritesArray);
    console.log('Liked items:', favouritesArray);
    // emptyStateHandler(favouritesArray.length)
  });
}

deleteAllFavItems();

export { clickDetailFav, deleteFavItem, deleteAllFavItems };
