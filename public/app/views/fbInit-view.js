App.Views.FBInit = Backbone.View.extend({

  template: _.template(App.Templates.FBInit),

  events: {
    'click #logoutButton': 'logoutUser'
  },

  initialize: function() {
    $(function() {
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '523220717752464',                        // App ID from the app dashboard
          status     : true,                                 // Check Facebook Login status
          xfbml      : true                                  // Look for social plugins on the page
        });

        FB.Event.subscribe('auth.authResponseChange', function(response) {
          if (response.status === 'connected') {
            testAPI();
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

      function testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
          console.log('Good to see you, ' + response.name + '.');
        });
      }
   });
  },

  logoutUser: function() {
    FB.logout(function(response) {
  // user is now logged out
    });
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});