import { module, test } from 'qunit';
import { setupRenderingTest } from 'todo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { set } from '@ember/object';

module('Integration | Component | todo-editor/date-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    set(this, 'value', new Date(2023, 1, 1, 12));
    set(this, 'onChangeValue', null);
    set(this, 'isInvalid', null);

    await render(hbs`<TodoEditor::DateInput
      @idSuffix="fake-id-suffix"
      @label="fake-label"
      @value={{this.value}}
      @onChange={{set this "onChangeValue"}}
      @isInvalid={{this.isInvalid}}
    />`);

    assert.strictEqual(
      this.element.querySelector('#todo-editor-date-input_fake-id-suffix')
        .value,
      '2023-02-01T12:00',
      'the date is 2023-02-01T12:00'
    );
  });
});
