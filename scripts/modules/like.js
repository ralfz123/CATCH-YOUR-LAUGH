let likeBtn = document.getElementById('likeBtn');

// Makes a new item in the favourites-list
function clickLikeBtn() {
  likeBtn.addEventListener('click', function check() {
    let newFav = document.createElement('li');
    newFav.setAttribute('id', 'fav-item');

    // This 4 lines can be used if you want to show the image and the joke
    // let newCatImg = document.createElement('img');
    // let newJoke = document.createElement('p');
    // newFav.appendChild(newCatImg);
    // newFav.appendChild(newJoke);
    let newContent = document.createTextNode('{cat-item} + {joke-item}');
    newFav.appendChild(newContent);

    let currentContainer = document.getElementById('fav-items');
    currentContainer.appendChild(newFav);
  });
}

clickLikeBtn();
export { clickLikeBtn };
