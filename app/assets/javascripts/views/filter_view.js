App.FilterView = Em.View.extend({

init: function() {
this._super();
	var allContent = App.Contact.find();
	console.log('allContent = ' + allContent);	
	this.set('content', allContent);
	console.log('the filterviews content is now ' + this.content)
},


didInsertElement: function() {
	var view = this;
	console.log('the views content is now ' + view.content + ' using this');
	this.$('#search').autocomplete({source: function(request) {
	
		var regex = new RegExp(request.term);
		var results = view.content.filter(function(item) {
			var escapedItemName = item.get('name');
			console.log('current item name is ' + escapedItemName);
			return regex.test(escapedItemName)
		});
		console.log('the results of the search are ' + results + ' and being searched for was ' + regex);
		return results;
	},
	minLength: 3,
	position: { my: "left top", at: "left bottom", collision: "none" }
});
	
	//this.$('#search').autocomplete({ minLength: 3 });
	//this.$("#search" ).autocomplete({ position: { my : "right top", at: "right bottom" } });
	console.log('the autocompletes source is ' + this.content + '.');
	
}

});