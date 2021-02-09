let likeBtn = document.getElementById('likeBtn');

// Makes a new item in the favourites-list
function clickLikeBtn() {
  likeBtn.addEventListener('click', function () {
    let newFav = document.createElement('li');
    newFav.setAttribute('class', 'fav-item');

    // Makes new item in favo-list
    let newCatImg = document.createElement('img');
    let jokeContainer = document.createElement('div');
    let newJoke = document.createElement('p');
    let newJokePunchline = document.createElement('p');
    newFav.appendChild(newCatImg);
    jokeContainer.appendChild(newJoke);
    jokeContainer.appendChild(newJokePunchline);
    newFav.appendChild(jokeContainer);

    // Delete button to delete the fav-item
    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'deleteBtn');
    let btnText = document.createTextNode('Delete');
    deleteBtn.appendChild(btnText);
    newFav.appendChild(deleteBtn);

    let currentContainer = document.querySelector('ol');
    currentContainer.appendChild(newFav);

    // Feedback from the 'like' to the user
    let feedbackLike = document.createElement('p');
    feedbackLike.setAttribute('class', 'feedback-like');
    let newContent = document.createTextNode('Liked ❤️');
    feedbackLike.appendChild(newContent);
    let container = document.getElementById('favourites-list');
    container.appendChild(feedbackLike);

    // Removes HTML feedback element that is made up here
    setTimeout(function () {
      feedbackLike.remove();
    }, 1500);
  });
}

clickLikeBtn();
export { clickLikeBtn };
