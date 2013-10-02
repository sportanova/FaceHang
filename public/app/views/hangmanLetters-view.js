App.Views.Hangman = Backbone.View.extend({
  initialize: function() {
  },

  render: function() {
    this.$el.html(
      this.model.letters.map(function(letter) {
        return new App.Views.Letter({ model: letter}).render().$el;
      })
    );
    return this;
  }
});