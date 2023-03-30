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
  @tracked selectedTodo: null | TodoModel = null;
  @tracked filteredTodos: Array<TodoModel> = [];

  constructor(owner: unknown, args: Args) {
    super(owner, args);
    this.todoService.selectedTodoMessages$.subscribe((newSelectedTodo) => {
      this.selectedTodo = newSelectedTodo;
    });
    this.filteredTodos = this.args.todos;
  }

  get isNewTodoRouteActive() {
    return this.router.currentRouteName === 'todo-listing.new';
  }

  @action
  transitionToListing() {
    this.todoService.setSelectedTodo(null);
    this.router.transitionTo('todo-listing');
  }

  @action
  updateSearch(event: InputEvent) {
    // @ts-ignore: this works even though TS doesn't like it
    const searchValue = event.target.value.toLowerCase();
    if (searchValue === '') {
      this.filteredTodos = this.args.todos;
    } else {
      this.filteredTodos = this.filteredTodos.filter((todo) => {
        return todo.title.toLowerCase().includes(searchValue);
      });
    }
  }
}
