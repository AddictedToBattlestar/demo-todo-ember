import Route from '@ember/routing/route';
import TodoService from 'todo/services/todo';
import TodoModel from 'todo/models/todo';
import Transition from '@ember/routing/transition';
import { inject } from '@ember/service';

export default class TodoListingNewRoute extends Route {
  @inject('todo')
  declare todoService: TodoService;

  afterModel(resolvedModel: TodoModel, transition: Transition) {
    this.todoService.setSelectedTodo(null);
    return super.afterModel(resolvedModel, transition);
  }
}
