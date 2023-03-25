import RESTSerializer from '@ember-data/serializer/rest';
import { DS, ModelSchema } from 'ember-data';
import { isArray } from '@ember/array';
import { ModelRegistry } from "ember-data/model";

// I am not proud of anything in this file.

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

  // serializeIntoHash<K extends keyof ModelRegistry>(hash: {}, typeClass: ModelSchema<K>, snapshot: DS.Snapshot<K>, options?: {}): any {
    // let normalizedRootKey = this.payloadKeyFromModelName(typeClass.modelName);
    // hash[normalizedRootKey] = this.serialize(snapshot, options);
    // above is what it does
  // }

  serializeIntoHash<K extends keyof ModelRegistry>(hash: {}, typeClass: ModelSchema<K>, snapshot: DS.Snapshot<K>, options?: {}): any {
    const result = super.serializeIntoHash(hash, typeClass, snapshot, options);
    let normalizedRootKey = this.payloadKeyFromModelName(typeClass.modelName);

    /*
      The RestSerializer is really frustrating.  For a post of the Todo model it would do this:
      {
        todo: {model content here}
      }
      The hash property is the serialized payload that is being passed referentially.
      I am taking the serialized model into a temp variable here,
      deleting the model name property in the hash variable,
      and then merging the serialized model into the hash variable.
      ... simply reassigning the hash variable to the serialized model didn't work in testing
     */

    // @ts-ignore
    const serializedModel = hash[normalizedRootKey];
    // @ts-ignore
    delete hash[normalizedRootKey];

    Object.assign(hash, serializedModel);
    return result;
  }

  serialize<K extends keyof ModelRegistry>(snapshot: DS.Snapshot<K>, options: {}): {} {
    // @ts-ignore
    options.includeId = true;
    return super.serialize(snapshot, options);
  }
}
