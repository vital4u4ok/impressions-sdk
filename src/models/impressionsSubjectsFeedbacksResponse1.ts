/**
 * impressions-sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Result6, result6Schema } from './result6';

export interface ImpressionsSubjectsFeedbacksResponse1 {
  result?: Result6;
}

export const impressionsSubjectsFeedbacksResponse1Schema: Schema<ImpressionsSubjectsFeedbacksResponse1> = object(
  { result: ['result', optional(lazy(() => result6Schema))] }
);
