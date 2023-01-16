/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Params } from "./farm";

export const protobufPackage = "irismod.farm";

export interface QueryFarmPoolsRequest {
  pagination: PageRequest | undefined;
}

export interface FarmPoolEntry {
  id: string;
  creator: string;
  description: string;
  startHeight: number;
  endHeight: number;
  editable: boolean;
  expired: boolean;
  totalLptLocked: Coin | undefined;
  totalReward: Coin[];
  remainingReward: Coin[];
  rewardPerBlock: Coin[];
}

export interface QueryFarmPoolsResponse {
  pools: FarmPoolEntry[];
  pagination: PageResponse | undefined;
}

export interface QueryFarmPoolRequest {
  id: string;
}

export interface QueryFarmPoolResponse {
  pool: FarmPoolEntry | undefined;
}

export interface QueryFarmerRequest {
  farmer: string;
  poolId: string;
}

export interface QueryFarmerResponse {
  list: LockedInfo[];
  height: number;
}

export interface QueryParamsRequest {
}

export interface QueryParamsResponse {
  params: Params | undefined;
}

export interface LockedInfo {
  poolId: string;
  locked: Coin | undefined;
  pendingReward: Coin[];
}

function createBaseQueryFarmPoolsRequest(): QueryFarmPoolsRequest {
  return { pagination: undefined };
}

export const QueryFarmPoolsRequest = {
  encode(message: QueryFarmPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFarmPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFarmPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFarmPoolsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryFarmPoolsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFarmPoolsRequest>, I>>(object: I): QueryFarmPoolsRequest {
    const message = createBaseQueryFarmPoolsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseFarmPoolEntry(): FarmPoolEntry {
  return {
    id: "",
    creator: "",
    description: "",
    startHeight: 0,
    endHeight: 0,
    editable: false,
    expired: false,
    totalLptLocked: undefined,
    totalReward: [],
    remainingReward: [],
    rewardPerBlock: [],
  };
}

export const FarmPoolEntry = {
  encode(message: FarmPoolEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.startHeight !== 0) {
      writer.uint32(32).int64(message.startHeight);
    }
    if (message.endHeight !== 0) {
      writer.uint32(40).int64(message.endHeight);
    }
    if (message.editable === true) {
      writer.uint32(48).bool(message.editable);
    }
    if (message.expired === true) {
      writer.uint32(56).bool(message.expired);
    }
    if (message.totalLptLocked !== undefined) {
      Coin.encode(message.totalLptLocked, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.totalReward) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.remainingReward) {
      Coin.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.rewardPerBlock) {
      Coin.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FarmPoolEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFarmPoolEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.startHeight = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.endHeight = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.editable = reader.bool();
          break;
        case 7:
          message.expired = reader.bool();
          break;
        case 8:
          message.totalLptLocked = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.totalReward.push(Coin.decode(reader, reader.uint32()));
          break;
        case 10:
          message.remainingReward.push(Coin.decode(reader, reader.uint32()));
          break;
        case 11:
          message.rewardPerBlock.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FarmPoolEntry {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      description: isSet(object.description) ? String(object.description) : "",
      startHeight: isSet(object.startHeight) ? Number(object.startHeight) : 0,
      endHeight: isSet(object.endHeight) ? Number(object.endHeight) : 0,
      editable: isSet(object.editable) ? Boolean(object.editable) : false,
      expired: isSet(object.expired) ? Boolean(object.expired) : false,
      totalLptLocked: isSet(object.totalLptLocked) ? Coin.fromJSON(object.totalLptLocked) : undefined,
      totalReward: Array.isArray(object?.totalReward) ? object.totalReward.map((e: any) => Coin.fromJSON(e)) : [],
      remainingReward: Array.isArray(object?.remainingReward)
        ? object.remainingReward.map((e: any) => Coin.fromJSON(e))
        : [],
      rewardPerBlock: Array.isArray(object?.rewardPerBlock)
        ? object.rewardPerBlock.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FarmPoolEntry): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.creator !== undefined && (obj.creator = message.creator);
    message.description !== undefined && (obj.description = message.description);
    message.startHeight !== undefined && (obj.startHeight = Math.round(message.startHeight));
    message.endHeight !== undefined && (obj.endHeight = Math.round(message.endHeight));
    message.editable !== undefined && (obj.editable = message.editable);
    message.expired !== undefined && (obj.expired = message.expired);
    message.totalLptLocked !== undefined
      && (obj.totalLptLocked = message.totalLptLocked ? Coin.toJSON(message.totalLptLocked) : undefined);
    if (message.totalReward) {
      obj.totalReward = message.totalReward.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalReward = [];
    }
    if (message.remainingReward) {
      obj.remainingReward = message.remainingReward.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.remainingReward = [];
    }
    if (message.rewardPerBlock) {
      obj.rewardPerBlock = message.rewardPerBlock.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewardPerBlock = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FarmPoolEntry>, I>>(object: I): FarmPoolEntry {
    const message = createBaseFarmPoolEntry();
    message.id = object.id ?? "";
    message.creator = object.creator ?? "";
    message.description = object.description ?? "";
    message.startHeight = object.startHeight ?? 0;
    message.endHeight = object.endHeight ?? 0;
    message.editable = object.editable ?? false;
    message.expired = object.expired ?? false;
    message.totalLptLocked = (object.totalLptLocked !== undefined && object.totalLptLocked !== null)
      ? Coin.fromPartial(object.totalLptLocked)
      : undefined;
    message.totalReward = object.totalReward?.map((e) => Coin.fromPartial(e)) || [];
    message.remainingReward = object.remainingReward?.map((e) => Coin.fromPartial(e)) || [];
    message.rewardPerBlock = object.rewardPerBlock?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryFarmPoolsResponse(): QueryFarmPoolsResponse {
  return { pools: [], pagination: undefined };
}

export const QueryFarmPoolsResponse = {
  encode(message: QueryFarmPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      FarmPoolEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFarmPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFarmPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(FarmPoolEntry.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryFarmPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => FarmPoolEntry.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryFarmPoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) => e ? FarmPoolEntry.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFarmPoolsResponse>, I>>(object: I): QueryFarmPoolsResponse {
    const message = createBaseQueryFarmPoolsResponse();
    message.pools = object.pools?.map((e) => FarmPoolEntry.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryFarmPoolRequest(): QueryFarmPoolRequest {
  return { id: "" };
}

export const QueryFarmPoolRequest = {
  encode(message: QueryFarmPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFarmPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFarmPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFarmPoolRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryFarmPoolRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFarmPoolRequest>, I>>(object: I): QueryFarmPoolRequest {
    const message = createBaseQueryFarmPoolRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryFarmPoolResponse(): QueryFarmPoolResponse {
  return { pool: undefined };
}

export const QueryFarmPoolResponse = {
  encode(message: QueryFarmPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      FarmPoolEntry.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFarmPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFarmPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = FarmPoolEntry.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFarmPoolResponse {
    return { pool: isSet(object.pool) ? FarmPoolEntry.fromJSON(object.pool) : undefined };
  },

  toJSON(message: QueryFarmPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? FarmPoolEntry.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFarmPoolResponse>, I>>(object: I): QueryFarmPoolResponse {
    const message = createBaseQueryFarmPoolResponse();
    message.pool = (object.pool !== undefined && object.pool !== null)
      ? FarmPoolEntry.fromPartial(object.pool)
      : undefined;
    return message;
  },
};

function createBaseQueryFarmerRequest(): QueryFarmerRequest {
  return { farmer: "", poolId: "" };
}

export const QueryFarmerRequest = {
  encode(message: QueryFarmerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.farmer !== "") {
      writer.uint32(10).string(message.farmer);
    }
    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFarmerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFarmerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.farmer = reader.string();
          break;
        case 2:
          message.poolId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFarmerRequest {
    return {
      farmer: isSet(object.farmer) ? String(object.farmer) : "",
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
    };
  },

  toJSON(message: QueryFarmerRequest): unknown {
    const obj: any = {};
    message.farmer !== undefined && (obj.farmer = message.farmer);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFarmerRequest>, I>>(object: I): QueryFarmerRequest {
    const message = createBaseQueryFarmerRequest();
    message.farmer = object.farmer ?? "";
    message.poolId = object.poolId ?? "";
    return message;
  },
};

function createBaseQueryFarmerResponse(): QueryFarmerResponse {
  return { list: [], height: 0 };
}

export const QueryFarmerResponse = {
  encode(message: QueryFarmerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.list) {
      LockedInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.height !== 0) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFarmerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFarmerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.list.push(LockedInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.height = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFarmerResponse {
    return {
      list: Array.isArray(object?.list) ? object.list.map((e: any) => LockedInfo.fromJSON(e)) : [],
      height: isSet(object.height) ? Number(object.height) : 0,
    };
  },

  toJSON(message: QueryFarmerResponse): unknown {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map((e) => e ? LockedInfo.toJSON(e) : undefined);
    } else {
      obj.list = [];
    }
    message.height !== undefined && (obj.height = Math.round(message.height));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFarmerResponse>, I>>(object: I): QueryFarmerResponse {
    const message = createBaseQueryFarmerResponse();
    message.list = object.list?.map((e) => LockedInfo.fromPartial(e)) || [];
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseLockedInfo(): LockedInfo {
  return { poolId: "", locked: undefined, pendingReward: [] };
}

export const LockedInfo = {
  encode(message: LockedInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.locked !== undefined) {
      Coin.encode(message.locked, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.pendingReward) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockedInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.locked = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.pendingReward.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockedInfo {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      locked: isSet(object.locked) ? Coin.fromJSON(object.locked) : undefined,
      pendingReward: Array.isArray(object?.pendingReward) ? object.pendingReward.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: LockedInfo): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.locked !== undefined && (obj.locked = message.locked ? Coin.toJSON(message.locked) : undefined);
    if (message.pendingReward) {
      obj.pendingReward = message.pendingReward.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.pendingReward = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LockedInfo>, I>>(object: I): LockedInfo {
    const message = createBaseLockedInfo();
    message.poolId = object.poolId ?? "";
    message.locked = (object.locked !== undefined && object.locked !== null)
      ? Coin.fromPartial(object.locked)
      : undefined;
    message.pendingReward = object.pendingReward?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

export interface Query {
  FarmPools(request: QueryFarmPoolsRequest): Promise<QueryFarmPoolsResponse>;
  FarmPool(request: QueryFarmPoolRequest): Promise<QueryFarmPoolResponse>;
  Farmer(request: QueryFarmerRequest): Promise<QueryFarmerResponse>;
  /** Params queries the htlc parameters */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.FarmPools = this.FarmPools.bind(this);
    this.FarmPool = this.FarmPool.bind(this);
    this.Farmer = this.Farmer.bind(this);
    this.Params = this.Params.bind(this);
  }
  FarmPools(request: QueryFarmPoolsRequest): Promise<QueryFarmPoolsResponse> {
    const data = QueryFarmPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("irismod.farm.Query", "FarmPools", data);
    return promise.then((data) => QueryFarmPoolsResponse.decode(new _m0.Reader(data)));
  }

  FarmPool(request: QueryFarmPoolRequest): Promise<QueryFarmPoolResponse> {
    const data = QueryFarmPoolRequest.encode(request).finish();
    const promise = this.rpc.request("irismod.farm.Query", "FarmPool", data);
    return promise.then((data) => QueryFarmPoolResponse.decode(new _m0.Reader(data)));
  }

  Farmer(request: QueryFarmerRequest): Promise<QueryFarmerResponse> {
    const data = QueryFarmerRequest.encode(request).finish();
    const promise = this.rpc.request("irismod.farm.Query", "Farmer", data);
    return promise.then((data) => QueryFarmerResponse.decode(new _m0.Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("irismod.farm.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
