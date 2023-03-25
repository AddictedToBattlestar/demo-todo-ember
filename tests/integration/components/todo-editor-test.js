import { module, test } from 'qunit';
import { setupRenderingTest } from 'todo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | todo-editor', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TodoEditor />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <TodoEditor>
        template block text
      </TodoEditor>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
