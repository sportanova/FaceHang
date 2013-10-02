App.Models.Hangman = Backbone.Model.extend({
  initialize: function(params) {
    this.friendsCollection = params.friendsCollection;
    this.friendsCollection.on('friendsPopulated', this.startGame, this);
  },

  startGame: function() {
    this.pickName();
    this.splitName();
  },

  pickName: function() {
    var randomPick = Math.floor(Math.random() * this.friendsCollection.length);

    this.name = this.friendsCollection.at(randomPick).get('name').split(' ');
    this.gameWord = this.name[this.name.length - 1];
  },

  splitName: function() {
    this.letters = new App.Collections.Letters();

    for(var i = 0; i < this.gameWord.length; i++) {
      this.letters.add({ letter: this.gameWord[i] });
    }
  }
});