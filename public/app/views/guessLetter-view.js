App.Views.GuessLetter = Backbone.View.extend({
  template: _.template(App.Templates.GuessLetter),

  events: {
    'click .submitGuess': 'captureLetter'
  },

  captureLetter: function() {
    var letterGuessed = $('.inputGuess').val();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});