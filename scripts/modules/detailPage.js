let favDetail = document.querySelector('.fav-item-detail');
let disapearBtn = document.querySelector('.disappearBtn');
let checkFavBtn = document.getElementById('checkFavoBtn');

// When you click on this button, the detail page (Favourites) appears
function checkFavourites() {
  checkFavBtn.addEventListener('click', function () {
    favDetail.id = 'show';
  });
}

// When you click on this button, the detail page (Favourites) disappears
function clickDisapearBtn() {
  disapearBtn.addEventListener('click', function () {
    favDetail.id = 'hide';
  });
}

// DOES NOT WORK YET - Removes fav-item from list

// Back button to overview - fix it with Routie.js (!)
// function here <...>

clickDisapearBtn();
// deleteFavItem();
checkFavourites();

export { clickDisapearBtn, checkFavourites };
