App.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'home'
  },

  initialize: function() {
    this.$main = $('#main');
  },

  home: function() {
    var appModel = new App.Models.AppModel();
    var appView = new App.Views.AppView({ model: appModel });
    
    this.$main.html(appView.render().$el);
  }
});