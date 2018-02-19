import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('twowaybinding');
  this.route('eventbinding');
  this.route('looping');
  this.route('default', {path: '/THE_PATH_NAME_HAS_CHANGED'});
  this.route('page-not-found', {path: '/*wildcard'});
  this.route('yields', {path: 'yields'});
  this.route('api-example');
  this.route('sub-route-example');
  this.route('sub-route-example.sub-route', {path: 'sub-route-example/sub-route'});
  this.route('color-picker');
  this.route('click-adder-comp');
  this.route('life-cycle-example');  
  this.route('shopping-cart');  
});

export default Router;
