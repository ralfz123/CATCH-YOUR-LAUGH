let favItems = document.getElementById('fav-items');
let favItem = document.getElementById('fav-item');
let favDetail = document.getElementById('fav-item-detail');
let deleteBtn = document.getElementById('deleteBtn');
let disapearBtn = document.querySelector('.disappear-button');

function clickDisapearBtn() {
  disapearBtn.addEventListener('click', function click() {
    let favDetail = document.getElementById('fav-item-detail');
    // favDetail.setAttribute('class', 'fav-item-detail-inactive');
    favDetail.style.visibility = 'hidden';
  });
}

// DOES NOT WORK YET - Detailpage appears when clicked on fav-item
function clickFavItem() {
  // Troubling to catch the fav-item HTML element.
  if (favItems.hasChildNodes()) {
    favItem = favItems.childNodes;
    console.log(favItem);

    favItem.addEventListener('click', function click() {
      favDetail.setAttribute('class', 'fav-item-detail-active');
    });
  }
}

// DOES NOT WORK YET - Removes fav-item from list
function clickDeleteBtn() {
  deleteBtn.addEventListener('click', function click() {
    // Deletes current fav-item
  });
}

clickFavItem();
clickDisapearBtn();
clickDeleteBtn();

export { clickDisapearBtn };
