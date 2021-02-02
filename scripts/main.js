let endpoint = 'https://api.thecatapi.com/v1/images/search';
getData(endpoint);

function getData(url) {
  let image = document.getElementById('image-cat');

  fetch(url)
    .then((response) => response.json())
    .then((data) => (image.src = data[0].url));
}

// -------

getDataTwo('https://official-joke-api.appspot.com/jokes/random');

function getDataTwo(url) {
  let joke = document.getElementById('joke');
  let punchline = document.getElementById('punchline');
  let h2ID = document.getElementById('id');
  

  fetch(url)
    .then((response) => response.json())
    .then(
      (data) => ((joke.innerHTML = data.setup),
       (punchline.innerHTML = data.punchline)
       (h2ID.innerHTML = 'id: ' + data.id))
    );
}

// -------

function reloadPage() {
  location.reload();
}
