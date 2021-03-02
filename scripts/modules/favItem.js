import { favouritesArray } from './like.js';
import { renderDetail } from './favDetail.js';

// Creates a favourite item and renders the data
function renderFavItem(arrayData) {
  let currentContainer = document.querySelector('ol');
  currentContainer.innerHTML = ''; // Make it empty before data will be rendered

  arrayData.forEach((object) => {
    // Creates new <li> in the list
    let newFav = document.createElement('li');
    newFav.setAttribute('class', 'fav-item');

    // Image
    let newCatImg = document.createElement('img');
    newCatImg.src = object.catData.url;
    newFav.appendChild(newCatImg);

    // Joke container
    let jokeContainer = document.createElement('div');
    newFav.appendChild(jokeContainer);

    // Joke
    let newJoke = document.createElement('p');
    newJoke.innerHTML = object.jokeData.setup;
    jokeContainer.appendChild(newJoke);

    // Punchline
    let newJokePunchline = document.createElement('p');
    newJokePunchline.innerHTML = object.jokeData.punchline;
    jokeContainer.appendChild(newJokePunchline);

    // Buttons container
    let btnsContainer = document.createElement('div');
    newFav.appendChild(btnsContainer);

    // Check button to check the fav-item
    let checkBtn = document.createElement('button');
    checkBtn.setAttribute('class', 'checkBtn');
    btnsContainer.appendChild(checkBtn);

    // Delete button to delete the fav-item
    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'deleteBtn');
    btnsContainer.appendChild(deleteBtn);

    currentContainer.appendChild(newFav);

    clickDetailFav();
    deleteFavItem();
    deleteAllFavItems();
  });
}

function clickDetailFav() {
  let checkFavItemBtns = document.querySelectorAll('.checkBtn');

  for (let i = 0; i < checkFavItemBtns.length; i++) {
    checkFavItemBtns[i].addEventListener('click', () => {
      // for (let i = 0; i < favouritesArray.length; i++) {
      const indexFav = favouritesArray
        .map(function (object) {
          return object.jokeData.id;
        })
        .indexOf(favouritesArray[i].jokeData.id); // What's the purpose of this code?

      location.hash = `favourites/${favouritesArray[indexFav].jokeData.id}`;
      renderDetail(favouritesArray[indexFav]);
      // } // end curly brace of for loop
    });
  }
}

// Removes one favourite item from favourites list
function deleteFavItem() {
  let deleteBtns = document.querySelectorAll('.deleteBtn');

  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', () => {
      const indexFav = favouritesArray
        .map(function (object) {
          return object.jokeData.id;
        })
        .indexOf(favouritesArray[i].jokeData.id); // What's the purpose of this code?

      favouritesArray.splice(indexFav, 1);

      // const index = favouritesArray.indexOf(indexFav);
      console.log(indexFav);
      // console.log(index);
      // favouritesArray.splice(index, 1);

      console.log('Removed');
      // console.log('Zoveelste el:', indexFav);
      console.log('Must be subtracted by 1: ', favouritesArray.length);
      renderFavItem(favouritesArray);
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
  });
}

deleteAllFavItems();

export { renderFavItem, clickDetailFav, deleteFavItem, deleteAllFavItems };
