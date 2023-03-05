import Component from '@glimmer/component';
import TodoModel from 'todo/models/todo';
import { action } from '@ember/object';
import { EmberChangeset } from 'ember-changeset';
export interface Args {
  todo: TodoModel;
  onSave: ((todoModel: TodoModel | {}) => void) | null;
}
export default class TodoEditorComponent extends Component<Args> {
  changeset: EmberChangeset;

  constructor(owner: unknown, args: Args) {
    super(owner, args);
    this.changeset = new EmberChangeset(this.args.todo);
  }
  @action
  async saveTodo() {
    const result = await this.changeset.save();
    this.args.onSave?.(result);
  }
}
