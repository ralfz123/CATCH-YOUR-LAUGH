import './routie.js';

let likeBtn = document.getElementById('checkFavoBtn');
likeBtn.addEventListener('click', function () {
  routie('favourites');
});

let disappearBtn = document.querySelector('.disappearBtn');
disappearBtn.addEventListener('click', function () {
  routie('/');
});
