/**
 * APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ApikeysResponse1 {
  /** New access key */
  result?: string;
}

export const apikeysResponse1Schema: Schema<ApikeysResponse1> = object({
  result: ['result', optional(string())],
});
