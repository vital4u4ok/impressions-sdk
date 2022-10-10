/**
 * APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, number, object, optional, Schema, unknown } from '../schema';

export interface ApikeysResponse {
  /** User's keys */
  data?: unknown[];
  /** Total keys of current user */
  total?: number;
}

export const apikeysResponseSchema: Schema<ApikeysResponse> = object({
  data: ['data', optional(array(unknown()))],
  total: ['total', optional(number())],
});
