import Route from '@ember/routing/route';

export default class TodoListingIndexRoute extends Route {
  beforeModel(): Promise<unknown> | void {
    console.log('index route');
  }
}
