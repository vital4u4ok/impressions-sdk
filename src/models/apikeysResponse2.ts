/**
 * APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Result1, result1Schema } from './result1';

export interface ApikeysResponse2 {
  result?: Result1;
}

export const apikeysResponse2Schema: Schema<ApikeysResponse2> = object({
  result: ['result', optional(lazy(() => result1Schema))],
});
