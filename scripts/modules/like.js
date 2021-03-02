import { renderFavItem, clickDetailFav, deleteFavItem, deleteAllFavItems } from './favItem.js';
import { feedbackLike } from '../utils/feedback.js';

let favouritesArray = []; // Empty array for keeping up the favourites data

// Makes a new item in the favourites-list
function clickLikeBtn(catData, jokeData) {
  let likeBtn = document.getElementById('likeBtn');

  likeBtn.addEventListener('click', function () {
      let object = { catData: catData[0], jokeData: jokeData };
      favouritesArray.push(object);
      checkDuplicateFav();
      renderFavItem(favouritesArray);
      feedbackLike(); // UX Feedback from the 'like'
      console.log('Liked items', favouritesArray.length);
  });
}

// Checks if the liked combo is not a duplicate, then it won't be saved in the favourites list
function checkDuplicateFav() {
  const newArray = favouritesArray.reduce((newArray, currentValue) => {
    if (
      !newArray.some(
        (element) => element.catData.url === currentValue.catData.url
      )
    )
      newArray.push(currentValue);
    return newArray;
  }, []);
  favouritesArray = newArray;
}

export { favouritesArray, clickLikeBtn };
