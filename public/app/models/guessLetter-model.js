App.Models.GuessLetter = Backbone.Model.extend({
  initialize: function(params) {
    this.gameWord = params.gameWord;
    this.set('guessesLeft', 5);
  },

  analyzeGuess: function(letter) {
    var guessedRight = false;
    var guessesLeft = this.get('guessesLeft');

    var letters = this.gameWord.letters.models;
    for(var i = 0; i < letters.length; i++) {
      if(letters[i].get('letter') === letter) {
        guessedRight = true;
        console.log('you got it right');
      }
    }
    if(!guessedRight) {
      this.set('guessesLeft', guessesLeft - 1);
    }
    return [guessedRight, guessesLeft];
  }
});