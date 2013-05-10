App.DatePicker = Ember.View.extend({
	natural: null,
    classNames: ['ember-text-field'],
    tagName: "input",
    attributeBindings: ['data','value','format','readonly','type','size'],
    size:"16",
    type: "text",
    
    constrainDate: function(srcDate, minDate) {
        return (srcDate != null && srcDate >= minDate) ? srcDate : minDate;
    },
    
    setStart: function(datevalue) {

		var view = this;
 
		console.log('datevalue is ' + datevalue);
		var newController = view.get('controller').controllerFor('contacts.new')
		var newContent = newController.get('content');
   		newController.set('content.start', datevalue);
   		console.log('the newControllers start is now ' + newController.get('content.start'));
    },
    setEnd: function(datevalue) {

		var view = this;
 
		console.log('datevalue is ' + datevalue);
		var newController = view.get('controller').controllerFor('contacts.new')
		var newContent = newController.get('content');
   		newController.set('content.end', datevalue);
   		console.log('the newControllers end is now ' + newController.get('content.end'));
    },
    
   didInsertElement:function(){
      var self = this;
      
       this.$().change(function() {
	        var d = Date.parse(self.$().val());
	        console.log('date is now ' + d);
	        var minDate = self.constrainDate((self.$().datepicker('option', 'minDate')), new Date());
	        var asDate = self.constrainDate((Date.parse(self.$().val())), minDate);
	        var nextDate = self.constrainDate((Date.parse(self.$().val())), Date.parse($('#ember506').val()));
	        console.log('nextDate is ' + nextDate);
	        
	        if (this.id == "ember506") {
	        	self.setStart(asDate);
	        	self.$().val(asDate.toString('MMMM dd, yyyy'));
	        	$('#start_time').val(asDate.toString('hh:mm:ss'));
	        };
	        if (this.id == "ember508") {
	        	self.setEnd(nextDate);
	        	self.$().val(nextDate.toString('MMMM dd, yyyy'));
	        	$('#end_time').val(nextDate.toString('hh:mm:ss'));
	        };
	        
    });
          
  }
});