import Service from '@ember/service';
import {defer, ReplaySubject} from "rxjs";
import TodoModel from "todo/models/todo";
export default class TodoService extends Service {
  private selectedTodo = new ReplaySubject<null | TodoModel>(1);

  public readonly selectedTodoMessages$ = defer(() => this.selectedTodo.asObservable());

  setSelectedTodo(todo: null | TodoModel) {
    console.debug('TodoService.setSelectedTodo - id', todo?.id);
    this.selectedTodo.next(todo);
  }
}
