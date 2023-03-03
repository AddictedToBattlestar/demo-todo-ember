import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import Store from '@ember-data/store';
import TodoModel from 'todo/models/todo';
import Transition from '@ember/routing/transition';
import TodoService from 'todo/services/todo';

type Args = {
  todo_id: number;
};

export default class TodoListingByIdRoute extends Route {
  @inject
  declare store: Store;
  @inject('todo')
  declare todoService: TodoService;

  async model({todo_id}: Args) {
    return this.store.findRecord('todo', todo_id);
  }

  afterModel(resolvedModel: TodoModel, transition: Transition) {
    this.todoService.setSelectedTodo(resolvedModel);
    return super.afterModel(resolvedModel, transition);
  }
}
