// Function that renders data on the detail page of the unique favourite item
function renderDetail(arrayData) {
  let currentContainer = document.querySelector('ol');
  currentContainer.innerHTML = ''; // Make it empty before data will be rendered

  arrayData.forEach((object) => {
    let image = document.getElementBy('fav-item-image')
    let joke = document.getElementBy('fav-item-joke')
    let punchline = document.getElementBy('fav-item-punchline')

    image.src = catData[0].url;
    joke.innerHTML = jokeData.setup;
    punchline.innerHTML = jokeData.punchline;
  });
}

renderDetail();

export { renderDetail };
