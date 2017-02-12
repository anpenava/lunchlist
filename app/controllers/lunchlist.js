import Ember from 'ember';

export default Ember.Controller.extend({
	filter: '',
	list: true,
	sortedProperties: ['date:asc'],
	sortedLunchlist: Ember.computed.sort('model', 'sortedProperties'),

	filteredLunchlist: function() {
    var filter = this.get('filter');
    var rx = new RegExp(filter, 'gi');
    var lunchlist = this.model;
    console.log(lunchlist);

    return lunchlist.filter(function(lunch) {
    	return lunch.get('title').match(rx) || lunch.get('author').match(rx);
    });
	}.property('filter')		
});
