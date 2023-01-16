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

export interface HtlcAssetParam {
  /** name of the asset */
  denom?: string;

  /** asset supply limit */
  supply_limit?: HtlcSupplyLimit;

  /** denotes if asset is available or paused */
  active?: boolean;

  /** the address of the relayer process */
  deputy_address?: string;

  /** the fixed fee charged by the relayer process for outgoing swaps */
  fixed_fee?: string;

  /** Minimum swap amount */
  min_swap_amount?: string;

  /** Maximum swap amount */
  max_swap_amount?: string;

  /**
   * Minimum swap block lock
   * @format uint64
   */
  min_block_lock?: string;

  /**
   * Maximum swap block lock
   * @format uint64
   */
  max_block_lock?: string;
}

export interface HtlcAssetSupply {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  incoming_supply?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  outgoing_supply?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  current_supply?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  time_limited_current_supply?: V1Beta1Coin;
  time_elapsed?: string;
}

export interface HtlcHTLC {
  id?: string;
  sender?: string;
  to?: string;
  receiver_on_other_chain?: string;
  sender_on_other_chain?: string;
  amount?: V1Beta1Coin[];
  hash_lock?: string;
  secret?: string;

  /** @format uint64 */
  timestamp?: string;

  /** @format uint64 */
  expiration_height?: string;

  /**
   * - HTLC_STATE_OPEN: HTLC_STATE_OPEN defines an open state.
   *  - HTLC_STATE_COMPLETED: HTLC_STATE_COMPLETED defines a completed state.
   *  - HTLC_STATE_REFUNDED: HTLC_STATE_REFUNDED defines a refunded state.
   */
  state?: HtlcHTLCState;

  /** @format uint64 */
  closed_block?: string;
  transfer?: boolean;

  /**
   * - NONE: NONE defines an htlt none direction.
   *  - INCOMING: INCOMING defines an htlt incoming direction.
   *  - OUTGOING: OUTGOING defines an htlt outgoing direction.
   */
  direction?: HtlcSwapDirection;
}

/**
* - HTLC_STATE_OPEN: HTLC_STATE_OPEN defines an open state.
 - HTLC_STATE_COMPLETED: HTLC_STATE_COMPLETED defines a completed state.
 - HTLC_STATE_REFUNDED: HTLC_STATE_REFUNDED defines a refunded state.
*/
export enum HtlcHTLCState {
  HTLC_STATE_OPEN = "HTLC_STATE_OPEN",
  HTLC_STATE_COMPLETED = "HTLC_STATE_COMPLETED",
  HTLC_STATE_REFUNDED = "HTLC_STATE_REFUNDED",
}

export type HtlcMsgClaimHTLCResponse = object;

export interface HtlcMsgCreateHTLCResponse {
  id?: string;
}

export interface HtlcParams {
  asset_params?: HtlcAssetParam[];
}

export interface HtlcQueryAssetSuppliesResponse {
  asset_supplies?: HtlcAssetSupply[];
}

export interface HtlcQueryAssetSupplyResponse {
  asset_supply?: HtlcAssetSupply;
}

export interface HtlcQueryHTLCResponse {
  htlc?: HtlcHTLC;
}

export interface HtlcQueryParamsResponse {
  params?: HtlcParams;
}

export interface HtlcSupplyLimit {
  /** the absolute supply limit for an asset */
  limit?: string;

  /** boolean for if the supply is also limited by time */
  time_limited?: boolean;

  /** the duration for which the supply time limit applies */
  time_period?: string;

  /** the supply limit for an asset for each time period */
  time_based_limit?: string;
}

/**
* - NONE: NONE defines an htlt none direction.
 - INCOMING: INCOMING defines an htlt incoming direction.
 - OUTGOING: OUTGOING defines an htlt outgoing direction.
*/
export enum HtlcSwapDirection {
  NONE = "NONE",
  INCOMING = "INCOMING",
  OUTGOING = "OUTGOING",
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
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
  denom?: string;
  amount?: string;
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
 * @title htlc/genesis.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryHtlc
   * @summary HTLC queries the HTLC by the specified hash lock
   * @request GET:/irismod/htlc/htlcs/{id}
   */
  queryHTLC = (id: string, params: RequestParams = {}) =>
    this.request<HtlcQueryHTLCResponse, RpcStatus>({
      path: `/irismod/htlc/htlcs/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Params queries the htlc parameters
   * @request GET:/irismod/htlc/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<HtlcQueryParamsResponse, RpcStatus>({
      path: `/irismod/htlc/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAssetSupplies
   * @summary AssetSupplies queries the supplies of all assets
   * @request GET:/irismod/htlc/supplies
   */
  queryAssetSupplies = (params: RequestParams = {}) =>
    this.request<HtlcQueryAssetSuppliesResponse, RpcStatus>({
      path: `/irismod/htlc/supplies`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAssetSupply
   * @summary AssetSupply queries the supply of an asset
   * @request GET:/irismod/htlc/supplies/{denom}
   */
  queryAssetSupply = (denom: string, params: RequestParams = {}) =>
    this.request<HtlcQueryAssetSupplyResponse, RpcStatus>({
      path: `/irismod/htlc/supplies/${denom}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
