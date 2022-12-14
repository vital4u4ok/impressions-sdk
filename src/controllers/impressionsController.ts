/**
 * impressions-sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { CustomError } from '../errors/customError';
import { Feedback, feedbackSchema } from '../models/feedback';
import {
  ImpressionsSubjectsFeedbacksResponse,
  impressionsSubjectsFeedbacksResponseSchema,
} from '../models/impressionsSubjectsFeedbacksResponse';
import {
  ImpressionsSubjectsFeedbacksResponse1,
  impressionsSubjectsFeedbacksResponse1Schema,
} from '../models/impressionsSubjectsFeedbacksResponse1';
import {
  ImpressionsSubjectsResponse,
  impressionsSubjectsResponseSchema,
} from '../models/impressionsSubjectsResponse';
import {
  ImpressionsSubjectsResponse1,
  impressionsSubjectsResponse1Schema,
} from '../models/impressionsSubjectsResponse1';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class ImpressionsController extends BaseController {
  /**
   * Delete feedback
   *
   * @param subjectId  Subject id
   * @param feedbackId Feedback id
   * @return Response from the API call
   */
  async deleteFeedback(
    subjectId: string,
    feedbackId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ImpressionsSubjectsFeedbacksResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      subjectId: [subjectId, string()],
      feedbackId: [feedbackId, string()],
    });
    req.appendTemplatePath`/impressions/subjects/${mapped.subjectId}/feedbacks/${mapped.feedbackId}`;
    req.throwOn(401, CustomError, 'Unauthorized');
    req.throwOn(404, CustomError, 'The specified resource was not found');
    return req.callAsJson(
      impressionsSubjectsFeedbacksResponseSchema,
      requestOptions
    );
  }

  /**
   * Delete subject
   *
   * @param subjectId Subject id
   * @return Response from the API call
   */
  async deleteSubject(
    subjectId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ImpressionsSubjectsResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ subjectId: [subjectId, string()] });
    req.appendTemplatePath`/impressions/subjects/${mapped.subjectId}`;
    req.throwOn(401, CustomError, 'Unauthorized');
    req.throwOn(404, CustomError, 'The specified resource was not found');
    return req.callAsJson(impressionsSubjectsResponseSchema, requestOptions);
  }

  /**
   * Get a list of all subjects
   *
   * @return Response from the API call
   */
  async getSubjects(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ImpressionsSubjectsResponse1>> {
    const req = this.createRequest('GET', '/impressions/subjects');
    req.throwOn(401, CustomError, 'Unauthorized');
    req.throwOn(404, CustomError, 'The specified resource was not found');
    return req.callAsJson(impressionsSubjectsResponse1Schema, requestOptions);
  }

  /**
   * Get a list of all subject feedbacks
   *
   * @param subjectId Subject id
   * @return Response from the API call
   */
  async getFeedbacks(
    subjectId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ImpressionsSubjectsFeedbacksResponse1>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ subjectId: [subjectId, string()] });
    req.appendTemplatePath`/impressions/subjects/${mapped.subjectId}/feedbacks`;
    req.throwOn(401, CustomError, 'Unauthorized');
    req.throwOn(404, CustomError, 'The specified resource was not found');
    return req.callAsJson(
      impressionsSubjectsFeedbacksResponse1Schema,
      requestOptions
    );
  }

  /**
   * Add feedback from user
   *
   * @param subjectId    Subject id
   * @param body
   * @return Response from the API call
   */
  async addUserFeedback(
    subjectId: string,
    body?: Feedback,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ImpressionsSubjectsFeedbacksResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subjectId: [subjectId, string()],
      body: [body, optional(feedbackSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/impressions/subjects/${mapped.subjectId}/feedbacks`;
    req.throwOn(401, CustomError, 'Unauthorized');
    req.throwOn(404, CustomError, 'The specified resource was not found');
    return req.callAsJson(
      impressionsSubjectsFeedbacksResponseSchema,
      requestOptions
    );
  }
}
