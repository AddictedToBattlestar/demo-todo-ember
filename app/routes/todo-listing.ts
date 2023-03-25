import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import Store from '@ember-data/store';

export default class TodoListingRoute extends Route {
  @inject
  declare store: Store;

  async model() {
    return this.store.findAll('todo');
  }
}
