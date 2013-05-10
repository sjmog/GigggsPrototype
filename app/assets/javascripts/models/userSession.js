App.UserSession = Ember.Object.extend({
  auth_token: null,
  urlBase: '/api/v1/tokens',
  errorMsg: null,
  signedIn: (function() {
    return this.get('auth_token') !== null;
  }).property('auth_token'),
  signIn: function(email, password) {
    $.ajax({
      url: "" + (this.get('urlBase')) + ".json",
      context: App.userSession,
      type: 'POST',
      data: {
        email: email,
        password: password
      },
      success: function(data) {
        return this.set('auth_token', data.token);
      },
      error: function(data) {
        return this.errorMsg = "there was an error";
      }
    });
    return this.get('auth_token');
  },
  signOut: function() {
    $.ajax({
      url: "" + (this.get('urlBase')) + "/" + (this.get('auth_token')) + ".json",
      context: App.userSession,
      type: 'DELETE',
      success: function(data) {
        return this.set('auth_token', null);
      },
      error: function(data) {
        return this.errorMsg = "there was an error";
      }
    });
    return null;
  }
});
//define the userSession global
App.userSession = App.UserSession.create()