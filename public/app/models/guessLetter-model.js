App.Models.GuessLetter = Backbone.Model.extend({
  initialize: function(params) {
    this.gameWord = params.gameWord;
    console.log('gamewod', this.gameWord.gameWord, this.gameWord.gameWord.length);
    this.set('guessesLeft', 5);
    this.set('lettersLeft', this.gameWord.gameWord.length);
  },

  analyzeGuess: function(letter) {
    var guessedRight = false;
    var guessesLeft = this.get('guessesLeft');
    var lettersLeft;


    var letters = this.gameWord.letters.models;
    for(var i = 0; i < letters.length; i++) {
      if(letters[i].get('letter') === letter) {
        guessedRight = true;
        lettersLeft = this.get('lettersLeft');
        this.set('lettersLeft', lettersLeft - 1);
      }
    }
    if(!guessedRight) {
      this.set('guessesLeft', guessesLeft - 1);
    }
    console.log('lettersleft',this.get('lettersLeft'));
    return [guessedRight, this.get('guessesLeft'), this.get('lettersLeft')];
  }
});