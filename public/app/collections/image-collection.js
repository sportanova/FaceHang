App.Collections.Imgs = Backbone.Collection.extend({
  model: App.Models.Img,

  initialize: function() {
    this.currentPicIndex = 0;
  },

  incrementCurrentPicIndex: function(increment) {
    if(increment > 0) {
      if(this.currentPicIndex < this.length - 1) {
        this.currentPicIndex = this.currentPicIndex + increment;
      } else {
        this.currentPicIndex = 0;
      }
    } else {
       if(this.currentPicIndex === 0) {
        this.currentPicIndex = this.length - 1;
      } else {
        this.currentPicIndex = this.currentPicIndex + increment;
      }
    }
  }
});