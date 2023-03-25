import Component from '@glimmer/component';
import TodoModel from 'todo/models/todo';
import { action } from '@ember/object';
import { Changeset } from 'ember-changeset';

// @ts-ignore - Typescript is not seeing this exported from glimmer even though it works
import { cached } from '@glimmer/tracking';
import { inject } from '@ember/service';
import RouterService from '@ember/routing/router-service';

export interface Args {
  todo: TodoModel;
  onSave: ((todoModel: TodoModel | {}) => void) | null;
}
export default class TodoEditorComponent extends Component<Args> {
  @inject declare router: RouterService;
  // @ts-ignore - Typescript is not seeing this exported from glimmer even though it works
  @cached
  get changeset() {
    return Changeset(this.args.todo);
  }
  @action
  async save() {
    const result = await this.changeset?.save();
    this.args.onSave?.(result.data);
  }
  @action
  cancel() {
    this.changeset?.rollback();
    this.router.transitionTo('todo-listing.by-id', this.args.todo);
  }
}
