// 1. Data fetch (getdata)
// 2. Dynamic data via virtualDOM
// 3. favoritesList
// 4. Like adds item (cat+joke) to favList
// 5. Localstorage

// API #1 FETCH
let endpoint = 'https://api.thecatapi.com/v1/images/search';
getData(endpoint);

function getData(url) {
  let image = document.getElementById('image-cat');

  fetch(url)
    .then((response) => response.json())
    .then((data) => (image.src = data[0].url));
}

// API #2 FETCH
let endpointTwo = 'https://official-joke-api.appspot.com/jokes/random';

getDataTwo(endpointTwo);

function getDataTwo(url) {
  let joke = document.getElementById('joke');
  let punchline = document.getElementById('punchline');
  let id = document.getElementById('joke-id');

  fetch(url)
    .then((response) => response.json())
    .then(
      (data) => (
        (joke.innerHTML = data.setup),
        (punchline.innerHTML = data.punchline)(
          (id.innerHTML = 'id: ' + data.id)
        )
      )
    );
}

// Reload page
function reloadPage() {
  location.reload();
}

// Liked button
let likeButton = document.getElementById('likeButton');

likeButton.addEventListener('click', check);

function check() {
  const newDiv = document.createElement('div');
  const newContent = document.createTextNode('Liked: {cat-item} + {joke-item}');
  newDiv.appendChild(newContent);
  const currentDiv = document.getElementById('likeArea');
  currentDiv.appendChild(newDiv);
}
