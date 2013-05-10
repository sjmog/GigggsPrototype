App.ContactsRoute = Ember.Route.extend({
  model: function() {
    return App.Contact.find();
  },
  renderTemplate: function() {
  	this._super();
	  this.render('contacts.new', {
	  	outlet: 'add',
	  	into:'contacts',
	  	controller: 'contacts.new'
	  });
	  console.log('add gig form rendered');
	  
	}

  
        
});
