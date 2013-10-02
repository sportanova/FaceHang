App.Views.AppView = Backbone.View.extend({

  initialize: function(params) {
    this.friendsCollection = params.friendsCollection;
  },

  render: function() {
    this.$el.html(new App.Views.FBInit({ friendsCollection: this.friendsCollection }).render().$el);
    return this;
  }
});