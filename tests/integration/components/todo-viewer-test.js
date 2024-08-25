import { module, test } from 'qunit';
import { setupRenderingTest } from 'todo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { set } from '@ember/object';

module('Integration | Component | todo-viewer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    set(this, 'model', {
      complete: false,
      title: 'foo',
      description: '',
      dueDate: null,
    });

    await render(hbs`<TodoViewer @todo={{this.model}}/>`);

    assert.strictEqual(
      this.element.querySelector('#todo-viewer-title').value,
      'foo',
      'title is foo',
    );
  });
});
