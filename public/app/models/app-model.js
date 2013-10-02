App.Models.AppModel = Backbone.Model.extend({
  initialize: function() {
    this.imgs = new App.Collections.Imgs();

    var pic1 = new App.Models.Img( {url: 'http://i.imgur.com/1QQABC8.jpg'} );
    var pic2 = new App.Models.Img( {url: 'http://i.imgur.com/7cVmLh9.jpg'} );
    var pic3 = new App.Models.Img( {url: 'http://i.imgur.com/gdXTEXy.jpg'} );
    var pic4 = new App.Models.Img( {url: 'http://i.imgur.com/BlDRM6D.png'} );


    this.imgs.add(pic1);
    this.imgs.add(pic2);
    this.imgs.add(pic3);
    this.imgs.add(pic4);
  }
});