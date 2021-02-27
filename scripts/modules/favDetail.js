// Function that renders data on the detail page of the unique favourite item
function renderDetail(favItemData) {
  let id = document.getElementById('fav-item-id')
  let image = document.getElementById('fav-item-image');
  let joke = document.getElementById('fav-item-joke');
  let punchline = document.getElementById('fav-item-punchline');

  id.innerHTML = favItemData.jokeData.id
  image.src = favItemData.catData.url;
  joke.innerHTML =  favItemData.jokeData.setup;
  punchline.innerHTML =  favItemData.jokeData.punchline;
}

export { renderDetail };
