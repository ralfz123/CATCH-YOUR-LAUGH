function clickDetailFav() {
  let checkFavItemBtns = document.querySelectorAll('.checkBtn');

  checkFavItemBtns.forEach((button) => {
    // console.log('id = x');
  });

  // checkFavItemBtn.addEventListener('click', () => {
  //   let container = document.querySelector('ol');
  //   // console.log(container.childNodes.length);

  //   // const ol = document.querySelector('ol');
  //   // for (let i = 0; i < ol.children.length; i++) {
  //   //   console.log(ol.children[i].tagName);
  //   // }

  //   // Getting the value/countNumber of the LI in the OL
  //   let li = document.querySelectorAll('ol li');
  //   let numberLi = this.li.length
  //   console.log(numberLi);

  //   location.hash = `favourites/${numberLi}`;
  // });
}

function clickBack() {
  let backBtn = document.querySelector('#fav-item a');
  backBtn.addEventListener('click', function () {
    location.hash = 'favourites';
  });
}

function deleteFavItem(catData, jokeData) {
  // Only perform this function if the data is present
  if (catData && jokeData) {
    let deleteBtn = document.querySelector('#favourites ol li .deleteBtn');
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

    // const deleteAllBtn = document.querySelector('.delete-all-btn');
    // deleteAllBtn.addEventListener('click', function () {
    //   const container = document.querySelector('#favourites ol');
    //   let favItem = container.childNodes;
    //   let allFavItems = document.querySelectorAll('#favourites ol li.fav-item');

    //   console.log(allFavItems);
    //   console.log(favItem);

    //   if (allFavItems) {
    //     container.removeChild(childNodes);
    //   }
    // });
  }
}

export { clickDetailFav, clickBack, deleteFavItem };
