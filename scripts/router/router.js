import '../vendor/routie.js';

function routeHandler() {
  routie({
    '': function () {
      console.log('Home');
      sectionToggler('combo-generator');
    },
    favourites: function () {
      console.log('Favourites');
      sectionToggler('favourites');
    },
    'favourites/*': function () {
      console.log('Favourite-detail');
      sectionToggler('fav-item');
    },
  });
}

function sectionToggler(page) {
  const allSections = document.querySelectorAll('section');
  const activeSection = document.querySelector(`#${page}`);

  allSections.forEach((section) => {
    section.classList.remove('active');
    // section.setAttribute("aria-hidden", "true");
    section.hidden = true;
  });

  activeSection.classList.add('active');
  // activeSection.setAttribute('aria-hidden', 'false');
  activeSection.hidden = false;
}

routeHandler();
export { routeHandler };
