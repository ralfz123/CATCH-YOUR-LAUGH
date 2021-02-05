// Like button - makes a new item in the favourites-list
let likeButton = document.getElementById('likeButton');

function clickLikeButton() {
  likeButton.addEventListener('click', function check() {
    const newDiv = document.createElement('div');
    const newContent = document.createTextNode(
      'Liked: {cat-item} + {joke-item}'
    );
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById('fav-items');
    currentDiv.appendChild(newDiv);
  });
}

clickLikeButton();
export { clickLikeButton };
