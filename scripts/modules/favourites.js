// Setting the hash for the router
function checkFavourites() {
  const checkFavBtn = document.getElementById('checkFavoBtn');
  checkFavBtn.addEventListener('click', function () {
    location.hash = 'favourites';
  });
}

checkFavourites();

export { checkFavourites };
