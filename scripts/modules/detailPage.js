let favDetail = document.querySelector('.fav-item-detail');
let disapearBtn = document.querySelector('.disappearBtn');
let checkFavBtn = document.getElementById('checkFavoBtn');

function checkFavourites() {
  checkFavBtn.addEventListener('click', function () {
    favDetail.id = 'show'
  });
}

function clickDisapearBtn() {
  disapearBtn.addEventListener('click', function () {
    favDetail.id = 'hide'
  });
}

// DOES NOT WORK YET - Removes fav-item from list

function deleteFavItem() {
  let deleteBtn = document.querySelector('.deleteBtn');

  deleteBtn.addEventListener('click', function () {
    event.stopPropagation();
    let favItem = document.querySelector('.fav-item');
    favItem.remove();
  });
}

// Back button to overview - fix it with Routie.js (!)
// function here <...>

clickDisapearBtn();
deleteFavItem();
checkFavourites();

export { clickDisapearBtn, deleteFavItem, checkFavourites };
