import Component from '@ember/component';

export default Component.extend({

	actions: {

		getApiResults () {

			//this.store.findAll('api-example-model'); 
			this.set('confirmShown', true);
		} 

	}

});
