/**
 * APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface AuthLoginResponse {
  /** User's name */
  name?: string;
  /** User's email */
  email?: string;
  /** Access token */
  token?: string;
}

export const authLoginResponseSchema: Schema<AuthLoginResponse> = object({
  name: ['name', optional(string())],
  email: ['email', optional(string())],
  token: ['token', optional(string())],
});