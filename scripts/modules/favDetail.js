// Function that renders data on the detail page of the unique favourite item
function renderDetail(favItemData) {
  const numberFavourite = document.querySelector('#fav-item h1 span')
  const id = document.getElementById('fav-item-id')
  const image = document.getElementById('fav-item-image');
  const joke = document.getElementById('fav-item-joke');
  const punchline = document.getElementById('fav-item-punchline');

  id.innerHTML = favItemData.jokeData.id
  image.src = favItemData.catData.url;
  joke.innerHTML =  favItemData.jokeData.setup;
  punchline.innerHTML =  favItemData.jokeData.punchline;
}

export { renderDetail };
