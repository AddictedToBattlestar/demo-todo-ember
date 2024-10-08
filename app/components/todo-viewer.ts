import Component from '@glimmer/component';
import TodoModel from 'todo/models/todo';
import { action } from '@ember/object';
import { inject } from '@ember/service';
import RouterService from '@ember/routing/router-service';

export interface Args {
  todo: TodoModel;
}
export default class TodoViewerComponent extends Component<Args> {
  @inject declare router: RouterService;
  @action
  transitionToEdit() {
    this.router.transitionTo('todo-listing.by-id.edit', this.args.todo);
  }
}
