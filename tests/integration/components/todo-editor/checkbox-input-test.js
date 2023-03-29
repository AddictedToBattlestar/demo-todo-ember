import { module, test } from 'qunit';
import { setupRenderingTest } from 'todo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { set } from '@ember/object';

module(
  'Integration | Component | todo-editor/checkbox-input',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      set(this, 'value', true);
      set(this, 'onChangeValue', null);
      set(this, 'isInvalid', null);

      await render(hbs`<TodoEditor::CheckboxInput
        @idSuffix="fake-id-suffix"
        @label="fake-label"
        @value={{this.value}}
        @onChange={{set this "onChangeValue"}}
        @isInvalid={{this.isInvalid}}
      />`);

      assert.ok(
        this.element.querySelector('#todo-editor-checkbox-input_fake-id-suffix')
          .checked,
        'checkbox is checked'
      );
    });
  }
);
