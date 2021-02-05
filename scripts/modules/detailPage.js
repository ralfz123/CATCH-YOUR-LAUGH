let favItems = document.getElementById('fav-items');
let favItem = document.getElementById('fav-item');
let favDetail = document.getElementById('fav-item-detail');

// Detailpage appears when clicked on fav-item
function clickFavItem() {
  // Troubling to catch the fav-item HTML element.
  if (favItems.hasChildNodes()) {
    favItem = favItems.childNodes;

    favItem.addEventListener('click', function click() {
      favDetail.setAttribute('class', 'fav-item-detail-active');
    });
  }
}

clickFavItem();
export { clickFavItem };
