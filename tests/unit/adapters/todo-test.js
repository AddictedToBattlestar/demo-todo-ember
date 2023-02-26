import { module, test } from 'qunit';

import { setupTest } from 'todo/tests/helpers';

module('Unit | Adapter | todo', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:todo');
    assert.ok(adapter);
  });
});
