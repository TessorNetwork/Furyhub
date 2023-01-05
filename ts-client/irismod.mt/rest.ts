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

export interface MtBalance {
  mt_id?: string;

  /** @format uint64 */
  amount?: string;
}

export interface MtDenom {
  id?: string;
  name?: string;

  /** @format byte */
  data?: string;
  owner?: string;
}

export interface MtMT {
  id?: string;

  /** @format uint64 */
  supply?: string;

  /** @format byte */
  data?: string;
}

/**
 * MsgBurnMTResponse defines the Msg/BurnMT response type.
 */
export type MtMsgBurnMTResponse = object;

/**
 * MsgEditMTResponse defines the Msg/EditMT response type.
 */
export type MtMsgEditMTResponse = object;

/**
 * MsgIssueDenomResponse defines the Msg/IssueDenom response type.
 */
export type MtMsgIssueDenomResponse = object;

/**
 * MsgMintMTResponse defines the Msg/MintMT response type.
 */
export type MtMsgMintMTResponse = object;

/**
 * MsgTransferDenomResponse defines the Msg/TransferDenom response type.
 */
export type MtMsgTransferDenomResponse = object;

/**
 * MsgTransferMTResponse defines the Msg/TransferMT response type.
 */
export type MtMsgTransferMTResponse = object;

export interface MtQueryBalancesResponse {
  balance?: MtBalance[];

  /**
   * message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface MtQueryDenomResponse {
  denom?: MtDenom;
}

export interface MtQueryDenomsResponse {
  denoms?: MtDenom[];

  /**
   * message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface MtQueryMTResponse {
  mt?: MtMT;
}

export interface MtQueryMTSupplyResponse {
  /** @format uint64 */
  amount?: string;
}

export interface MtQueryMTsResponse {
  mts?: MtMT[];

  /**
   * message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface MtQuerySupplyResponse {
  /** @format uint64 */
  amount?: string;
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
 * @title mt/genesis.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryDenoms
   * @summary Denoms queries all the denoms
   * @request GET:/irismod/mt/denoms
   */
  queryDenoms = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MtQueryDenomsResponse, RpcStatus>({
      path: `/irismod/mt/denoms`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySupply
   * @summary Supply queries the total supply of a given denom or owner
   * @request GET:/irismod/mt/denoms/supply
   */
  querySupply = (query?: { denom_id?: string; owner?: string }, params: RequestParams = {}) =>
    this.request<MtQuerySupplyResponse, RpcStatus>({
      path: `/irismod/mt/denoms/supply`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDenom
   * @summary Denom queries the definition of a given denom ID
   * @request GET:/irismod/mt/denoms/{denom_id}
   */
  queryDenom = (denomId: string, params: RequestParams = {}) =>
    this.request<MtQueryDenomResponse, RpcStatus>({
      path: `/irismod/mt/denoms/${denomId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMTs
   * @summary MTs queries all the MTs of a given denom ID
   * @request GET:/irismod/mt/mts/{denom_id}
   */
  queryMTs = (
    denomId: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MtQueryMTsResponse, RpcStatus>({
      path: `/irismod/mt/mts/${denomId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMt
   * @summary MT queries the MT of the given denom and mt ID
   * @request GET:/irismod/mt/mts/{denom_id}/{mt_id}
   */
  queryMT = (denomId: string, mtId: string, params: RequestParams = {}) =>
    this.request<MtQueryMTResponse, RpcStatus>({
      path: `/irismod/mt/mts/${denomId}/${mtId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMtSupply
   * @summary MTSupply queries the total supply of given denom and mt ID
   * @request GET:/irismod/mt/mts/{denom_id}/{mt_id}/supply
   */
  queryMTSupply = (denomId: string, mtId: string, params: RequestParams = {}) =>
    this.request<MtQueryMTSupplyResponse, RpcStatus>({
      path: `/irismod/mt/mts/${denomId}/${mtId}/supply`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBalances
   * @summary Balances queries the MT balances of a specified owner
   * @request GET:/irismod/mt/mts/{owner}/balances
   */
  queryBalances = (
    owner: string,
    query?: {
      denom_id?: string;
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MtQueryBalancesResponse, RpcStatus>({
      path: `/irismod/mt/mts/${owner}/balances`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
