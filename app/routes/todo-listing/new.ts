import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import TodoService from 'todo/services/todo';
import TodoModel from 'todo/models/todo';
import Transition from '@ember/routing/transition';

export default class TodoListingNewRoute extends Route {
  @inject('todo')
  declare todoService: TodoService;

  afterModel(resolvedModel: TodoModel, transition: Transition) {
    this.todoService.setSelectedTodo(null);
    return super.afterModel(resolvedModel, transition);
  }
}
