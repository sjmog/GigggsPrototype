App.Autocomplete = JQ.Autocomplete.extend({
	init: function() {
		this.set('content', this.get('App.FilterController.content'));
		console.log('the Autocomplete widget is ready, with content equal to ' + this.content)
	},
	tagName: 'div',
	didInsertElement: function() { this.$().autocomplete() }
	
})