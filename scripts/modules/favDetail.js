// Function that renders data on the detail page of the unique favourite item
function renderDetail(arrayData) {
  let currentContainer = document.querySelector('ol');
  currentContainer.innerHTML = ''; // Make it empty before data will be rendered

  arrayData.forEach((object) => {
    // Makes new li in the list
    let newFav = document.createElement('li');
    newFav.setAttribute('class', 'fav-item');

    // Image
    let newCatImg = document.createElement('img');
    newCatImg.src = object.catData.url;
    newFav.appendChild(newCatImg);

    // Joke container
    let jokeContainer = document.createElement('div');
    newFav.appendChild(jokeContainer);

    // Joke
    let newJoke = document.createElement('p');
    newJoke.innerHTML = object.jokeData.setup;
    jokeContainer.appendChild(newJoke);

    // Punchline
    let newJokePunchline = document.createElement('p');
    newJokePunchline.innerHTML = object.jokeData.punchline;
    jokeContainer.appendChild(newJokePunchline);

    // Buttons container
    let btnsContainer = document.createElement('div');
    newFav.appendChild(btnsContainer);

    // Check button to check the fav-item
    let checkBtn = document.createElement('button');
    checkBtn.setAttribute('class', 'checkBtn');
    btnsContainer.appendChild(checkBtn);

    // Delete button to delete the fav-item
    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'deleteBtn');
    btnsContainer.appendChild(deleteBtn);
  });
}

renderDetail();

export { renderDetail };
