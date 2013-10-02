App.Models.Hangman = Backbone.Model.extend({
  initialize: function(params) {
    this.friendsCollection = params.friendsCollection;
    this.friendsCollection.on('friendsPopulated', this.startGame, this);
  },

  startGame: function() {
    var randomPick = Math.floor(Math.random() * this.friendsCollection.length);
    this.name = this.friendsCollection.at(randomPick).get('name').split(' ');
    this.gameWord = this.name[this.name.length - 1];
  }
});