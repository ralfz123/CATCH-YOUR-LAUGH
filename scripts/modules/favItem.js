import { favouritesArray, renderFavItem } from './like.js';
import { renderDetail } from './favDetail.js';
import { emptyStateHandler } from '../utils/emptyState.js';

function clickDetailFav(arrayData) {
  let checkFavItemBtns = document.querySelectorAll('.checkBtn');

  for (let i = 0; i < checkFavItemBtns.length; i++) {
    checkFavItemBtns[i].addEventListener('click', () => {
      // for (let i = 0; i < favouritesArray.length; i++) {
      const indexFav = favouritesArray
        .map(function (object) {
          return object.jokeData.id;
        })
        .indexOf(favouritesArray[i].jokeData.id); // What's the purpose of this code?

      renderDetail(favouritesArray[indexFav]);
      location.hash = `favourites/${favouritesArray[indexFav].jokeData.id}`;
      // } // end curly brace of for loop
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
      console.log(arrayData);
      let buttonSpecific = document.querySelectorAll('ol li .deleteBtn').length;
      // console.log(buttonSpecific);
      let index = buttonSpecific - 1;
      console.log(index);
      arrayData.splice(index, 1);
      console.log(arrayData);
      renderFavItem(arrayData);

      // Determain which object in array it is
      // let favItem = document.querySelector('.fav-item');
      // favItem.remove();

      //----  Code to remove it from array:
      // Count li (object) from ol
      // Count li.number - 1
      // Take that value and remove object out array (arrayData.splice(indexOf, 1))

      // // get favorites from local storage or empty array
      // var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      // // add class 'fav' to each favorite
      // favorites.forEach(function (favorite) {
      //   document.getElementById(favorite).className = 'fav';
      // });
      // // register click event listener
      // document.querySelector('.list').addEventListener('click', function (e) {
      //   var id = e.target.id,
      //     item = e.target,
      //     index = favorites.indexOf(id);
      //   // return if target doesn't have an id (shouldn't happen)
      //   if (!id) return;
      //   // item is not favorite
      //   if (index == -1) {
      //     favorites.push(id);
      //     item.className = 'fav';
      //     // item is already favorite
      //   } else {
      //     favorites.splice(index, 1);
      //     item.className = '';
      //   }
      //   // store array in local storage
      //   localStorage.setItem('favorites', JSON.stringify(favorites));
      // });
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
