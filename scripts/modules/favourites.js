// When you click on this button, the detail page (Favourites) appears
function checkFavourites() {
  let favDetail = document.querySelector('.fav-item-detail');
  let checkFavBtn = document.getElementById('checkFavoBtn');

  checkFavBtn.addEventListener('click', function () {
    favDetail.id = 'show';
    location.hash = 'favourites';
  });
}

// When you click on this button, the detail page (Favourites) disappears
function clickDisapearBtn() {
  let favDetail = document.querySelector('.fav-item-detail');
  let disapearBtn = document.querySelector('.disappearBtn');

  disapearBtn.addEventListener('click', function () {
    favDetail.id = 'hide';
  });
}


clickDisapearBtn();
checkFavourites();

export { clickDisapearBtn, checkFavourites };
