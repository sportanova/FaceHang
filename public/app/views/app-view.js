App.Views.AppView = Backbone.View.extend({
  className: 'sliderImages',

  template: _.template(App.Templates.AppTemplate),

  events: {
    'click div.sliderButtons button': 'cycleSlide'
  },

  cycleSlide: function(e) {
    var incrementor;
    if(e.currentTarget.className === 'next') {
      incrementor = 1;
    } else if( e.currentTarget.className === 'prev') {
      incrementor = -1;
    }

    this.$el.find('img').removeClass('featuredPic');
    this.model.imgs.incrementCurrentPicIndex(incrementor);

    this.changeFeaturedPic();
  },

  changeFeaturedPic: function() {
    var featuredPic = this.$el.find('img').get(this.model.imgs.currentPicIndex);
    $(featuredPic).addClass('featuredPic');
  },

  render: function() {
    this.$el.html(
      this.model.imgs.map(function(img) {
        return new App.Views.ThumbnailView( {model: img} ).render().$el;
      })
    )
      .append(this.template());

    this.changeFeaturedPic();

    return this;
  }
});