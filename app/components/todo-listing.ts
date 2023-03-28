import Component from '@glimmer/component';
import TodoService from 'todo/services/todo';
import TodoModel from 'todo/models/todo';
import RouterService from '@ember/routing/router-service';
import { inject } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export interface Args {
  todos: Array<TodoModel>;
}

export default class TodoListingComponent extends Component<Args> {
  @inject('todo') declare todoService: TodoService;
  @inject declare router: RouterService;
  @tracked
  selectedTodo: null | TodoModel = null;

  constructor(owner: unknown, args: Args) {
    super(owner, args);
    this.todoService.selectedTodoMessages$.subscribe((newSelectedTodo) => {
      this.selectedTodo = newSelectedTodo;
    });
  }

  get isNewTodoRouteActive() {
    return this.router.currentRouteName === 'todo-listing.new';
  }

  @action
  transitionToListing() {
    this.todoService.setSelectedTodo(null);
    this.router.transitionTo('todo-listing');
  }
}
