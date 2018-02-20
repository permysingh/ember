import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    init(){

        this._super(...arguments);

    },
    basketService: Ember.inject.service('basket-cart')
});