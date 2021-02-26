import { favouritesArray, renderLiData } from './like.js';
import { renderDetail } from './favDetail.js';

function clickDetailFav(arrayData) {
  let checkFavItemBtn = document.querySelector('.checkBtn');

  checkFavItemBtn.addEventListener('click', () => {
    // console.log(favouritesArray[0].catData);
    // for (let i = 0; i < favouritesArray.length; i++) {
    //   console.log(favouritesArray[i].catData);
    // }

    // REMOVE THIS BELOW - Getting the value/countNumber of the LI in the OL
    // console.log(arrayData.indexOf);
    let li = document.querySelectorAll('ol li');
    let numberLi = li.length;
    // console.log(numberLi);
    // location.hash = `favourites/${numberLi}`;
    location.hash = `favourites/${favouritesArray[0].jokeData.id}`;

    renderDetail(favouritesArray);
  });
}

function deleteFavItem(arrayData) {
  let deleteBtn = document.querySelector('#favourites ol li .deleteBtn');
  deleteBtn.addEventListener('click', function () {
    // Replace with code that removes item from array
    let favItem = document.querySelector('.fav-item');
    favItem.remove();

    // Get index of check button
    // Get index of li
    // Remove li (object) from array
    // arrayData.splice(indexOf, 1);

    // EMPTY STATE HANDLER - Not dry, I know
    //   let listItems = document.querySelector('ol').childNodes.length;
    //   const emptyStateElement = document.querySelector('ol p');
    //   if (listItems < 4) {
    //     console.log('Empty state - ON 🟢');
    //     emptyStateElement.classList.remove('emptyStateHide');
    // emptyStateElement.setAttribute('hidden', true)
    //   }
  });
}

//  Deletes all favourites from favourites list
function deleteAllFavItems() {
  const deleteAllBtn = document.querySelector('.deleteAllBtn');
  deleteAllBtn.addEventListener('click', function () {
    let favouritesArray = [];
    renderLiData(favouritesArray);
  });
}

deleteAllFavItems();

export { clickDetailFav, deleteFavItem };
