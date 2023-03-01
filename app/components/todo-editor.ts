import Component from '@glimmer/component';
import TodoModel from 'todo/models/todo';
import { action } from '@ember/object';
export interface Args {
  todo: TodoModel;
}
export default class TodoEditorComponent extends Component<Args> {
  @action
  saveTodo() {
    this.args.todo.save();
  }
}
