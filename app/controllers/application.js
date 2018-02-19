import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		pressed(){

			alert('EXAMPLE EVENT FIRED FROM CONTROLLER');

		}
	}
});
