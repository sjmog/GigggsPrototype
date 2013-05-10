App.FilterController = Em.Controller.extend({
	needs: ['contacts', 'catsfilter'],
	init: function() {
		var contactCt = this.get('controllers.contacts.content');
		this.set('content', contactCt);
		console.log('the FilterController is set up, with the content equal to ' + this.content);
		this.set('filteredContent', 'content');
		this.set('cat1filterOn', true);
		this.set('cat2filterOn', false);
		this.set('filterArray', Em.A([]));
	},
	
	 /*
        >--------------------------------------< 
        
        Here follows filteredContent, which is 
        all the content that the controller and 
        views will access. It is an array of 
        objects that the controller has fetched 
        according to a filter query from the model. 
        Marker creation etc. should be based off 
        this. 
        
        The filter query is a series of parameters
        (mostly numerical or boolean) that are derived
        from the current state of the filterMatrix.
        
        All of this will be bound to update depending on
        changes in the filterMatrix, the content array,
        and various user interactions, via observers.
        
        >--------------------------------------<
        */
        applyFilter: function(arr) {
        	this.set('previousArr', this.get('controllers.contacts.content'));
        	console.log('previousArr now ' + this.get('previousArr'));
	        this.set('controllers.contacts.content', arr)
	        console.log('applyFilter says: contacts content now changed to ' + this.get('controllers.contacts.content'));
        },
        doFilter: function(property, value) {
        console.log('**************************doFilter called******************');
        var controller = this;
        var tmpContent = controller.get('content').filterProperty(property, value);
        return controller.set('filteredContent', tmpContent);
        console.log('filteredContent is now equal to ' + controller.filteredContent)
	        
        },
        
        previousArr: null,
        
        chosenFilter: null,
        
               
         /*
        >--------------------------------------< 
        
        Here follows the filterMatrix. Each item
        in the matrix is a filter. Each filter 
        is an Array of a filter key and filter value.
        
        >--------------------------------------<
        */
        filteredContent: null,
        
        cat1filterOn: null,
        cat2filterOn: null,
        
        removeFilter: function(filter) {
        var controller = this;
        
        console.log('removefiltercalled with filter equal to ' + filter);
        $('#' + filter + 'filter').attr("value", '');
        var item = controller.filterArray.findProperty('filterFor', filter);
        var indexOfItem = controller.filterArray.indexOf(item);
        console.log('removefiltercalled with filter equal to ' + filter + ' and item equal to ' + item);
        controller.filterArray.splice(indexOfItem, 1);
        controller.set(filter + 'filterOn', false); //how to get each one depending on filter?
        console.log(filter + 'filterOn is now ' + controller.get(filter + 'filterOn'));
        controller.filterArrayDidChange();
        },
      
     /* getFilters: function(email, name, lat, lng, user_is_going, start, end, cat1, cat2, pricelower, pricehigher) {
	      var protoFilteredContent = App.Contact.filterProperty('email', email)
	      .filterProperty('name', name)
	      .filterProperty('lat', lat)
	      .filterProperty('lng', lng)
	      .filterProperty('user_is_going', user_is_going)
	      .filterProperty('start', start)
	      .filterProperty('end', end)
	      .filterProperty('cat1', cat1)
	      .filterProperty('cat2', cat2)
	      .filterProperty('pricelower', pricelower)
	      .filterProperty('pricehigher', pricehigher);
	      this.set('filteredContent', protoFilteredContent);
	      console.log('the filtered content has been generated and is waiting to be sent for application. Filtered Content = ' + this.filteredContent);
      },*/
      
      filterArray: null, //an array of objects (only applied filters) with filterfor and value keys corresponding selected values
      
      filterArrayDidChange: (function() {
      console.log('!!!!!!!!!!!!!!!!!!!filterarray changed!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      var controller = this;
	var newContent = App.Contact.find();
	console.log('newContent is initialized as ' + newContent + ' and the filterArray currently contains ' + controller.filterArray + ' and the length of that filterArray is ' + controller.filterArray.length);
	if( controller.filterArray.length == 0 || controller.filterArray.length == null) {console.log('the filterArray is empty, so were just returning all contacts as the content')}
	else {
	controller.filterArray.forEach(function(item) {
		console.log('were iterating over the filterArray with the current item being ' + item);
		newContent = newContent.filterProperty(item.filterFor, item.value);
		console.log('newContent is ' + newContent + '****************************')
		});};
		controller.applyFilter(newContent);
		})
      
      

});