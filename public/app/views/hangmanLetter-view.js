App.Views.Letter = Backbone.View.extend({

  template: _.template(App.Templates.Letter),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});