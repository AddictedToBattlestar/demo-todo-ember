import Model, { attr } from '@ember-data/model';

export default class TodoModel extends Model {
  @attr('string') declare title: string;
  @attr('string') declare description: string;
  @attr('boolean') declare complete: boolean;
  @attr('date') declare dueDate: Date;
}
