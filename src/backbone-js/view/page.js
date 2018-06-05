import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import { app  } from '../app.js';
import PageView from '../template/page.html';

export default Backbone.View.extend({
  el: '#container',
  events: {
    "click .add": "addToCount",
    "click .subtract": "subtractToCount",
  },

  initialize: function (count) {
    this.count = parseInt(count);

    this.render();
  },

  render: function () {
    this.$el.html(PageView);

    $('.count').html(this.count);
  },

  addToCount: function () {
    this.count += 1;
    app.navigate(`#test/${this.count}`, true);
  },

  subtractToCount: function () {
    if (this.count === 0) {
      return;
    }
    this.count -= 1;
    app.navigate(`test/${this.count}`,true);
  }
});
