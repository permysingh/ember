import DS from 'ember-data';

export default DS.Model.extend({
    shoppingCart : DS.belongsTo('shopping-cart')
});
