App.MapView = Ember.View.extend({
    templateName: 'map',
   latBinding: 'controller.content.lat',
    lngBinding: 'controller.content.lng',
    contentBinding: 'controller.content',
    //latitudeBinding: 'controller.relevantGigsArray.latitude',
    //longitudeBinding: 'controller.relevantGigsArray.longitude',
   map: null,
   
      unsavedObject: null,
//ready to go as set by ContactsNewController

   
 
contentDidChange: function () {
	this.get('controller').send('makeMarkers');
	console.log('the content changed!')
}.observes('content'),



        didInsertElement: function() {
        var mapOptions = {
                center: new google.maps.LatLng(52.3102, -1.5360),
                zoom: 11,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false
            };
            var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
            this.set('map',map); //save for future updates
            this.set('controller.map',map);//saved in the controller
            console.log('to confirm: mapcontroller now has map set as ' + this.get('controller.map'));
            this.$().css({ width: "100%", height: "100%" }); 
       
			window.infowindow = new google.maps.InfoWindow({
            size: new google.maps.Size(150, 50),
            content: 'sample text'
        });
        var view = this;
    
        
        //set up the geocoder
        
         $("#location").geocomplete({
   map: this.get('map'),
    markerOptions: {
    draggable: true
  },
  details: ".geoctrl",
  detailsAttribute: "data-geo"
  
    })
    .bind("geocode:result", function(event, result){
    var newController = view.get('controller').controllerFor('contacts.new')
    var newContent = newController.get('content');
    //view.unsavedObject = view.get('controllers.contacts.new.content');
    //console.log('the current content of unsavedObject is ' + view.unsavedObject + ' and the content of the controller is ' + view.get('controllers.contactsNew.content'));
    console.log('to prove the view is working, here is its controllers content: ' + newContent);
    var protoLat = result.geometry.location.jb;
    console.log('lat: ' + protoLat);
    var protoLng = result.geometry.location.kb;
    console.log('lng: ' + protoLng);
    //unsavedContent.set(this.lat, result.geometry.location.jb);
    //unsavedContent.set(this.lng, result.geometry.location.kb);
    newController.set('content.lat', protoLat);
    console.log('the newControllers lat content is now set to ' + newController.get('content.lat'));
    newController.set('content.lng', protoLng);
    console.log('the newControllers lng content is now set to ' + newController.get('content.lng'));
    $('#lat').attr('value', result.geometry.location.jb);
    $('#lng').attr('value', result.geometry.location.kb)
    })
    .bind("geocode:dragged", function(event, result) {
	    console.log('lat: ' + result.jb);
    console.log('lng: ' + result.kb);
    $('#lat').attr('value', result.jb);
    $('#lng').attr('value', result.kb)
    });
    $("#location").change(function() {
    $("input").trigger("geocode", function(result) {
    console.log(result.geometry.location)
    })
    })

        

		  /*
var marker = source.extractMarker;
		  console.log('converted contact ' + i + ' to marker');
		  markerArray.push(marker);
		  console.log('pushed marker ' + i + ' on to markerArray');
	  ;
*/
	  
	  console.log('View loaded!');
	  },

        
       }
  );