import { module, test } from 'qunit';
import { setupRenderingTest } from 'todo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { set } from '@ember/object';

module('Integration | Component | todo-editor/text-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    set(this, 'value', 'foo');
    set(this, 'onChangeValue', null);
    set(this, 'isInvalid', null);

    await render(hbs`<TodoEditor::TextInput
      @idSuffix="fake-id-suffix"
      @label="fake-label"
      @value={{this.value}}
      @onChange={{set this "onChangeValue"}}
      @isInvalid={{this.isInvalid}}
    />`);

    assert.strictEqual(
      this.element.querySelector('#todo-editor-text-input_fake-id-suffix')
        .value,
      'foo',
      'text is foo',
    );
  });
});
