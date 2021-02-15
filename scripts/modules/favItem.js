function clickDetailFav() {
  let checkFavItemBtn = document.querySelector('.add-button');
  checkFavItemBtn.addEventListener('click', () => {
    let container = document.querySelector('ol');
    console.log(container.childNodes.length);

    // const ol = document.querySelector('ol');
    // for (let i = 0; i < ol.children.length; i++) {
    //   console.log(ol.children[i].tagName);
    // }

    location.hash = 'favourites/1';
  });
}

function deleteFavItem(catData, jokeData) {
  // Only perform this function if the data is present
  if (catData && jokeData) {
    let deleteBtn = document.querySelector(
      '.fav-item-detail ol li .delete-button'
    );
    deleteBtn.addEventListener('click', function () {
      console.log('Deleted');
      let favItem = document.querySelector('.fav-item');
      favItem.remove();

      // Not dry, I know
    //   let listItems = document.querySelector('ol').childNodes.length;
    //   const emptyStateElement = document.querySelector('ol p');

    //   if (listItems < 4) {
    //     console.log('Empty state - ON 🟢');
    //     emptyStateElement.classList.remove('emptyStateHide');
    //     // emptyStateElement.setAttribute('hidden', true)
    //   }
    });
  }
}

export { clickDetailFav, deleteFavItem };
