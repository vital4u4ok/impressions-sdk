/**
 * APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ApikeysRequest, apikeysRequestSchema } from '../models/apikeysRequest';
import {
  ApikeysResponse,
  apikeysResponseSchema,
} from '../models/apikeysResponse';
import {
  ApikeysResponse1,
  apikeysResponse1Schema,
} from '../models/apikeysResponse1';
import { number, optional } from '../schema';
import { BaseController } from './baseController';

export class ApiKeyController extends BaseController {
  /**
   * Get all of current user's api getAllApiKeys
   *
   * @param skip  Number of keys to skip
   * @param limit Limit the number of keys in response
   * @return Response from the API call
   */
  async getAllApiKeys(
    skip?: number,
    limit?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ApikeysResponse>> {
    const req = this.createRequest('GET', '/apikeys');
    const mapped = req.prepareArgs({
      skip: [skip, optional(number())],
      limit: [limit, optional(number())],
    });
    req.query('skip', mapped.skip);
    req.query('limit', mapped.limit);
    return req.callAsJson(apikeysResponseSchema, requestOptions);
  }

  /**
   * Generate a new api key
   *
   * @param body
   * @return Response from the API call
   */
  async generateApiKey(
    body?: ApikeysRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ApikeysResponse1>> {
    const req = this.createRequest('POST', '/apikeys');
    const mapped = req.prepareArgs({
      body: [body, optional(apikeysRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(apikeysResponse1Schema, requestOptions);
  }
}