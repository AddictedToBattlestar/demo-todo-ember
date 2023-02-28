import Component from '@glimmer/component';
import { inject } from '@ember/service';
import TodoService from 'todo/services/todo';
import TodoModel from 'todo/models/todo';
import { tracked } from '@glimmer/tracking';

export interface Args {
  todos: Array<TodoModel>;
}

export default class NavBarComponent extends Component<Args> {
  @inject('todo')
  declare todoService: TodoService;
  @tracked
  selectedTodo: null | TodoModel = null;

  constructor(owner: unknown, args: Args) {
    super(owner, args);
    this.todoService.selectedTodoMessages$.subscribe((newSelectedTodo) => {
      console.debug(
        'NavBarComponent.constructor, todoService.selectedId.subscribe - newSelectedTodo.id',
        newSelectedTodo?.id
      );
      this.selectedTodo = newSelectedTodo;
    });
  }
}
