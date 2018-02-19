import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    init(){

        this._super(...arguments);

    },
    basketService: Ember.inject.service('basket-cart'),
    products: [
        {
            prodId: 1,
            prodTitle: 'Iphone X',
            desc: 'This phone is pants Avoid',
            price: '2.99',
            prodImage: 'http://via.placeholder.com/150x150'
        },
        {
            prodId: 2,
            prodTitle: 'Samsung 8s',
            desc: 'The best ever',
            price: '699',
            prodImage: 'http://via.placeholder.com/150x150'
        },
        {
            prodId: 3,
            prodTitle: 'Nokia 8',
            desc: 'The new comer to the pack',
            price: '299',
            prodImage: 'http://via.placeholder.com/150x150'
        },
        {
            prodId: 4,
            prodTitle: 'HTC Super fab',
            desc: 'The latests ans greatest phone so far',
            price: '499',
            prodImage: 'http://via.placeholder.com/150x150'
        },
        {
            prodId: 5,
            prodTitle: 'Sony Xperian 24',
            desc: 'Flagship',
            price: '1000',
            prodImage: 'http://via.placeholder.com/150x150'
        }
    ],
    actions: {

        addToCart(prodId){

            var prodItem = this.get('products');
            this.get('basketService').addToBasket(prodItem[prodId]);

        }

    }
});
