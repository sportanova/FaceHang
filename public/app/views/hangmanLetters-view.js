App.Views.Hangman = Backbone.View.extend({
  initialize: function() {
  },

  tagName: 'ul',

  render: function() {
    this.$el.html(
      this.model.letters.map(function(letter) {
        return new App.Views.Letter({ model: letter}).render().$el;
      })
    );
    this.$el.append(new App.Views.GuessLetter());
    return this;
  }
});