App.Views.HangmanLetters = Backbone.View.extend({
  initialize: function() {
    this.model.on('endGame', this.render, this);
    this.model.on('endGame', this.resetBodyParts, this);
    this.model.on('addBodyPart', this.addBodyPart, this);
    this.bodyParts = ['.head', '.back', '.arm.left', '.arm.right', '.leg.left', '.leg.right'];
    this.bodyPartsIndex = 0;
  },

  tagName: 'ul',

  addBodyPart: function() {
    $(this.bodyParts[this.bodyPartsIndex]).css({'display': 'block'});
    this.bodyPartsIndex++;
  },

  resetBodyParts: function() {
    this.bodyPartsIndex = 0;
    $('.bodyPart').css({'display': 'none'});
  },

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