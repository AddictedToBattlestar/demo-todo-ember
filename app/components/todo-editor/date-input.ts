import Component from '@glimmer/component';
import moment from 'moment/moment';
import { action } from '@ember/object';

export interface Args {
  idSuffix: string;
  label: string;
  value: null | Date;
  onChange: (value: Date) => void;
}
export default class TodoEditorDateInputComponent extends Component<Args> {
  get value() {
    // The datetime-local HTML input element expects dates as a string in this format
    return this.args.value
      ? moment(this.args.value).format('YYYY-MM-DDThh:mm')
      : null;
  }

  @action
  onChange(newValue: string) {
    this.args.onChange(new Date(newValue));
  }
}
