/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { RequestContextState, requestContextStateFromJSON, requestContextStateToJSON } from "../service/service";
import { Feed, FeedValue } from "./oracle";

export const protobufPackage = "petrimod.oracle";

/** QueryFeedRequest is request type for the Query/Feed RPC method */
export interface QueryFeedRequest {
  feedName: string;
}

/** QueryFeedResponse is response type for the Query/Feed RPC method */
export interface QueryFeedResponse {
  feed: FeedContext | undefined;
}

/** QueryFeedsRequest is request type for the Query/Feeds RPC method */
export interface QueryFeedsRequest {
  state: string;
  /** pagination defines an optional pagination for the request */
  pagination: PageRequest | undefined;
}

/** QueryFeedsResponse is response type for the Query/Feeds RPC method */
export interface QueryFeedsResponse {
  feeds: FeedContext[];
  /** pagination defines an optional pagination for the request */
  pagination: PageResponse | undefined;
}

/** QueryFeedValueRequest is request type for the Query/FeedValue RPC method */
export interface QueryFeedValueRequest {
  feedName: string;
}

/** QueryFeedValueResponse is response type for the Query/FeedValue RPC method */
export interface QueryFeedValueResponse {
  feedValues: FeedValue[];
}

/** FeedContext defines the feed context struct */
export interface FeedContext {
  feed: Feed | undefined;
  serviceName: string;
  providers: string[];
  input: string;
  timeout: number;
  serviceFeeCap: Coin[];
  repeatedFrequency: number;
  responseThreshold: number;
  state: RequestContextState;
}

function createBaseQueryFeedRequest(): QueryFeedRequest {
  return { feedName: "" };
}

export const QueryFeedRequest = {
  encode(message: QueryFeedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedName !== "") {
      writer.uint32(10).string(message.feedName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeedRequest {
    return { feedName: isSet(object.feedName) ? String(object.feedName) : "" };
  },

  toJSON(message: QueryFeedRequest): unknown {
    const obj: any = {};
    message.feedName !== undefined && (obj.feedName = message.feedName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeedRequest>, I>>(object: I): QueryFeedRequest {
    const message = createBaseQueryFeedRequest();
    message.feedName = object.feedName ?? "";
    return message;
  },
};

function createBaseQueryFeedResponse(): QueryFeedResponse {
  return { feed: undefined };
}

export const QueryFeedResponse = {
  encode(message: QueryFeedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feed !== undefined) {
      FeedContext.encode(message.feed, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feed = FeedContext.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeedResponse {
    return { feed: isSet(object.feed) ? FeedContext.fromJSON(object.feed) : undefined };
  },

  toJSON(message: QueryFeedResponse): unknown {
    const obj: any = {};
    message.feed !== undefined && (obj.feed = message.feed ? FeedContext.toJSON(message.feed) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeedResponse>, I>>(object: I): QueryFeedResponse {
    const message = createBaseQueryFeedResponse();
    message.feed = (object.feed !== undefined && object.feed !== null)
      ? FeedContext.fromPartial(object.feed)
      : undefined;
    return message;
  },
};

function createBaseQueryFeedsRequest(): QueryFeedsRequest {
  return { state: "", pagination: undefined };
}

export const QueryFeedsRequest = {
  encode(message: QueryFeedsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== "") {
      writer.uint32(10).string(message.state);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeedsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeedsRequest {
    return {
      state: isSet(object.state) ? String(object.state) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryFeedsRequest): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeedsRequest>, I>>(object: I): QueryFeedsRequest {
    const message = createBaseQueryFeedsRequest();
    message.state = object.state ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryFeedsResponse(): QueryFeedsResponse {
  return { feeds: [], pagination: undefined };
}

export const QueryFeedsResponse = {
  encode(message: QueryFeedsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feeds) {
      FeedContext.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeedsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeds.push(FeedContext.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryFeedsResponse {
    return {
      feeds: Array.isArray(object?.feeds) ? object.feeds.map((e: any) => FeedContext.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryFeedsResponse): unknown {
    const obj: any = {};
    if (message.feeds) {
      obj.feeds = message.feeds.map((e) => e ? FeedContext.toJSON(e) : undefined);
    } else {
      obj.feeds = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeedsResponse>, I>>(object: I): QueryFeedsResponse {
    const message = createBaseQueryFeedsResponse();
    message.feeds = object.feeds?.map((e) => FeedContext.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryFeedValueRequest(): QueryFeedValueRequest {
  return { feedName: "" };
}

export const QueryFeedValueRequest = {
  encode(message: QueryFeedValueRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedName !== "") {
      writer.uint32(10).string(message.feedName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeedValueRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedValueRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeedValueRequest {
    return { feedName: isSet(object.feedName) ? String(object.feedName) : "" };
  },

  toJSON(message: QueryFeedValueRequest): unknown {
    const obj: any = {};
    message.feedName !== undefined && (obj.feedName = message.feedName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeedValueRequest>, I>>(object: I): QueryFeedValueRequest {
    const message = createBaseQueryFeedValueRequest();
    message.feedName = object.feedName ?? "";
    return message;
  },
};

function createBaseQueryFeedValueResponse(): QueryFeedValueResponse {
  return { feedValues: [] };
}

export const QueryFeedValueResponse = {
  encode(message: QueryFeedValueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feedValues) {
      FeedValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeedValueResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedValueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedValues.push(FeedValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeedValueResponse {
    return {
      feedValues: Array.isArray(object?.feedValues) ? object.feedValues.map((e: any) => FeedValue.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryFeedValueResponse): unknown {
    const obj: any = {};
    if (message.feedValues) {
      obj.feedValues = message.feedValues.map((e) => e ? FeedValue.toJSON(e) : undefined);
    } else {
      obj.feedValues = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeedValueResponse>, I>>(object: I): QueryFeedValueResponse {
    const message = createBaseQueryFeedValueResponse();
    message.feedValues = object.feedValues?.map((e) => FeedValue.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFeedContext(): FeedContext {
  return {
    feed: undefined,
    serviceName: "",
    providers: [],
    input: "",
    timeout: 0,
    serviceFeeCap: [],
    repeatedFrequency: 0,
    responseThreshold: 0,
    state: 0,
  };
}

export const FeedContext = {
  encode(message: FeedContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feed !== undefined) {
      Feed.encode(message.feed, writer.uint32(10).fork()).ldelim();
    }
    if (message.serviceName !== "") {
      writer.uint32(18).string(message.serviceName);
    }
    for (const v of message.providers) {
      writer.uint32(26).string(v!);
    }
    if (message.input !== "") {
      writer.uint32(34).string(message.input);
    }
    if (message.timeout !== 0) {
      writer.uint32(40).int64(message.timeout);
    }
    for (const v of message.serviceFeeCap) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.repeatedFrequency !== 0) {
      writer.uint32(56).uint64(message.repeatedFrequency);
    }
    if (message.responseThreshold !== 0) {
      writer.uint32(64).uint32(message.responseThreshold);
    }
    if (message.state !== 0) {
      writer.uint32(72).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeedContext {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feed = Feed.decode(reader, reader.uint32());
          break;
        case 2:
          message.serviceName = reader.string();
          break;
        case 3:
          message.providers.push(reader.string());
          break;
        case 4:
          message.input = reader.string();
          break;
        case 5:
          message.timeout = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.serviceFeeCap.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.repeatedFrequency = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.responseThreshold = reader.uint32();
          break;
        case 9:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeedContext {
    return {
      feed: isSet(object.feed) ? Feed.fromJSON(object.feed) : undefined,
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => String(e)) : [],
      input: isSet(object.input) ? String(object.input) : "",
      timeout: isSet(object.timeout) ? Number(object.timeout) : 0,
      serviceFeeCap: Array.isArray(object?.serviceFeeCap) ? object.serviceFeeCap.map((e: any) => Coin.fromJSON(e)) : [],
      repeatedFrequency: isSet(object.repeatedFrequency) ? Number(object.repeatedFrequency) : 0,
      responseThreshold: isSet(object.responseThreshold) ? Number(object.responseThreshold) : 0,
      state: isSet(object.state) ? requestContextStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: FeedContext): unknown {
    const obj: any = {};
    message.feed !== undefined && (obj.feed = message.feed ? Feed.toJSON(message.feed) : undefined);
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    if (message.providers) {
      obj.providers = message.providers.map((e) => e);
    } else {
      obj.providers = [];
    }
    message.input !== undefined && (obj.input = message.input);
    message.timeout !== undefined && (obj.timeout = Math.round(message.timeout));
    if (message.serviceFeeCap) {
      obj.serviceFeeCap = message.serviceFeeCap.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.serviceFeeCap = [];
    }
    message.repeatedFrequency !== undefined && (obj.repeatedFrequency = Math.round(message.repeatedFrequency));
    message.responseThreshold !== undefined && (obj.responseThreshold = Math.round(message.responseThreshold));
    message.state !== undefined && (obj.state = requestContextStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeedContext>, I>>(object: I): FeedContext {
    const message = createBaseFeedContext();
    message.feed = (object.feed !== undefined && object.feed !== null) ? Feed.fromPartial(object.feed) : undefined;
    message.serviceName = object.serviceName ?? "";
    message.providers = object.providers?.map((e) => e) || [];
    message.input = object.input ?? "";
    message.timeout = object.timeout ?? 0;
    message.serviceFeeCap = object.serviceFeeCap?.map((e) => Coin.fromPartial(e)) || [];
    message.repeatedFrequency = object.repeatedFrequency ?? 0;
    message.responseThreshold = object.responseThreshold ?? 0;
    message.state = object.state ?? 0;
    return message;
  },
};

/** Query creates service with guardian as rpc */
export interface Query {
  /** Feed queries the feed */
  Feed(request: QueryFeedRequest): Promise<QueryFeedResponse>;
  /** Feeds queries the feed list */
  Feeds(request: QueryFeedsRequest): Promise<QueryFeedsResponse>;
  /** FeedValue queries the feed value */
  FeedValue(request: QueryFeedValueRequest): Promise<QueryFeedValueResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Feed = this.Feed.bind(this);
    this.Feeds = this.Feeds.bind(this);
    this.FeedValue = this.FeedValue.bind(this);
  }
  Feed(request: QueryFeedRequest): Promise<QueryFeedResponse> {
    const data = QueryFeedRequest.encode(request).finish();
    const promise = this.rpc.request("petrimod.oracle.Query", "Feed", data);
    return promise.then((data) => QueryFeedResponse.decode(new _m0.Reader(data)));
  }

  Feeds(request: QueryFeedsRequest): Promise<QueryFeedsResponse> {
    const data = QueryFeedsRequest.encode(request).finish();
    const promise = this.rpc.request("petrimod.oracle.Query", "Feeds", data);
    return promise.then((data) => QueryFeedsResponse.decode(new _m0.Reader(data)));
  }

  FeedValue(request: QueryFeedValueRequest): Promise<QueryFeedValueResponse> {
    const data = QueryFeedValueRequest.encode(request).finish();
    const promise = this.rpc.request("petrimod.oracle.Query", "FeedValue", data);
    return promise.then((data) => QueryFeedValueResponse.decode(new _m0.Reader(data)));
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
