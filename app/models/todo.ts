import Model, { attr } from '@ember-data/model';

export default class TodoModel extends Model {
  @attr('boolean')
  declare isComplete: boolean;
  @attr('string')
  declare title: string;

  @attr('string')
  declare description: string;

  @attr('date')
  declare dueDate: Date;
}
