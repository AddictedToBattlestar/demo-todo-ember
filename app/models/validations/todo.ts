import {
  validatePresence,
  validateLength,
} from 'ember-changeset-validations/validators';

export default {
  title: [validatePresence(true), validateLength({ min: 5 })],
  description: [validatePresence(true), validateLength({ min: 10 })],
};
