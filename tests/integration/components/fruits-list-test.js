import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const testFruit = 'Mango';

moduleForComponent('fruits-list', 'Integration | Component | FRUITS LIST', {
  integration: true
});

test('SHOULD COUNT 6 LISTING AND SHOW MANGO', function(assert) {
 
  assert.expect(3);
  this.render(hbs`{{fruits-list}}`);
  let $button = this.$('#addFruit');
  this.$('#inputFriutEntry').val(testFruit).change();
  $button.click();

  assert.equal(this.$('#fruitList li').length, 6);
  assert.equal(this.$('#fruitList li:nth-child(6)').text(), testFruit);

  $button = this.$('#removeLastFruit');
  $button.click();

  assert.equal(this.$('#fruitList li').length, 5);

});
