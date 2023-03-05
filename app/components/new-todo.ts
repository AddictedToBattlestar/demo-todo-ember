import Component from '@glimmer/component';
import { inject } from '@ember/service';
import Store from '@ember-data/store';
import { action } from '@ember/object';

export default class NewTodoComponent extends Component {
  @inject
  declare store: Store;
  newTodo = {
    complete: false,
    title: '',
    description: '',
    dueDate: null,
  };
  @action
  onSave(rawTodoModel: {}) {
    debugger;
    this.store.createRecord('todo', rawTodoModel);
  }
}
