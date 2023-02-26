import ApplicationAdapter from './application';

export default class TodoAdapter extends ApplicationAdapter {
  pathForType() {
    return 'todo';
  }
}
