App.Views.GuessLetter = Backbone.View.extend({
  template: _.template(App.Templates.GuessLetter),

  events: {
    'click .submitGuess': 'captureLetter'
  },

  captureLetter: function() {
    var letterGuessed = $('.inputGuess').val();
    this.onlyOneLetter(letterGuessed);
  },

  onlyOneLetter: function(input) {
    if(input.length !== 1) {
      alert('need to enter one and only one letter');
      return false;
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});