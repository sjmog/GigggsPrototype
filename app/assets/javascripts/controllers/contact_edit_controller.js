App.ContactEditController = Em.ObjectController.extend({
  needs: ['contact', 'filter', 'contacts.new'],

  startEditing: function() {
    // add the contact and its associated phone numbers to a local transaction
    var contact = this.get('content');
    var transaction = contact.get('store').transaction();
    transaction.add(contact);
    console.log('transaction is equal to ' + transaction);
    contact.get('phoneNumbers').forEach(function(phoneNumber) {
      transaction.add(phoneNumber);
    });
    this.transaction = transaction;
  }, //this is messy, each contact now has only one phone number (each gig has only one associated details entry). Fix this, or risk optimisation problems.

  stopEditing: function() {
    // rollback the local transaction if it hasn't already been cleared
    var transaction = this.transaction;
    if (transaction) {
      transaction.rollback();
      this.transaction = undefined;
    }
  },

  save: function() {
    this.transaction.commit();
    this.transaction = undefined;
    this.get('controllers.contact').stopEditing();
  },

  cancel: function() {
    this.get('controllers.contact').stopEditing();
  },

  addPhoneNumber: function() {
    this.get('content.phoneNumbers').createRecord();
  },

  removePhoneNumber: function(phoneNumber) {
    phoneNumber.deleteRecord();
  },
  
});
