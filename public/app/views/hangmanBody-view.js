App.Views.HangmanBody = Backbone.View.extend({
  template: _.template(App.Templates.HangmanBody),

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});