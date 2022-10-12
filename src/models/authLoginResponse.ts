/**
 * APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Result2, result2Schema } from './result2';

export interface AuthLoginResponse {
  result?: Result2;
}

export const authLoginResponseSchema: Schema<AuthLoginResponse> = object({
  result: ['result', optional(lazy(() => result2Schema))],
});
