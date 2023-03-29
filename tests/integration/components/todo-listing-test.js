import { module, test } from 'qunit';
import { setupRenderingTest } from 'todo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { set } from '@ember/object';

module('Integration | Component | todo-listing', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    set(this, 'model', []);

    await render(hbs`
      <TodoListing @todos={{this.model}}>
        template block text
      </TodoListing>
    `);

    assert.equal(this.element.querySelector('.body-content').textContent.trim(), 'template block text', 'template block text is rendered');
  });
});
