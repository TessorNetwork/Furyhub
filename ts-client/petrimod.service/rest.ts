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

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

export type ServiceMsgBindServiceResponse = object;

export interface ServiceMsgCallServiceResponse {
  request_context_id?: string;
}

export type ServiceMsgDefineServiceResponse = object;

export type ServiceMsgDisableServiceBindingResponse = object;

export type ServiceMsgEnableServiceBindingResponse = object;

export type ServiceMsgKillRequestContextResponse = object;

export type ServiceMsgPauseRequestContextResponse = object;

export type ServiceMsgRefundServiceDepositResponse = object;

export type ServiceMsgRespondServiceResponse = object;

export type ServiceMsgSetWithdrawAddressResponse = object;

export type ServiceMsgStartRequestContextResponse = object;

export type ServiceMsgUpdateRequestContextResponse = object;

export type ServiceMsgUpdateServiceBindingResponse = object;

export type ServiceMsgWithdrawEarnedFeesResponse = object;

export interface ServiceParams {
  /** @format int64 */
  max_request_timeout?: string;

  /** @format int64 */
  min_deposit_multiple?: string;
  min_deposit?: V1Beta1Coin[];
  service_fee_tax?: string;
  slash_fraction?: string;
  complaint_retrospect?: string;
  arbitration_time_limit?: string;

  /** @format uint64 */
  tx_size_limit?: string;
  base_denom?: string;
  restricted_service_fee_denom?: boolean;
}

export interface ServiceQueryBindingResponse {
  service_binding?: ServiceServiceBinding;
}

export interface ServiceQueryBindingsResponse {
  service_bindings?: ServiceServiceBinding[];

  /**
   * message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface ServiceQueryDefinitionResponse {
  service_definition?: ServiceServiceDefinition;
}

export interface ServiceQueryEarnedFeesResponse {
  fees?: V1Beta1Coin[];
}

export interface ServiceQueryParamsResponse {
  params?: ServiceParams;

  /**
   * message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  res?: V1Beta1PageResponse;
}

export interface ServiceQueryRequestContextResponse {
  request_context?: ServiceRequestContext;
}

export interface ServiceQueryRequestResponse {
  request?: ServiceRequest;
}

export interface ServiceQueryRequestsByReqCtxResponse {
  requests?: ServiceRequest[];

  /**
   * message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface ServiceQueryRequestsResponse {
  requests?: ServiceRequest[];

  /**
   * message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface ServiceQueryResponseResponse {
  response?: ServiceResponse;
}

export interface ServiceQueryResponsesResponse {
  responses?: ServiceResponse[];

  /**
   * message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface ServiceQuerySchemaResponse {
  schema?: string;
}

export interface ServiceQueryWithdrawAddressResponse {
  withdraw_address?: string;
}

export interface ServiceRequest {
  id?: string;
  service_name?: string;
  provider?: string;
  consumer?: string;
  input?: string;
  service_fee?: V1Beta1Coin[];

  /** @format int64 */
  request_height?: string;

  /** @format int64 */
  expiration_height?: string;
  request_context_id?: string;

  /** @format uint64 */
  request_context_batch_counter?: string;
}

export interface ServiceRequestContext {
  service_name?: string;
  providers?: string[];
  consumer?: string;
  input?: string;
  service_fee_cap?: V1Beta1Coin[];
  module_name?: string;

  /** @format int64 */
  timeout?: string;
  repeated?: boolean;

  /** @format uint64 */
  repeated_frequency?: string;

  /** @format int64 */
  repeated_total?: string;

  /** @format uint64 */
  batch_counter?: string;

  /** @format int64 */
  batch_request_count?: number;

  /** @format int64 */
  batch_response_count?: number;

  /** @format int64 */
  batch_response_threshold?: number;

  /** @format int64 */
  response_threshold?: number;

  /**
   * - BATCH_RUNNING: BATCH_RUNNING defines the running batch status.
   *  - BATCH_COMPLETED: BATCH_COMPLETED defines the completed batch status.
   */
  batch_state?: ServiceRequestContextBatchState;

  /**
   * - RUNNING: RUNNING defines the running request context status
   *  - PAUSED: PAUSED defines the paused request context status
   *  - COMPLETED: COMPLETED defines the completed request context status
   */
  state?: ServiceRequestContextState;
}

/**
* - BATCH_RUNNING: BATCH_RUNNING defines the running batch status.
 - BATCH_COMPLETED: BATCH_COMPLETED defines the completed batch status.
*/
export enum ServiceRequestContextBatchState {
  BATCH_RUNNING = "BATCH_RUNNING",
  BATCH_COMPLETED = "BATCH_COMPLETED",
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

export interface ServiceResponse {
  provider?: string;
  consumer?: string;
  result?: string;
  output?: string;
  request_context_id?: string;

  /** @format uint64 */
  request_context_batch_counter?: string;
}

export interface ServiceServiceBinding {
  service_name?: string;
  provider?: string;
  deposit?: V1Beta1Coin[];
  pricing?: string;

  /** @format uint64 */
  qos?: string;
  options?: string;
  available?: boolean;

  /** @format date-time */
  disabled_time?: string;
  owner?: string;
}

export interface ServiceServiceDefinition {
  name?: string;
  description?: string;
  tags?: string[];
  author?: string;
  author_description?: string;
  schemas?: string;
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
 * @title service/genesis.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryBindings
   * @summary Bindings returns all service Bindings with service name and owner
   * @request GET:/petrimod/service/bindings/{service_name}
   */
  queryBindings = (
    serviceName: string,
    query?: {
      owner?: string;
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ServiceQueryBindingsResponse, RpcStatus>({
      path: `/petrimod/service/bindings/${serviceName}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBinding
   * @summary Binding returns service Binding with service name and provider
   * @request GET:/petrimod/service/bindings/{service_name}/{provider}
   */
  queryBinding = (serviceName: string, provider: string, params: RequestParams = {}) =>
    this.request<ServiceQueryBindingResponse, RpcStatus>({
      path: `/petrimod/service/bindings/${serviceName}/${provider}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRequestContext
   * @summary RequestContext returns the request context
   * @request GET:/petrimod/service/contexts/{request_context_id}
   */
  queryRequestContext = (requestContextId: string, params: RequestParams = {}) =>
    this.request<ServiceQueryRequestContextResponse, RpcStatus>({
      path: `/petrimod/service/contexts/${requestContextId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDefinition
   * @summary Definition returns service definition
   * @request GET:/petrimod/service/definitions/{service_name}
   */
  queryDefinition = (serviceName: string, params: RequestParams = {}) =>
    this.request<ServiceQueryDefinitionResponse, RpcStatus>({
      path: `/petrimod/service/definitions/${serviceName}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryEarnedFees
   * @summary EarnedFees returns the earned service fee of one provider
   * @request GET:/petrimod/service/fees/{provider}
   */
  queryEarnedFees = (provider: string, params: RequestParams = {}) =>
    this.request<ServiceQueryEarnedFeesResponse, RpcStatus>({
      path: `/petrimod/service/fees/${provider}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryWithdrawAddress
   * @summary WithdrawAddress returns the withdraw address of the binding owner
   * @request GET:/petrimod/service/owners/{owner}/withdraw-address
   */
  queryWithdrawAddress = (owner: string, params: RequestParams = {}) =>
    this.request<ServiceQueryWithdrawAddressResponse, RpcStatus>({
      path: `/petrimod/service/owners/${owner}/withdraw-address`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Params queries the service parameters
   * @request GET:/petrimod/service/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<ServiceQueryParamsResponse, RpcStatus>({
      path: `/petrimod/service/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRequestsByReqCtx
   * @summary RequestsByReqCtx returns all requests of one service call batch
   * @request GET:/petrimod/service/requests/{request_context_id}/{batch_counter}
   */
  queryRequestsByReqCtx = (
    requestContextId: string,
    batchCounter: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ServiceQueryRequestsByReqCtxResponse, RpcStatus>({
      path: `/petrimod/service/requests/${requestContextId}/${batchCounter}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRequest
   * @summary Request returns the request
   * @request GET:/petrimod/service/requests/{request_id}
   */
  queryRequest = (requestId: string, params: RequestParams = {}) =>
    this.request<ServiceQueryRequestResponse, RpcStatus>({
      path: `/petrimod/service/requests/${requestId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRequests
   * @summary Request returns all requests of one service with provider
   * @request GET:/petrimod/service/requests/{service_name}/{provider}
   */
  queryRequests = (
    serviceName: string,
    provider: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ServiceQueryRequestsResponse, RpcStatus>({
      path: `/petrimod/service/requests/${serviceName}/${provider}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryResponses
   * @summary Responses returns all responses of one service call batch
   * @request GET:/petrimod/service/responses/{request_context_id}/{batch_counter}
   */
  queryResponses = (
    requestContextId: string,
    batchCounter: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ServiceQueryResponsesResponse, RpcStatus>({
      path: `/petrimod/service/responses/${requestContextId}/${batchCounter}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryResponse
   * @summary Response returns the response of request
   * @request GET:/petrimod/service/responses/{request_id}
   */
  queryResponse = (requestId: string, params: RequestParams = {}) =>
    this.request<ServiceQueryResponseResponse, RpcStatus>({
      path: `/petrimod/service/responses/${requestId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySchema
   * @summary Schema returns the schema
   * @request GET:/petrimod/service/schemas/{schema_name}
   */
  querySchema = (schemaName: string, params: RequestParams = {}) =>
    this.request<ServiceQuerySchemaResponse, RpcStatus>({
      path: `/petrimod/service/schemas/${schemaName}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
