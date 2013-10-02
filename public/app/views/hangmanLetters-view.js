App.Views.HangmanLetters = Backbone.View.extend({
  initialize: function() {
    this.model.on('endGame', this.render, this);
  },

  tagName: 'ul',

  render: function() {
    this.$el.html(
      this.model.letters.map(function(letter) {
        return new App.Views.Letter({ model: letter}).render().$el;
      })
    );

    var guessLetterModel = new App.Models.GuessLetter({ gameWord: this.model });

    this.$el.append(new App.Views.GuessLetter({ model: guessLetterModel }).render().$el);
    return this;
  }
});