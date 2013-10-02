window.App = {
  Collections : {},
  Models : {},
  Views : {},
  Templates : {},
  Routers : {},
  init: function() {
    _.extend(App, Backbone.events);
    var router = new App.Routers.AppRouter();
    Backbone.history.start();
  }
};

$(function() {
  App.init();
});
