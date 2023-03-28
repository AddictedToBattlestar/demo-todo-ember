import Component from '@glimmer/component';
import TodoModel from 'todo/models/todo';
import TodoModelValidations from 'todo/models/validations/todo';
import { action } from '@ember/object';
import { Changeset } from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';

// @ts-ignore - Typescript is not seeing this exported from glimmer even though it works
import { cached } from '@glimmer/tracking';
import { inject } from '@ember/service';
import RouterService from '@ember/routing/router-service';

export interface Args {
  todo: TodoModel;
  onSave: ((todoModel: TodoModel | {}) => void) | null;
  onCancel: () => void | null;
}
export default class TodoEditorComponent extends Component<Args> {
  @inject declare router: RouterService;
  // @ts-ignore - Typescript is not seeing this exported from glimmer even though it works
  @cached
  get changeset() {
    return Changeset(
      this.args.todo,
      lookupValidator(TodoModelValidations),
      TodoModelValidations
    );
  }
  @action
  async save(event: Event) {
    event.preventDefault(); //prevent form submission from reloading the page
    await this.changeset.validate();
    if (this.changeset.isValid) {
      const result = await this.changeset?.save();
      this.args.onSave?.(result.data);
      this.router.transitionTo('todo-listing.by-id', result);
    }
  }
  @action
  cancel() {
    this.changeset?.rollback();
    this.args.onCancel?.();
    if (this.args.todo.id) {
      this.router.transitionTo('todo-listing.by-id', this.args.todo);
    } else {
      this.router.transitionTo('todo-listing');
    }
  }
}
