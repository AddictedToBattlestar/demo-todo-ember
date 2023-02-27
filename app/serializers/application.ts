import RESTSerializer from '@ember-data/serializer/rest';
import { DS, ModelSchema } from 'ember-data';
import { isArray } from '@ember/array';

export default class ApplicationSerializer extends RESTSerializer {
  normalizeResponse(
    store: DS.Store,
    primaryModelClass: ModelSchema,
    payload: {},
    id: string | number,
    requestType: string
  ): {} {
    const keyFromModelName: string = isArray(payload)
      ? `${primaryModelClass.modelName}s`
      : `${primaryModelClass.modelName}`;
    let transformedPayload: { [key: string]: any } = {};
    transformedPayload[keyFromModelName] = payload;
    return super.normalizeResponse(
      store,
      primaryModelClass,
      transformedPayload,
      id,
      requestType
    );
  }
}
