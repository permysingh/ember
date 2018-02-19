import DS from 'ember-data';

export default DS.RESTSerializer.extend({

	primaryKey : 'trackId',
	
	normalizeResponse(store, primaryModelClass, payload, id, requestType){

		// payload = the parameter of result from API
		// api-example-model ---- which is the MODEL.JS NAME
		// payload.results --- the actual OBJECT array path from RESULTS.
		
		payload = {
			'api-example-model' : payload.results
		};	

		return this._super(store, primaryModelClass, payload, id, requestType);

	}

});
