import Backbone from 'backbone';

import PageView from './view/page.js';
import HomeView from './view/home.js';

export default Backbone.Router.extend({
  routes: {
    "": "index",
    "test/:count": "test",
  },
  index() {
    const homeView = new HomeView();
    homeView.render();
  },
  test(count) {
    const pageView = new PageView(count);
    pageView.render();
  },
});