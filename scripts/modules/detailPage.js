let favDetail = document.querySelector('.fav-item-detail');
let deleteBtn = document.getElementById('deleteBtn');
let disapearBtn = document.querySelector('.disappearBtn');
let checkFavBtn = document.getElementById('checkFavoBtn');

function checkFavourites() {
  checkFavBtn.addEventListener('click', function () {
    favDetail.setAttribute('id', 'show');
  });
}

function clickDisapearBtn() {
  disapearBtn.addEventListener('click', function click() {
    favDetail.removeAttribute('id', 'show');
    favDetail.setAttribute('id', 'hide');
  });
}

// DOES NOT WORK YET - Removes fav-item from list
function deleteFav() {
  deleteBtn.addEventListener('click', function click() {
    // Deletes current fav-item
  });
}

// Back button to overview - fix it with Routie.js (!)
// function here <...>

clickDisapearBtn();
// deleteFav();
checkFavourites();

export { clickDisapearBtn, checkFavourites };
