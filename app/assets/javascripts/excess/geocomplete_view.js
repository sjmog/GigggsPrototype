App.Geocomplete = Ember.View.extend({
tagName: 'input',
attributeBindings: ['type'],
type: 'text',
	didInsertElement: function() {
		 this.geocomplete({
   map: this.get('controller.controllers.map.map'),
    markerOptions: {
    draggable: true
  },
  details: ".geoctrl",
  detailsAttribute: "data-geo"
  
    });

	}
}) 