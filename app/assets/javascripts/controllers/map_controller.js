App.MapController = Ember.ArrayController.extend({
	needs: ["contacts", 'contacts.new'],
	
	vContentChange: function() {
		this.set('content', this.get('controllers.contacts.content'));
		console.log('the content of the mapcontroller changed and is now ' + this.get('content'))
	}.observes('controllers.contacts.content'),
  contactsBinding: "controllers.contacts",
  
markerArray:null,
  init: function() {
    this._super();
    this.set("markerArray", []); // markerArray cleaned on load

    this.set('content', this.get('controllers.contacts.content')); //content set from contactscontroller, which is kept up-to-date with filters and whatnot.
    
  },
  extractMarker: function(obj) {
        console.log('obj from which marker is being extracted is ' + obj);
	  var lat = obj.get('lat'),
	  	  lng = obj.get('lng'),
	  	  name = obj.get('name'),
	  	  id = obj.get('id'),
	  	  iwContent = obj.get('notes'), //later this will be the HTML template thing
	  	  map = this.get('map');
	  var latLng = new google.maps.LatLng(lat, lng);
	  var marker = new google.maps.Marker({
	  		position: latLng,
	  		map: map,
	  		title: name,
	  		id: id,
	  		
  		});
  		google.maps.event.addListener(marker, 'click', function () {
	  		infowindow.setContent(iwContent);
	  		infowindow.open(map, marker);
	  		});	
	  		google.maps.event.addListener(marker, 'dblclick', function(event) {
            this.setMap(null);
          });
  		console.log('A marker was created!');
  		this.get('markerArray').push(marker);
  },
  


teardownMarkerArray: function() {
	var controller = this;
   		
   		var markersArray = controller.get('markerArray');
     if (markersArray) {
        for (i=0; i < markersArray.length; i++) {
            markersArray[i].setMap(null);
        }
    markersArray.length = 0;
    };  

},

  pushOn: function(incoming) {
	  this.markerArray.push(incoming)
  },
   makeMarkers: function() {
   this.teardownMarkerArray();
   var controller = this;
   			  Ember.run.later(controller, function() {
	  this.makeMarkersNow()}, 300);
  },

 /*
didLoad: function() {
  this.makeMarkers();},
  displayMarkerArray: function() {
	   console.log('the markerArray now contains ' + this.markerArray + '.')
   },
*/
   reRenderMap: function () {
        if (this.get('map')) {
            var newLoc = new google.maps.LatLng(this.get('lat'), this.get('lng'));
            this.get('map').set('center', newLoc);
            }
            
            
        }.observes('lat', 'lng'),
        
         /*
        >--------------------------------------<
        
        Here is the updateMarkers function.
        It iterates through the controller's content,
        which is an array of objects. It then pushes
        each object in to a markerArray and updates
        the user as to what it's doing.
        
        Later, this will be updated to iterate through
        the filteredContent, and therefore only create
        relevant markers. Since each marker is an object
        in the browser, trimming them down in this way
        is the most efficient thing to do at this juncture.
        
        
        >--------------------------------------<
        */        
         updateMarkersNow: function() {
  console.log('controller received updateMarkersNow request');

  console.log('markerArray now contains ' + this.get('markerArray'))
  var contentNow = this.content; //will be filteredContent, as a computed variable from the filters. That way only the most relevant markers are ever presented in the markerArray, meaning the markerArray (which is held in memory in the view) is only ever kept quite small. Instead, the content is held entirely in the model (the DS.Store), but  the controller will fetch them from the store based on a selection procedure determined from the filter options applied by the user.
  var controller = this;
  console.log('the content is now ' + contentNow + '.');
  contentNow.forEach(function(item) {
  console.log('item immediately equal to ' + item);
  controller.get('markerArray').push(item);
   console.log('markerArray now contains ' + controller.markerArray);
  });},
        
        makeMarkersNow: function() {
  console.log('controller received makeMarkersNow request');
  
  console.log('markerArray now contains ' + this.markerArray)
  var contentNow = this.content;
  var controller = this;
  console.log('the content of the mapcontroller is now ' + contentNow + '.');
  contentNow.forEach(function(item) {
  controller.extractMarker(item);
   console.log('markerArray now contains ' + controller.get('markerArray'));
  });
	  },
	  
	  	
});