App.Views.GuessLetter = Backbone.View.extend({
  template: _.template(App.Templates.GuessLetter),

  events: {
    'click .submitGuess': 'captureLetter',
    'keyup .inputGuess': 'caputureLetterOnEnter'
  },

  caputureLetterOnEnter: function(e) {
    if(e.which === 13) {
      this.captureLetter();
    }
  },

  captureLetter: function() {
    var letterGuessed = $('.inputGuess').val();
    this.onlyOneLetter(letterGuessed);
    var guessResults = this.model.analyzeGuess(letterGuessed);

    this.determineGameState(guessResults);

    this.revealCorrectLetters(letterGuessed);
    this.render();
  },

  determineGameState: function(guessResults) {
    if(guessResults[1] <= 0) {
      this.model.gameWord.trigger('endGame', 'lose');
    } else if(guessResults[2] === 0) {
      this.model.gameWord.trigger('endGame', 'win');
    }
  },

  onlyOneLetter: function(input) {
    if(input.length !== 1) {
      alert('need to enter one and only one letter');
      return false;
    }
  },

  revealCorrectLetters: function(guessedLetter) {
    guessedLetter = guessedLetter.toLowerCase();

    var guessesLeft = this.model.get('guessesLeft');
    var lettersLeft = this.model.get('lettersLeft');

    lettersLength = this.model.get('gameWord').gameWord.length;

    if(guessesLeft === 6 && lettersLeft === lettersLength) {
      return false;
    }
    $('.letter').each(function(index, letter) {
      var $this = $(this);
      var thisLetter = $this.text().toLowerCase();

      if(thisLetter === guessedLetter) {
        $this.css({'display': 'inline-block'});
      }
    });
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});