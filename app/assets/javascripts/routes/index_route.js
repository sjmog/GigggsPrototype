App.IndexRoute = Ember.Route.extend({
 model: function() {
    return App.Contact.find();
  },
  
      
  init: function() {console.log('were in the indexroute! ive been created.')},
  controller: 'index',
  
  setupController: function(controller) {
		controller.set('content', App.Contact.find());
		console.log('the IndexController is set up, with the model equal to ' + controller.get('content') + '.');
	},


  renderTemplate: function() {
  	this._super();
	  this.render('contacts', {
	  	outlet: 'sidebar',
	  	into:'index',
	  	controller: 'contacts'
	  });
	  console.log('sidebar rendered');
	  this.render('map', {
	  	into: 'index',
	  	outlet: 'map', //cannot connect outlet yet, acc. GitHub ember-data gist #1838 SORTED :)
	  	controller: 'map'
	  });
	  console.log('map rendered');
	  this.render('contacts.new', {
	  	outlet: 'add',
	  	into:'contacts',
	  	controller: 'contacts.new'
	  });
	  console.log('add gig form rendered');
	  this.render('filter', {
	  	outlet: 'filter',
	  	into: 'contacts',
	  	controller: 'filter'
	  });
	  console.log('filterview rendered')
	  
	  	  	 
	  
	  
	 
	}
});
