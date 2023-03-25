import { module, test } from 'qunit';
import { setupRenderingTest } from 'todo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | todo-editor/date-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TodoEditor::DateInput />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <TodoEditor::DateInput>
        template block text
      </TodoEditor::DateInput>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
