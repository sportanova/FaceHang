App.Routes.Router = Backbone.Router.extend({
  routes: {
    'home': 'home'
  },

  initialize: function() {
    this.$main = $('main');
  },

  home: function() {
    console.log('this is home');
  }
});