import { getData } from './utils/fetch.js';
import { routeHandler } from './router/router.js';

// Function that starts the app, within all feature-functions [NOT FINISHED]
function init() {
  // Router
  routeHandler();

  // Get data (fetch and render)
  getData();

  // render

  // const data = await fetchData();
}

init();
