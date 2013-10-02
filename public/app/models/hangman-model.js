App.Models.Hangman = Backbone.Model.extend({
  initialize: function(params) {
    this.friendsCollection = params.friendsCollection;

    var that = this;

    this.friendsCollection.on('friendsPopulated', this.startGame());
  },

  startGame: function() {
    console.log('start game');
  }
});