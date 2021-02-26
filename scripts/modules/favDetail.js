// Function that renders data on the detail page of the unique favourite item
function renderDetail(arrayData) {
  let id = document.getElementById('fav-item-id')
  let image = document.getElementById('fav-item-image');
  let joke = document.getElementById('fav-item-joke');
  let punchline = document.getElementById('fav-item-punchline');

  id.innerHTML = arrayData[0].jokeData.id
  image.src = arrayData[0].catData.url;
  joke.innerHTML =  arrayData[0].jokeData.setup;
  punchline.innerHTML =  arrayData[0].jokeData.punchline;
}

export { renderDetail };
