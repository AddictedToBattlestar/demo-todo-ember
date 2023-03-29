import { module, test } from 'qunit';
import { setupRenderingTest } from 'todo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | todo-editor', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('model', {
      complete: false,
      title: 'foo',
      description: '',
      dueDate: null,
    });

    await render(hbs`<TodoEditor @todo={{this.model}}/>`);

    assert.strictEqual(
      this.element.querySelector('#todo-editor-text-input_title').value,
      'foo',
      'title is foo'
    );
  });
});
