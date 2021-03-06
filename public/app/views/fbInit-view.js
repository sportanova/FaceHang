App.Views.FBInit = Backbone.View.extend({

  template: _.template(App.Templates.FBInit),

  events: {
    'click #logoutButton': 'logoutUser'
  },

  initialize: function(params) {
    this.friendsCollection = params.friendsCollection;
    that = this;

    $(function() {
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '523220717752464',                        // App ID from the app dashboard
          status     : true,                                 // Check Facebook Login status
          xfbml      : true                                  // Look for social plugins on the page
        });

        FB.Event.subscribe('auth.authResponseChange', function(response) {
          if (response.status === 'connected') {
            that.populateFriendsCollection();
          } else if (response.status === 'not_authorized') {
            FB.login();
          } else {
            FB.login();
          }
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/all.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
   });
  },

  populateFriendsCollection: function() {
    FB.api('/me/friends', function(response) {
      for(var i = 0; i < response.data.length; i++) {
        that.friendsCollection.add(response.data[i]);
      }
      that.friendsCollection.trigger('friendsPopulated');
    });
  },

  logoutUser: function() {
      FB.logout(function(response) {
    });
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});