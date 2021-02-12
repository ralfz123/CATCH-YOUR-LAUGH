// Renders the data (cat images & jokes) in the HTML
function renderData(catData, jokeData) {
  let image = document.getElementById('image-cat');
  let joke = document.getElementById('joke');
  let punchline = document.getElementById('punchline');

  image.src = catData[0].url;
  joke.innerHTML = jokeData.setup;
  punchline.innerHTML = jokeData.punchline;
  console.log('✅ Data rendered');
}

export { renderData };
