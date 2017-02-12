import Ember from 'ember';

export default Ember.Controller.extend({
	isUnfilledForm: false,

	actions: {
		addLunch: function() {
			var author = this.get('author');
			var title = this.get('title');
			var body = this.get('body');
			var date = this.get('date');

			if (author && title && body && date != '') {

				// Create new Lunch
				var newLunch = this.store.createRecord('lunch', {
					author: author,
					title: title,
					body: body,
					date: new Date(date)	
				});

				//Save to Firebase

				newLunch.save();

			} else {
				this.set('isUnfilledForm', true);
			}

			//Clear

			this.setProperties({
				author: '',
				title: '',
				body: '',
				date: ''
			});	
			
			Ember.run.later(this, function() {
			  this.set('isUnfilledForm', false);
			}, 2000);		

		}
	}
});
