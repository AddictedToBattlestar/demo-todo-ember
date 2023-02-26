import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import Store from '@ember-data/store';

type Args = {
  todo_id: number;
};

export default class TodoListingByIdRoute extends Route {
  @inject
  declare store: Store;

  async model({todo_id}: Args) {
    console.log('TodoRoute - todo_id', todo_id);
    return this.store.findRecord('todo', todo_id);
  }
}
