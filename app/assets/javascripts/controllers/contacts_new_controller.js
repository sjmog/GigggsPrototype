App.ContactsNewController = Em.ObjectController.extend({
needs: ['contacts', 'filter', 'selector', 'index', 'currentUser', 'users'],
init: function() {
	this.startEditing();
	console.log('the content of the ContactsNewController is now ' + this.content)
},
  startEditing: function() {
  console.log('startEditing called');
    // create a new record on a local transaction
    this.transaction = this.get('store').transaction();
    this.set('content', this.transaction.createRecord(App.Contact, {}));
    console.log('the latcontent of the contactsnewcontroller is ' + this.get('content.lat'));
    
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
  },

  transitionAfterSave: function() {
    // when creating new records, it's necessary to wait for the record to be assigned
    // an id before we can transition to its route (which depends on its id)
    if (this.get('content.id')) {
      this.transitionToRoute('index');
    }
  }.observes('content.id'),

  cancel: function() {
    this.stopEditing();
    this.transitionToRoute('index');
  },

  addPhoneNumber: function() {
    this.get('content.phoneNumbers').createRecord();
  },

  removePhoneNumber: function(phoneNumber) {
    phoneNumber.deleteRecord();
  },
  
  doAuth: function() {
  	var protoEmail = $('input#email').val();
  	console.log('doAuth called, now checking for email of ' + protoEmail);
  	if (this.get('controllers.users.content').findProperty('email', protoEmail)) {
			console.log('found user with email ' + this.get('controllers.users.content').findProperty('email', protoEmail));
			$('#loginForm').fadeIn();
			$('#loginEmailField').val(protoEmail)}
	else {
	console.log('no user found, fading in sign-up form');
	$('#signUpForm').fadeIn();
	$('#signUpEmailField').val(protoEmail)}
	  
	  
  },
  isExpanded: false,

  expand: function() {
    this.set('isExpanded', true);
  },

  contract: function() {
    this.set('isExpanded', false);
  }
  
});
