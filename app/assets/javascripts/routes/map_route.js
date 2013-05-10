App.MapRoute = Ember.Route.extend({
	
	setupController: function(controller) {
		controller.set('content', App.Contact.find());
		console.log('theContactsInmapController is set up, with the model equal to ' + controller.get('content') + '.');
	}
});