/**
 * impressions-sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Result4 {
  /** Subject ID */
  id?: string;
}

export const result4Schema: Schema<Result4> = object({
  id: ['id', optional(string())],
});
