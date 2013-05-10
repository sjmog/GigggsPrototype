App.ContactsController = Em.ArrayController.extend({
  sortProperties: ['name', 'lat', 'lng', 'cat1', 'cat2', 'cat3', 'notes', 'start', 'end', 'user_is_going', 'external_url', 'ticket_url', 'promoted'],
  activeContactId: null,
  needs: ["contacts.new", "filter","catsfilter"],
  /*cats: [Ember.Object.create({ cat: 'business', subcats: ['conference', 'meeting', 'seminar', 'trade show'] }),
  Ember.Object.create({ cat: 'film', subcats: ['screening', 'filming'] }),
  Ember.Object.create({ cat: 'food & drink', subcats: ['meal', 'networking meal', 'night out', 'social drinks'] }),
  Ember.Object.create({ cat: 'gathering', subcats: ['food', 'small party', 'medium party', 'large party'] }),
  Ember.Object.create({ cat: 'large event', subcats: ['convention', 'festival', 'spontaneous'] }),
  Ember.Object.create({ cat: 'music', subcats: ['live music', 'making music', 'listening & appreciation'] }),
  Ember.Object.create({ cat: 'shared interests', subcats: ['debate & discussion', 'gaming', 'sport'] }),
  Ember.Object.create({ cat: 'task', subcats: ['reminder', 'todo'] }),
  Ember.Object.create({ cat: 'theatre', subcats: ['live theatre', 'making theatre', 'screening'] })],*/
  
  cats: [],

  
  
  
  add: null, //defined as nothing, so 'find' will be automatically displayed.
  
  /*
  <---------------->
  
  init function
  
  This preps the properties
  of the ContactsController.
  
  Includes the setting of
  the sidebar to default
  'find' mode.
  
  
  <---------------->
  */
  
  contentsChanged: function() {
	  console.log('the content of the contactscontroller changed and are now equal to: ' + this.get('content'));
  }.property('content').cacheable(),
  init: function() {
    this._super();
    this.set('content', App.Contact.find());
    console.log('add is now equal to ' + this.add);
    this.refreshCats();
    /*this.set(this.cats, []);
    console.log('cats are now ' + this.cats);
    
   this.cats.push(Ember.Object.create({ cat: 'business', subcats: ['conference', 'meeting', 'seminar', 'trade show'] }));
  this.cats.push(Ember.Object.create({ cat: 'film', subcats: ['screening', 'filming'] }));
  this.cats.push(Ember.Object.create({ cat: 'food & drink', subcats: ['meal', 'networking meal', 'night out', 'social drinks'] }));
  this.cats.push(Ember.Object.create({ cat: 'gathering', subcats: ['food', 'small party', 'medium party', 'large party'] }));
  this.cats.push(Ember.Object.create({ cat: 'large event', subcats: ['convention', 'festival', 'spontaneous'] }));
  this.cats.push(Ember.Object.create({ cat: 'music', subcats: ['live music', 'making music', 'listening & appreciation'] }));
  this.cats.push(Ember.Object.create({ cat: 'shared interests', subcats: ['debate & discussion', 'gaming', 'sport'] }));
  this.cats.push(Ember.Object.create({ cat: 'task', subcats: ['reminder', 'todo'] }));
  this.cats.push(Ember.Object.create({ cat: 'theatre', subcats: ['live theatre', 'making theatre', 'screening'] }));*/
  console.log('cats are now ' + this.cats);
    
  },
  
  refreshCats: function() {
  /*var controller=this;
	  controller.set(controller.cats, Ember.A([
	  				{ cat: 'business', subcats: ['conference', 'meeting', 'seminar', 'trade show'] },
	  				{ cat: 'film', subcats: ['screening', 'filming'] },
	  				{ cat: 'food & drink', subcats: ['meal', 'networking meal', 'night out', 'social drinks'] },
	  				{ cat: 'gathering', subcats: ['food', 'small party', 'medium party', 'large party'] },
	  				{ cat: 'large event', subcats: ['convention', 'festival', 'spontaneous'] },
	  				{ cat: 'music', subcats: ['live music', 'making music', 'listening & appreciation'] },
	  				{ cat: 'shared interests', subcats: ['debate & discussion', 'gaming', 'sport'] },
	  				{ cat: 'task', subcats: ['reminder', 'todo'] },
	  				{ cat: 'theatre', subcats: ['live theatre', 'making theatre', 'screening'] }
	  ]));
    console.log('cats are now ' + controller.cats);*/
    /*
   controller.cats.push(Ember.Object.create({ cat: 'business', subcats: ['conference', 'meeting', 'seminar', 'trade show'] }));
  controller.cats.push(Ember.Object.create({ cat: 'film', subcats: ['screening', 'filming'] }));
  controller.cats.push(Ember.Object.create({ cat: 'food & drink', subcats: ['meal', 'networking meal', 'night out', 'social drinks'] }));
  controller.cats.push(Ember.Object.create({ cat: 'gathering', subcats: ['food', 'small party', 'medium party', 'large party'] }));
  controller.cats.push(Ember.Object.create({ cat: 'large event', subcats: ['convention', 'festival', 'spontaneous'] }));
  controller.cats.push(Ember.Object.create({ cat: 'music', subcats: ['live music', 'making music', 'listening & appreciation'] }));
  controller.cats.push(Ember.Object.create({ cat: 'shared interests', subcats: ['debate & discussion', 'gaming', 'sport'] }));
  controller.cats.push(Ember.Object.create({ cat: 'task', subcats: ['reminder', 'todo'] }));
  controller.cats.push(Ember.Object.create({ cat: 'theatre', subcats: ['live theatre', 'making theatre', 'screening'] }));
  console.log('cats are now ' + controller.cats);*/
  },
  
 
  
    /*
  <---------------->
  
  toAdd and toFind functions
  
  
 These determine the state of
 the sidebar. They can be called
 from the template by a button.
 The value of 'add' is used
 by the Handlebars template
 to determine which sidebar template
 to show.
  
  'find' is the default.
  
  <---------------->
  */
  
  
  
  toAdd: function() {
  console.log('someone called toAdd');
  
	  this.set('add', true);
	  console.log('add is now set to ' + this.add)
  },
  
  toFind: function() {
  console.log('someone called toFind');
	  var controller = this;
	  this.set('add', false);
	  console.log('add is now set to ' + this.add)
  }
  
  
  
});

