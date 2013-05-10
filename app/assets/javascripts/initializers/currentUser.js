Ember.Application.initializer({
  name: 'currentUser',
  initialize: function(container) {
  	console.log('*****************currentUserinitializer going *******************');
    var attributes, controller, object, store, user;
    store = container.lookup('store:main');
    console.log('store is ' + store);
    attributes = $('meta[name="current-user"]').attr('content');
    console.log('attributes are ' + attributes);
    if (attributes) {
      object = store.load(App.User, JSON.parse(attributes));
      user = App.User.find(object.id);
      console.log('user is ' + user);
      controller = container.lookup('controller:currentUser').set('content', user);
    }
  }
});