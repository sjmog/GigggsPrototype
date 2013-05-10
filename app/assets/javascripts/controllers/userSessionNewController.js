App.UserSessionNewController = Ember.ObjectController.extend({
needs: ['contacts', 'users', 'user', 'index'],
	init: function() {
	this.startEditing();
	console.log('the content of the UserSessionNewController is now ' + this.content)
},
  startEditing: function() {
  console.log('startEditing called');
    // create a new record on a local transaction
    this.transaction = this.get('store').transaction();
    this.set('content', this.transaction.createRecord(App.User, {}));
    
    
  },

  stopEditing: function() {
  console.log('stopEditing called');
    // rollback the local transaction if it hasn't already been cleared
    if (this.transaction) {
      this.transaction.rollback();
      this.transaction = null;
    }
  },

  save: function() {
    // commit and then clear the local transaction
    this.transaction.commit();
    this.transaction = null;
    console.log('user saved!');
  },

  transitionAfterSave: function() {
    // when creating new records, it's necessary to wait for the record to be assigned
    // an id before we can transition to its route (which depends on its id)
    if (this.get('user.id')) {
      this.transitionToRoute('user', this.get('content'));
    }
  }.observes('user.id'),

  cancel: function() {
    this.stopEditing();
    this.transitionToRoute('index');
  }
 
	
	
});