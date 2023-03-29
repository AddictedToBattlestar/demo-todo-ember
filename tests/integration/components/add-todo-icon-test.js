import { module, test } from 'qunit';
import { setupRenderingTest } from 'todo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | add-todo-icon', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<AddTodoIcon />`);

    assert.dom(this.element).hasText('');
  });
});
