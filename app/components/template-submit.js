import Component from '@ember/component';

export default Component.extend({
	testValueProp: 'Nothing Entered',
	actions: {
		press(stringVal) {

			//this.testValueProp = stringVal;
			alert('Value entered ' + stringVal);

		}
	}
});
