App.CategoriesView = Ember.View.extend({
	init: function() {
		this._super();
	},
	didInsertElement: function() {
	var view = this;
	$('#optone').change(function() {
	var theIndex = document.getElementById('optone').selectedIndex;
	var theOption = document.getElementById('optone').options[theIndex];
	console.log('selected Index now ' + theIndex);
	console.log('selected Item now ' + theOption);
	console.log('value of selected Item is ' + theOption.text.toLowerCase());
	view.setOptions(theOption.text.toLowerCase()
	,
document.getElementById('opttwo').options);
$('#opttwo').fadeIn('fast');
	});
	$('#opttwo').change(function() {
	var theIndex = document.getElementById('opttwo').selectedIndex;
	var theOption = document.getElementById('opttwo').options[theIndex];
	console.log('selected Index now ' + theIndex);
	console.log('selected Item now ' + theOption);
	console.log('value of selected Item is ' + theOption.text.toLowerCase());
	view.setSecondOptions(theOption.text.toLowerCase())});
	},
	
	setSecondOptions: function(chosen) {
		var view = this;
		var newController = view.get('controller').controllerFor('contacts.new')
    var newContent = newController.get('content');
    newController.set('content.cat2', chosen);
    console.log('the newControllers cat2 is now ' + newController.get('content.cat2'));
	},
	
	setOptions: function(chosen,selbox) {
// selbox assignment deleted
 var view = this;
 console.log('selbox is ' + selbox);
 console.log('chosen is ' + chosen);
var newController = view.get('controller').controllerFor('contacts.new')
    var newContent = newController.get('content');
    newController.set('content.cat1', chosen);
    console.log('the newControllers cat1 is now ' + newController.get('content.cat1'));
if (chosen == " ") {
  selbox[selbox.length] = new Option('Please select one of the options above first.',0);

 
}
if (chosen == "business") {
	selbox.length = 0;
	selbox[selbox.length] = new
Option('More detail?',0);
	selbox[selbox.length] = new
	Option('Conference','conference');
	selbox[selbox.length] = new
	Option('Meeting','meeting');
	selbox[selbox.length] = new
	Option('Seminar','seminar');
	selbox[selbox.length] = new
	Option('Trade Show','trade_show');

}
// repeat for entries in first dropdown list

if (chosen == "film") {
	selbox.length = 0;
	selbox[selbox.length] = new
Option('More detail?',0);
	selbox[selbox.length] = new
	Option('Screening','screening');
	selbox[selbox.length] = new
	Option('Filming','filming');
}
if (chosen == "food \& drink") {
selbox.length = 0;
	selbox[selbox.length] = new
Option('More detail?',0);
 	selbox[selbox.length] = new
Option('Meal','meal');
	selbox[selbox.length] = new
Option('Networking Meal','networking_meal');
	selbox[selbox.length] = new
Option('Night Out','night_out');
	selbox[selbox.length] = new
Option('Social Drinks','social_drinks');
}
if (chosen == "gathering") {
	selbox.length = 0;
	selbox[selbox.length] = new
Option('More detail?',0);
	selbox[selbox.length] = new
Option('Food','food');
	selbox[selbox.length] = new
Option('Small Party','party_small');
	selbox[selbox.length] = new
Option('Medium Party','party_medium');
	selbox[selbox.length] = new
Option('Large Party','party_large');
}
if (chosen == "large event") {
	selbox.length = 0;
	selbox[selbox.length] = new
Option('More detail?',0);
	selbox[selbox.length] = new
Option('Convention','convention');
	selbox[selbox.length] = new
Option('Festival','festival');
	selbox[selbox.length] = new
Option('Spontaneous','spontaneous');
}
if (chosen == "music") {
	selbox.length = 0;
	selbox[selbox.length] = new
Option('More detail?',0);
	selbox[selbox.length] = new
Option('Live Music','live_music');
	selbox[selbox.length] = new
Option('Making Music','making_music');
	selbox[selbox.length] = new
Option('Listening/Appreciation','listening');
}
if (chosen == "shared interests") {
	selbox[selbox.length] = new
Option('Be more specific...',0);
	selbox[selbox.length] = new
Option('Debate/Discussion','discussion');
	selbox[selbox.length] = new
Option('Gaming','gaming');
}
if (chosen == "task") {
	selbox.length = 0;
	selbox[selbox.length] = new
Option('More detail?',0);
	selbox[selbox.length] = new
Option('Reminder','reminder');
}
if (chosen == "theatre") {
	selbox.length = 0;
	selbox[selbox.length] = new
Option('More detail?',0);
	selbox[selbox.length] = new
Option('Live Theatre','live_theatre');
	selbox[selbox.length] = new
Option('Making Theatre','making_theatre');
	selbox[selbox.length] = new
Option('Screening','screening_theatre');
}
// repeat for all the possible entries in second dropdown list
}

});