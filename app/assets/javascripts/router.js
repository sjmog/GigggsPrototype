App.Router.map(function() {
  this.resource('contacts', function() {
    this.route('new');
    this.route('map');
   this.route('me');
    this.route('about');
   
    this.resource('contact', {path: ':contact_id'});
    
  });
  this.resource('users', function() {
	  this.resource('user', {path: ':user_id'});
	  
  });
});

