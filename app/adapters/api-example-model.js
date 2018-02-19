import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'https://itunes.apple.com/',
	pathForType(){

		return 'search?term=Madonna';

	}
});


