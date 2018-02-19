import Model from 'ember-data/model';
import DS from 'ember-data';

const { 
	attr
 } = DS;

export default DS.Model.extend({
	trackId: attr('number'),
	artistName: attr('string'),
	trackName: attr('string')
});
