import { clickDetailFav, deleteFavItem } from './favItem.js';
import { feedback } from '../utils/feedback.js';

export let favouritesArray = []; // Empty array for keeping up the favourites data

// Makes a new item in the favourites-list
function clickLikeBtn(catData, jokeData) {
  let likeBtn = document.getElementById('likeBtn');
  likeBtn.addEventListener('click', function () {
    // Only perform this function if the data is present

    if (catData && jokeData) {
      let object = { catData: catData[0], jokeData: jokeData };
      checkDuplicateFav(object);
      favouritesArray.push(object);

      renderLiData(favouritesArray);
      feedback(); // UX Feedback from the 'like'
      clickDetailFav(favouritesArray, object);
      deleteFavItem(favouritesArray);
      console.log('Liked items', favouritesArray);
    }
  });
}

// Checks if the liked combo is not a duplicate, then it will not be saved in the favourites list
function checkDuplicateFav(data, currentObject) {
  if (currentObject == currentObject) {
    // (currentObject.catData.url && currentObject.jokeData.id)
    console.log('The same');
  } else {
    console.log('Not the same');
  }
}

// Makes a favourite item
export function renderLiData(arrayData) {
  let currentContainer = document.querySelector('ol');
  currentContainer.innerHTML = ''; // Make it empty before data will be rendered

  arrayData.forEach((object) => {
    // Makes new li in the list
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
  });
}

export { clickLikeBtn };
