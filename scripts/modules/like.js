let likeBtn = document.getElementById('likeBtn');

// Makes a new item in the favourites-list
function clickLikeBtn() {
  likeBtn.addEventListener('click', function () {
    let newFav = document.createElement('li');
    newFav.setAttribute('class', 'fav-item');

    // Makes new item in favo-list
    // Image
    let newCatImg = document.createElement('img');
    newCatImg.src = 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'
    newFav.appendChild(newCatImg);

    // Joke container
    let jokeContainer = document.createElement('div');
    newFav.appendChild(jokeContainer);

    // Joke
    let newJoke = document.createElement('p');
    let joke = document.createTextNode('{joke}');
    newJoke.appendChild(joke);
    jokeContainer.appendChild(newJoke);

    // Punchline
    let newJokePunchline = document.createElement('p');
    let punchline = document.createTextNode('{punchline}');
    newJokePunchline.appendChild(punchline);
    jokeContainer.appendChild(newJokePunchline);

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
