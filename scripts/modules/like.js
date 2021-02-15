import { clickDetailFav, deleteFavItem } from './favItem.js';
import { feedback } from './feedback.js';

// Makes a new item in the favourites-list
function clickLikeBtn(catData, jokeData) {
  let likeBtn = document.getElementById('likeBtn');
  likeBtn.addEventListener('click', function () {
    // Only perform this function if the data is present

    if (catData && jokeData) {
      // Hide empty state
      // let listItems = document.querySelector('ol').childNodes.length;
      // const emptyStateElement = document.querySelector('ol p');

      // if (listItems > 1) {
      //   console.log('Empty state - OFF 🔴');
      //   emptyStateElement.classList.toggle('emptyStateHide');
      // }

      // Makes new li in the list
      let newFav = document.createElement('li');
      newFav.setAttribute('class', 'fav-item');

      // Image
      let newCatImg = document.createElement('img');
      newCatImg.src = catData[0].url;
      newFav.appendChild(newCatImg);

      // Joke container
      let jokeContainer = document.createElement('div');
      newFav.appendChild(jokeContainer);

      // Joke
      let newJoke = document.createElement('p');
      newJoke.innerHTML = jokeData.setup;
      jokeContainer.appendChild(newJoke);

      // Punchline
      let newJokePunchline = document.createElement('p');
      newJokePunchline.innerHTML = jokeData.punchline;
      jokeContainer.appendChild(newJokePunchline);

      // Buttons container
      let btnsContainer = document.createElement('div');
      newFav.appendChild(btnsContainer);

      // Check button to check the fav-item
      let checkBtn = document.createElement('button');
      checkBtn.setAttribute('class', 'checkBtn');
      let checkBtnTxt = document.createTextNode('Check');
      checkBtn.appendChild(checkBtnTxt);
      btnsContainer.appendChild(checkBtn);

      // Delete button to delete the fav-item
      let deleteBtn = document.createElement('button');
      deleteBtn.setAttribute('class', 'deleteBtn');
      let btnText = document.createTextNode('Delete');
      deleteBtn.appendChild(btnText);
      btnsContainer.appendChild(deleteBtn);

      // Append all elements up here to the existing ordered-list
      let currentContainer = document.querySelector('ol');
      currentContainer.appendChild(newFav);

      feedback();
      deleteFavItem(catData, jokeData);
      clickDetailFav(catData, jokeData);
    }
  });
}

export { clickLikeBtn };
