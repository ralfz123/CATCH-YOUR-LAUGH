import '../vendor/routie.js';

function handleRoutes() {
  routie({
    '': function () {
      console.log('Home');
    },
    favourites: function () {
      console.log('Favourites');

      // let favDetail = document.querySelector('.fav-item-detail');
      // favDetail.id = 'show';
    },
    'favourites/*': function () {
      console.log('Favourite-detail');
    },
  });
}

handleRoutes();
