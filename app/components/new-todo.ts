import Component from '@glimmer/component';
import Store from '@ember-data/store';
import RouterService from '@ember/routing/router-service';
import TodoService from 'todo/services/todo';
import { inject } from '@ember/service';
import { action } from '@ember/object';

export default class NewTodoComponent extends Component {
  @inject declare store: Store;
  @inject declare router: RouterService;
  @inject('todo') declare todoService: TodoService;

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
    this.todoService.setSelectedTodo(newTodo);
    this.router.transitionTo('todo-listing.by-id', newTodo);
  }

  @action
  async onCancel() {
    this.todoService.setSelectedTodo(null);
  }
}
