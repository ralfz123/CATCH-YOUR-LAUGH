import '../vendor/routie.js';
import { emptyStateHandler } from '../utils/emptyState.js';

function routeHandler() {
  routie({
    '': function () {
      sectionToggler('combo-generator');
    },
    favourites: function () {
      sectionToggler('favourites');
    },
    'favourites/:id': function () {
      sectionToggler('fav-item');
    },
  });
}

function sectionToggler(page) {
  const allSections = document.querySelectorAll('section');
  const activeSection = document.getElementById(`${page}`);

  allSections.forEach((section) => {
    section.classList.remove('active');
    section.setAttribute('aria-hidden', 'true');
    section.hidden = true;
  });

  activeSection.classList.add('active');
  activeSection.setAttribute('aria-hidden', 'false');
  activeSection.hidden = false;
}

// emptyStateHandler();
export { routeHandler };
