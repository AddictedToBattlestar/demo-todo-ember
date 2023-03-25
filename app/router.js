import EmberRouter from '@ember/routing/router';
import config from 'todo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('todo-listing', { path: '/' }, function () {
    this.route('by-id', { path: ':todo_id' }, function () {
      this.route('edit');
    });
    this.route('new');
  });
});
