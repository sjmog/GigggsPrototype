App.ContactsView = Em.View.extend({
	willInsertElement: function() {
		var view=this;
	//view.controller.toFind();} // sidebar set to 'find' mode.
	view.controller.refreshCats()

	},
	didInsertElement: function() {
	
	}
});
