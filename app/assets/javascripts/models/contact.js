App.Contact  = DS.Model.extend({
  //firstName:    DS.attr('string'), //may be able to take this out
  //lastName:     DS.attr('string'), //ditto
  email:        DS.attr('string'),
  notes:        DS.attr('string'),
  name:			DS.attr('string'),
  lat:			DS.attr('number'),
  lng:			DS.attr('number'),
  //details: DS.hasMany('App.PhoneNumber'),
  user_is_going: DS.attr('boolean'),
  external_url: DS.attr('string'),
  start: DS.attr('string'), //the 'date' data type may not work well for calculations, so we've changed to 'string'
  end: DS.attr('string'), //ditto
  ticket_url: DS.attr('string'),
  promoted: DS.attr('boolean'),
  //user_id: DS.belongsTo('App.User'), //must implement user model for this to work
  cat1: DS.attr('string'),
  cat2: DS.attr('string'),
  pricelower: DS.attr('number'),
  pricehigher: DS.attr('number'),
  
  promote: function() {
	  this.set('promoted', true)
  }, //It might be silly to put this here, as it's quite easy to hack.
  
  // user_id: DS.belongsTo('App.User'),
  

  toMarker: function() {
	  var lat = this.get('lat'),
	  	  lng = this.get('lng'),
	  	  name = this.get('name');
	  var latLng = new google.maps.LatLng(lat, lng);
	  var marker = new google.maps.Marker({
	  		position: latLng,
	  		map: map,
	  		title: name
  		});
  		console.log('A marker was created!');
  		return marker;
  }.property('lat', 'lng', 'name').cacheable(),

  /*fullName: function() {
    var firstName = this.get('firstName'),
        lastName = this.get('lastName');

    if (!firstName && !lastName) {
      if (Ember.isNone(this.get('id'))) {
        return '(New Contact)';
      } else {
        return '(No Name)';
      }
    }

    if (firstName === undefined) firstName = '';
    if (lastName === undefined) lastName = '';

    return firstName + ' ' + lastName;
  }.property('firstName', 'lastName'),*/

  gravatar: function() {
    var email = this.get('email');
    if (!email) email = '';
    return 'http://www.gravatar.com/avatar/' + MD5(email);
  }.property('email')
});
