App.CategoriesController = Ember.Controller.extend({
	catz: null,
	needs: 'catsfilter',
	init: function() {
		this._super();
		this.set('catz', []);
		console.log('catz are now ' + this.catz);
	}
	
});