App.CatsfilterView = Ember.View.extend({

	willRenderElement: function() {
		console.log('Imma render the cats filterview for you now, but i might not insert it. yet.');
	},
	didInsertElement: function() {
	console.log('the cats view has successfully been initialized');
	var view = this;
	console.log('catsfilterview inserted');
	if(document.getElementById('cat1filter')) {
	var vieww = view;
	
	$('#cat1filter').change(function() {
	
	var viewww = vieww; //view should be scopable, but bubbling down just in case as some calls are quite nested
	var theIndex = document.getElementById('cat1filter').selectedIndex;
	var theOption = document.getElementById('cat1filter').options[theIndex];
	viewww.get('controller').removeFilter('cat1');
	console.log('selected cat1filter Index now ' + theIndex);
	console.log('selected cat1filter Item now ' + theOption);
	console.log('the cat1filter Items value is ' + theOption.getAttribute('value'));
	if(theOption.value !== "") {
	var escapedOptionString = theOption.text.toLowerCase(); //now we can use the string in a homogenous manner across the app
	viewww.get('controller.filterArray').push({filterFor: 'cat1', value: escapedOptionString});
	console.log('the filterArray now contains ' + viewww.get('controller.filterArray') + ' and this message originated from the catsfilterview');
	console.log('the CAT1 escapedOptionString, which is the value to be used app-wide in the filters, is ' + escapedOptionString + '. THIS IS IMPORTANT CAT1');
	view.get('controller').filterArrayDidChange();};
	view.setOptions(theOption.text.toLowerCase()
	,
document.getElementById('cat2filter').options);

	});};
	if(document.getElementById('cat2filter')) {
	$('#cat2filter').change(function() {
	var theIndex = document.getElementById('cat2filter').selectedIndex;
	var theOption = document.getElementById('cat2filter').options[theIndex];
	view.get('controller').removeFilter('cat2');

	console.log('selected cat2filter Index now ' + theIndex);
	console.log('selected cat2filter Item now ' + theOption);
	
	console.log('the cat1filter Items value is ' + theOption.getAttribute('value'));
	
	if(theOption.value !== "") {
	var escapedOptionString = theOption.text.toLowerCase(); //now we can use the string in a homogenous manner across the app
	view.get('controller.filterArray').push({filterFor: 'cat2', value: escapedOptionString});
	console.log('the filterArray now contains ' + view.get('controller.filterArray') + ' and this message originated from the catsfilterview');
	console.log('the CAT2 escapedOptionString, which is the value to be used app-wide in the filters, is ' + escapedOptionString + '. THIS IS IMPORTANT CAT2');
	view.get('controller').filterArrayDidChange();};
	view.setSecondOptions(theOption.text.toLowerCase())});
	}},
	
	setSecondOptions: function(chosen) {
		var view = this;
		
	},
	
	setOptions: function(chosen,selbox) {
// selbox assignment deleted
 var view = this;
 console.log('selbox is ' + selbox);
 console.log('chosen is ' + chosen);

if (chosen == "filter by category...") {
selbox.length = 0;
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