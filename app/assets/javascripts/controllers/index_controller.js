App.IndexController = Ember.Controller.extend({
	needs: ['currentUser', 'users'],
	init: function() {
		if(this.get('controllers.currentUser.content') ) {
			this.set('signedIn', true)
		}
		else {this.set('signedIn', false)};
		
	},
	signedIn: null
	
	
});