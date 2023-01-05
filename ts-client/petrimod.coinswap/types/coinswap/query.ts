/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "petrimod.coinswap";

/**
 * QueryLiquidityPoolRequest is request type for the Query/LiquidityPool RPC
 * method
 */
export interface QueryLiquidityPoolRequest {
  lptDenom: string;
}

/**
 * QueryLiquidityPoolResponse is response type for the Query/LiquidityPool RPC
 * method
 */
export interface QueryLiquidityPoolResponse {
  pool: PoolInfo | undefined;
}

/**
 * QueryLiquidityPoolsRequest is request type for the Query/LiquidityPools RPC
 * method
 */
export interface QueryLiquidityPoolsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/**
 * QueryLiquidityPoolsResponse is response type for the Query/LiquidityPools RPC
 * method
 */
export interface QueryLiquidityPoolsResponse {
  pools: PoolInfo[];
  pagination: PageResponse | undefined;
}

export interface PoolInfo {
  id: string;
  /** escrow account for deposit tokens */
  escrowAddress: string;
  /** main token balance */
  standard:
    | Coin
    | undefined;
  /** counterparty token balance */
  token:
    | Coin
    | undefined;
  /** liquidity token balance */
  lpt:
    | Coin
    | undefined;
  /** liquidity pool fee */
  fee: string;
}

function createBaseQueryLiquidityPoolRequest(): QueryLiquidityPoolRequest {
  return { lptDenom: "" };
}

export const QueryLiquidityPoolRequest = {
  encode(message: QueryLiquidityPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lptDenom !== "") {
      writer.uint32(10).string(message.lptDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLiquidityPoolRequest {
    return { lptDenom: isSet(object.lptDenom) ? String(object.lptDenom) : "" };
  },

  toJSON(message: QueryLiquidityPoolRequest): unknown {
    const obj: any = {};
    message.lptDenom !== undefined && (obj.lptDenom = message.lptDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLiquidityPoolRequest>, I>>(object: I): QueryLiquidityPoolRequest {
    const message = createBaseQueryLiquidityPoolRequest();
    message.lptDenom = object.lptDenom ?? "";
    return message;
  },
};

function createBaseQueryLiquidityPoolResponse(): QueryLiquidityPoolResponse {
  return { pool: undefined };
}

export const QueryLiquidityPoolResponse = {
  encode(message: QueryLiquidityPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      PoolInfo.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = PoolInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLiquidityPoolResponse {
    return { pool: isSet(object.pool) ? PoolInfo.fromJSON(object.pool) : undefined };
  },

  toJSON(message: QueryLiquidityPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? PoolInfo.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLiquidityPoolResponse>, I>>(object: I): QueryLiquidityPoolResponse {
    const message = createBaseQueryLiquidityPoolResponse();
    message.pool = (object.pool !== undefined && object.pool !== null) ? PoolInfo.fromPartial(object.pool) : undefined;
    return message;
  },
};

function createBaseQueryLiquidityPoolsRequest(): QueryLiquidityPoolsRequest {
  return { pagination: undefined };
}

export const QueryLiquidityPoolsRequest = {
  encode(message: QueryLiquidityPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLiquidityPoolsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryLiquidityPoolsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLiquidityPoolsRequest>, I>>(object: I): QueryLiquidityPoolsRequest {
    const message = createBaseQueryLiquidityPoolsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryLiquidityPoolsResponse(): QueryLiquidityPoolsResponse {
  return { pools: [], pagination: undefined };
}

export const QueryLiquidityPoolsResponse = {
  encode(message: QueryLiquidityPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      PoolInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(PoolInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLiquidityPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => PoolInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryLiquidityPoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) => e ? PoolInfo.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLiquidityPoolsResponse>, I>>(object: I): QueryLiquidityPoolsResponse {
    const message = createBaseQueryLiquidityPoolsResponse();
    message.pools = object.pools?.map((e) => PoolInfo.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBasePoolInfo(): PoolInfo {
  return { id: "", escrowAddress: "", standard: undefined, token: undefined, lpt: undefined, fee: "" };
}

export const PoolInfo = {
  encode(message: PoolInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.escrowAddress !== "") {
      writer.uint32(18).string(message.escrowAddress);
    }
    if (message.standard !== undefined) {
      Coin.encode(message.standard, writer.uint32(26).fork()).ldelim();
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(34).fork()).ldelim();
    }
    if (message.lpt !== undefined) {
      Coin.encode(message.lpt, writer.uint32(42).fork()).ldelim();
    }
    if (message.fee !== "") {
      writer.uint32(50).string(message.fee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.escrowAddress = reader.string();
          break;
        case 3:
          message.standard = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.token = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.lpt = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolInfo {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      escrowAddress: isSet(object.escrowAddress) ? String(object.escrowAddress) : "",
      standard: isSet(object.standard) ? Coin.fromJSON(object.standard) : undefined,
      token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
      lpt: isSet(object.lpt) ? Coin.fromJSON(object.lpt) : undefined,
      fee: isSet(object.fee) ? String(object.fee) : "",
    };
  },

  toJSON(message: PoolInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.escrowAddress !== undefined && (obj.escrowAddress = message.escrowAddress);
    message.standard !== undefined && (obj.standard = message.standard ? Coin.toJSON(message.standard) : undefined);
    message.token !== undefined && (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    message.lpt !== undefined && (obj.lpt = message.lpt ? Coin.toJSON(message.lpt) : undefined);
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolInfo>, I>>(object: I): PoolInfo {
    const message = createBasePoolInfo();
    message.id = object.id ?? "";
    message.escrowAddress = object.escrowAddress ?? "";
    message.standard = (object.standard !== undefined && object.standard !== null)
      ? Coin.fromPartial(object.standard)
      : undefined;
    message.token = (object.token !== undefined && object.token !== null) ? Coin.fromPartial(object.token) : undefined;
    message.lpt = (object.lpt !== undefined && object.lpt !== null) ? Coin.fromPartial(object.lpt) : undefined;
    message.fee = object.fee ?? "";
    return message;
  },
};

/** Query creates service with coinswap as rpc */
export interface Query {
  /**
   * LiquidityPool returns the liquidity pool for the provided
   * lpt_denom
   */
  LiquidityPool(request: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponse>;
  /** LiquidityPools returns all the liquidity pools available */
  LiquidityPools(request: QueryLiquidityPoolsRequest): Promise<QueryLiquidityPoolsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.LiquidityPool = this.LiquidityPool.bind(this);
    this.LiquidityPools = this.LiquidityPools.bind(this);
  }
  LiquidityPool(request: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponse> {
    const data = QueryLiquidityPoolRequest.encode(request).finish();
    const promise = this.rpc.request("petrimod.coinswap.Query", "LiquidityPool", data);
    return promise.then((data) => QueryLiquidityPoolResponse.decode(new _m0.Reader(data)));
  }

  LiquidityPools(request: QueryLiquidityPoolsRequest): Promise<QueryLiquidityPoolsResponse> {
    const data = QueryLiquidityPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("petrimod.coinswap.Query", "LiquidityPools", data);
    return promise.then((data) => QueryLiquidityPoolsResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
