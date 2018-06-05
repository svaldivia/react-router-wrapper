import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import HomeTemplate from '../template/home.html';

export default Backbone.View.extend({
  el: '#container',

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(HomeTemplate);
  }
});
