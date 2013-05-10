App.SelectorController = Ember.ArrayController.extend({
	needs: ['filter', 'contacts', 'contacts.new', 'index', 'map','catsfilter'],
	
	

	init: function() {
	this._super();
	var controller = this;
	
		this.set('content', Ember.A([]));
		this.set('selection', Ember.A([]));
		this.content.pushObject({ cat: 'business', subcats: ['conference', 'meeting', 'seminar', 'trade show'] });
	  	this.content.pushObject({ cat: 'film', subcats: Ember.A(['screening', 'filming']) });
	  	this.content.pushObject({ cat: 'food & drink', subcats: Ember.A(['meal', 'networking meal', 'night out', 'social drinks']) });
	  	this.content.pushObject({ cat: 'gathering', subcats: Ember.A(['food', 'small party', 'medium party', 'large party']) });
	  	this.content.pushObject({ cat: 'large event', subcats: Ember.A(['convention', 'festival', 'spontaneous']) });
	  	this.content.pushObject({ cat: 'music', subcats: Ember.A(['live music', 'making music', 'listening & appreciation']) });
	  	this.content.pushObject({ cat: 'shared interests', subcats: Ember.A(['debate & discussion', 'gaming', 'sport']) });
	  	this.content.pushObject({ cat: 'task', subcats: Ember.A(['reminder', 'todo']) }),
	  	this.content.pushObject({ cat: 'theatre', subcats: Ember.A(['live theatre', 'making theatre', 'screening']) });
		console.log('the selectorcontroller is up and running, with content equal to ' + controller.content);
		
		this.selection.pushObject(this.firstItem);
		console.log('selection is now ' + this.selection);
		//this.selection.pushObject(this.get('firstItem'));
		//var theSubcats = this.get('selectionItem.subcats');
		//console.log('the cat of the selection item is now ' + this.get('selectionItem.cat') + ' and the subcats are ' + theSubcats);
		
		
	},
	
	getCat: function(desiredCat) {
		var yourCat = content.filterProperty('cat', desiredCat);
		return yourCat
	},
	
		selectionChanged: function() {
		console.log('the selected object is now ' + this.selection + '!!!!!!!!!!!!!!!!!!')
	}.observes('selection'),
	
	firstItem: function() {
    return this.get('content.firstObject');
  }.property('content.@each').cacheable(),
  
	selectionItem: function() {
		return this.get('selection.firstObject');
		console.log('the selectionItem just changed');
	}.property('selection.@each').cacheable()
});