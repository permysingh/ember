import { test } from 'qunit';
import moduleForAcceptance from 'ember-test/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | ADDER COMPONENT');

let $button = find('#increment')

test('VISITNG CLICK COUNTER PAGE', function(assert) {
  visit('/click-adder-comp');

  andThen(function() {

    assert.equal(currentURL(), '/click-adder-comp');
  });

});

test('CLICK COUNTER ADD ONE',function(assert){

  visit('/click-adder-comp');

  click('button#increment').then(function(){
    assert.equal(find('.count-val').text(), '1');
  });

});
