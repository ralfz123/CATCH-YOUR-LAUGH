let likeBtn = document.getElementById('likeBtn');

// Makes a new item in the favourites-list
function clickLikeBtn(catData, jokeData) {
  likeBtn.addEventListener('click', function () {
    
    // Only perform this function if the data is present
    if (catData && jokeData) {
      
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

      // Delete button to delete the fav-item
      let deleteBtn = document.createElement('button');
      deleteBtn.setAttribute('class', 'deleteBtn');
      let btnText = document.createTextNode('Delete');
      deleteBtn.appendChild(btnText);
      newFav.appendChild(deleteBtn);

      // Append all elements up here to the existing ordered-list
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
    }
  });
}

clickLikeBtn();
export { clickLikeBtn };
