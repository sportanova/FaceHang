App.Views.GuessLetter = Backbone.View.extend({
  template: _.template(App.Templates.GuessLetter),

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});