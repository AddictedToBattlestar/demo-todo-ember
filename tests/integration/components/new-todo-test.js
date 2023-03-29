import { module, test } from 'qunit';
import { setupRenderingTest } from 'todo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | new-todo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<NewTodo />`);

    assert.dom(this.element).containsText('Title');
  });
});
