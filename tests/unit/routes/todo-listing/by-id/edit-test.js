import { module, test } from 'qunit';
import { setupTest } from 'todo/tests/helpers';

module('Unit | Route | todo-listing/by-id/edit', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:todo-listing/by-id/edit');
    assert.ok(route);
  });
});
