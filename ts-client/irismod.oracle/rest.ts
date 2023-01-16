/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface OracleFeed {
  feed_name?: string;
  description?: string;
  aggregate_func?: string;
  value_json_path?: string;

  /** @format uint64 */
  latest_history?: string;
  request_context_id?: string;
  creator?: string;
}

export interface OracleFeedContext {
  feed?: OracleFeed;
  service_name?: string;
  providers?: string[];
  input?: string;

  /** @format int64 */
  timeout?: string;
  service_fee_cap?: V1Beta1Coin[];

  /** @format uint64 */
  repeated_frequency?: string;

  /** @format int64 */
  response_threshold?: number;

  /**
   * - RUNNING: RUNNING defines the running request context status
   *  - PAUSED: PAUSED defines the paused request context status
   *  - COMPLETED: COMPLETED defines the completed request context status
   */
  state?: ServiceRequestContextState;
}

export interface OracleFeedValue {
  data?: string;

  /** @format date-time */
  timestamp?: string;
}

export type OracleMsgCreateFeedResponse = object;

export type OracleMsgEditFeedResponse = object;

export type OracleMsgPauseFeedResponse = object;

export type OracleMsgStartFeedResponse = object;

export interface OracleQueryFeedResponse {
  feed?: OracleFeedContext;
}

export interface OracleQueryFeedValueResponse {
  feed_values?: OracleFeedValue[];
}

export interface OracleQueryFeedsResponse {
  feeds?: OracleFeedContext[];

  /**
   * pagination defines an optional pagination for the request
   * message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* - RUNNING: RUNNING defines the running request context status
 - PAUSED: PAUSED defines the paused request context status
 - COMPLETED: COMPLETED defines the completed request context status
*/
export enum ServiceRequestContextState {
  RUNNING = "RUNNING",
  PAUSED = "PAUSED",
  COMPLETED = "COMPLETED",
}

/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
  denom?: string;
  amount?: string;
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest page = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs. count_total
   * is only respected when offset is used. It is ignored when key is set.
   */
  count_total?: boolean;
}

/**
* message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently
   * @format byte
   */
  next_key?: string;

  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   * @format uint64
   */
  total?: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title oracle/genesis.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryFeeds
   * @summary Feeds queries the feed list
   * @request GET:/irismod/oracle/feeds
   */
  queryFeeds = (
    query?: {
      state?: string;
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<OracleQueryFeedsResponse, RpcStatus>({
      path: `/irismod/oracle/feeds`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFeed
   * @summary Feed queries the feed
   * @request GET:/irismod/oracle/feeds/{feed_name}
   */
  queryFeed = (feedName: string, params: RequestParams = {}) =>
    this.request<OracleQueryFeedResponse, RpcStatus>({
      path: `/irismod/oracle/feeds/${feedName}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFeedValue
   * @summary FeedValue queries the feed value
   * @request GET:/irismod/oracle/feeds/{feed_name}/values
   */
  queryFeedValue = (feedName: string, params: RequestParams = {}) =>
    this.request<OracleQueryFeedValueResponse, RpcStatus>({
      path: `/irismod/oracle/feeds/${feedName}/values`,
      method: "GET",
      format: "json",
      ...params,
    });
}
