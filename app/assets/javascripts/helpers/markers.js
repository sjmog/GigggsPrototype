Ember.Handlebars.registerBoundHelper('bextractMarker', function(obj) {
	  var lat = obj.get('lat'),
	  	  lng = obj.get('lng'),
	  	  name = obj.get('name');
	  var latLng = new google.maps.LatLng(lat, lng);
	  var marker = new google.maps.Marker({
	  		position: latLng,
	  		map: App.ContactsInmapView.get('map'),
	  		title: name
  		});
  		console.log('A marker was created!');
  		return marker;
  }, 'lat', 'lng', 'name');