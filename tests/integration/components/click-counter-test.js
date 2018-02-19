import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('click-adder-comp', 'Integration | Component |   CLICK COUNTER ', {
  integration: true
});

test('SHOULD ADD ONE', function(assert) {

  assert.expect(1);
  this.render(hbs`{{click-adder-comp}}`);

  let $button = this.$('#increment');
  $button.click();
  assert.equal(this.$('.count-val').text(), '1');

});

test('SHOULD MINUS ONE', function(assert){

  assert.expect(1);
  this.render(hbs`{{click-adder-comp}}`);
  let $button = this.$('#decrement');
  $button.click();
  assert.equal(this.$('.count-val').text(), '0');

});

test('SHOULD NOT CLICK LESS THAN 0', function(assert){

  assert.expect(1);
  this.render(hbs`{{click-adder-comp}}`);
  let $button = this.$('#decrement');
  $button.click();
  assert.equal(this.$('.count-val').text(), '0');

});
