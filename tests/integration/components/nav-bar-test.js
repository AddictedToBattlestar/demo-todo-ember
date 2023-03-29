import { module, test } from 'qunit';
import { setupRenderingTest } from 'todo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | nav-bar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('todos', []);
    this.set('selectedTodo', null);

    await render(
      hbs`<NavBar @todos={{this.todos}} @selectedTodo={{this.selectedTodo}}/>`
    );

    assert.dom(this.element).hasText('');
  });
});
