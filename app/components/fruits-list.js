import Component from '@ember/component';

export default Component.extend({
	init() {
		this._super(...arguments);
		this.listOfFruitsArr = ['Apple','Banana','Orange','Pear','Plum'];
	},
	actions: {

		addFruit(stringParam) {

			this.get('listOfFruitsArr').pushObject(stringParam);

		},
		removeLastItem(){

			this.get('listOfFruitsArr').popObject();

		}

	}

});
