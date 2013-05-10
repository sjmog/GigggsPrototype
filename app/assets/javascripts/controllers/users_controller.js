App.UsersController = Em.Controller.extend({
	activeUserId: null,
	init: function() {
		this.set('content', App.User.find());
		console.log('the userscontrollers content is now ' + this.content)
	}
	
	
});