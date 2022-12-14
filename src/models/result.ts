/**
 * impressions-sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, number, object, optional, Schema } from '../schema';
import { Key, keySchema } from './key';

export interface Result {
  /** User's keys */
  data?: Key[];
  /** Total keys of current user */
  total?: number;
}

export const resultSchema: Schema<Result> = object({
  data: ['data', optional(array(lazy(() => keySchema)))],
  total: ['total', optional(number())],
});
