/**
 * impressions-sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Login {
  email: string;
  password: string;
}

export const loginSchema: Schema<Login> = object({
  email: ['email', string()],
  password: ['password', string()],
});
