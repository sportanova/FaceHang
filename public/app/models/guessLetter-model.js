App.Models.GuessLetter = Backbone.Model.extend({
  initialize: function(params) {
    this.gameWord = params.gameWord;
    console.log(this.gameWord);
  },

  analyzeGuess: function(letter) {
    var guessedRight = false;

    var letters = this.gameWord.letters.models;
    for(var i = 0; i < letters.length; i++) {
      if(letters[i].get('letter') === letter) {
        guessedRight = true;
        console.log('you got it right');
      } else {
        console.log(letters[i].get('letter'),'thats a strike');
      }
    }
    return guessedRight;
  }
});