import { moduleFor, test } from 'ember-qunit';

moduleFor('route:sub-route-example/sub-route', 'Unit | Route | sub route example/sub route', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
