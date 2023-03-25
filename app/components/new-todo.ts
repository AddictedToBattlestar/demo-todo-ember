import Component from '@glimmer/component';
import { inject } from '@ember/service';
import Store from '@ember-data/store';
import { action } from '@ember/object';
import RouterService from '@ember/routing/router-service';

export default class NewTodoComponent extends Component {
  @inject declare store: Store;
  @inject declare router: RouterService;

  newTodo = {
    complete: false,
    title: '',
    description: '',
    dueDate: null,
  };
  @action
  async onSave(rawTodoModel: {}) {
    const newTodo = this.store.createRecord('todo', rawTodoModel);
    await newTodo.save();
    this.router.transitionTo('todo-listing.by-id', newTodo);
  }
}
