App.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'home'
  },

  initialize: function() {
    this.$main = $('#main');
  },

  home: function() {
    var friendsCollection = new App.Collections.Friends();

    var appModel = new App.Models.AppModel();
    var appView = new App.Views.AppView({
      model: appModel,
      friendsCollection: friendsCollection
    });
    
    this.$main.html(appView.render().$el);

    var hangmanModel = new App.Models.Hangman({ friendsCollection: friendsCollection});
    var hangmanView = new App.Views.HangmanLetters({ model: hangmanModel});

    friendsCollection.on('friendsPopulated', function() {
      this.$main.append(hangmanView.render().$el);
    }, this);

  }
});