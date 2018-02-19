import Ember from 'ember';
import Service from '@ember/service';

export default Ember.Service.extend({
    init() {
        this._super(...arguments);
        this.set('basket', []);
      }, 
    basket: [],
    addToBasket(prodItem){

        alert('test 1243234');

        //this.get('basket').pushObject(prodItem);

    }
});
