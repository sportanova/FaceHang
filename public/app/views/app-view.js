App.Views.AppView = Backbone.View.extend({

  render: function() {
    this.$el.html(new App.Views.FBInit().render().$el);
    return this;
  }
});