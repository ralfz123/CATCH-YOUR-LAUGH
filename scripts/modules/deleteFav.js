function deleteFavItem(catData, jokeData) {
  // Only perform this function if the data is present
  if (catData && jokeData) {
    let deleteBtn = document.querySelector('.fav-item-detail ol li .delete-button');
    deleteBtn.addEventListener('click', function () {
      console.log('Deleted');
      let favItem = document.querySelector('.fav-item');
      favItem.remove();

      // Not dry, I know
      let listItems = document.querySelector('ol').childNodes.length;
      const emptyStateElement = document.querySelector('ol p');

      if (listItems < 4) {
        console.log('Empty state - ON 🟢');
        emptyStateElement.classList.remove('emptyStateHide');
      } 
    }); 
  }
}

deleteFavItem();
export { deleteFavItem };
