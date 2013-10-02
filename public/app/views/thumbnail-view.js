App.Views.ThumbnailView = Backbone.View.extend({

  initialize: function() {
  },

  template: _.template(App.Templates.ThumbnailTemplate),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});