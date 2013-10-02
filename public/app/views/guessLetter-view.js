App.Views.GuessLetter = Backbone.View.extend({
  template: _.template(App.Templates.GuessLetter),

  events: {
    'click .submitGuess': 'captureLetter',
  },

  captureLetter: function() {
    var letterGuessed = $('.inputGuess').val();
    this.onlyOneLetter(letterGuessed);
    var guessResults = this.model.analyzeGuess(letterGuessed);

    this.revealCorrectLetters(letterGuessed);
    this.render();
  },

  onlyOneLetter: function(input) {
    if(input.length !== 1) {
      alert('need to enter one and only one letter');
      return false;
    }
  },

  revealCorrectLetters: function(guessedLetter) {
    guessedLetter = guessedLetter.toLowerCase();

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