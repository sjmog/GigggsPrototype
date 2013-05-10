App.UserRoute = Ember.Route.extend({
	controller: 'App.UserSessionNewController',
  setupController: function(controller, model) {
    // reset editing state
    // note: this is necessary here because `deactivate` won't be called when transitioning
    //       from one UserRoute directly into another
    if (controller.get('isEditing')) {
      controller.stopEditing();
    }

    // highlight this user as active
    this.controllerFor('users').set('activeUserId', model.get('id'));
  },

  deactivate: function() {
    var controller = this.controller

    // reset editing state
    if (controller.get('isEditing')) {
      controller.stopEditing();
    }

    // un-highlight the active user (perhaps temporarily)
    this.controllerFor('users').set('activeUserId', null);
  }
});