import { moduleForModel, test } from 'ember-qunit';

moduleForModel('api-serializer', 'Unit | Serializer | api serializer', {
  // Specify the other units that are required for this test.
  needs: ['serializer:api-serializer']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
