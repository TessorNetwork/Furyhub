/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Random, Request } from "./random";

export const protobufPackage = "petrimod.random";

/** QueryRandomRequest is request type for the Query/Random RPC method */
export interface QueryRandomRequest {
  reqId: string;
}

/** QueryParametersResponse is response type for the Query/Random RPC method */
export interface QueryRandomResponse {
  random: Random | undefined;
}

/**
 * QueryRandomRequestQueueRequest is request type for the
 * Query/RandomRequestQueue RPC method
 */
export interface QueryRandomRequestQueueRequest {
  height: number;
}

/**
 * QueryRandomRequestQueueResponse is response type for the
 * Query/RandomRequestQueue RPC method
 */
export interface QueryRandomRequestQueueResponse {
  requests: Request[];
}

function createBaseQueryRandomRequest(): QueryRandomRequest {
  return { reqId: "" };
}

export const QueryRandomRequest = {
  encode(message: QueryRandomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reqId !== "") {
      writer.uint32(10).string(message.reqId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRandomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRandomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reqId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRandomRequest {
    return { reqId: isSet(object.reqId) ? String(object.reqId) : "" };
  },

  toJSON(message: QueryRandomRequest): unknown {
    const obj: any = {};
    message.reqId !== undefined && (obj.reqId = message.reqId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRandomRequest>, I>>(object: I): QueryRandomRequest {
    const message = createBaseQueryRandomRequest();
    message.reqId = object.reqId ?? "";
    return message;
  },
};

function createBaseQueryRandomResponse(): QueryRandomResponse {
  return { random: undefined };
}

export const QueryRandomResponse = {
  encode(message: QueryRandomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.random !== undefined) {
      Random.encode(message.random, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRandomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRandomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.random = Random.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRandomResponse {
    return { random: isSet(object.random) ? Random.fromJSON(object.random) : undefined };
  },

  toJSON(message: QueryRandomResponse): unknown {
    const obj: any = {};
    message.random !== undefined && (obj.random = message.random ? Random.toJSON(message.random) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRandomResponse>, I>>(object: I): QueryRandomResponse {
    const message = createBaseQueryRandomResponse();
    message.random = (object.random !== undefined && object.random !== null)
      ? Random.fromPartial(object.random)
      : undefined;
    return message;
  },
};

function createBaseQueryRandomRequestQueueRequest(): QueryRandomRequestQueueRequest {
  return { height: 0 };
}

export const QueryRandomRequestQueueRequest = {
  encode(message: QueryRandomRequestQueueRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRandomRequestQueueRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRandomRequestQueueRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRandomRequestQueueRequest {
    return { height: isSet(object.height) ? Number(object.height) : 0 };
  },

  toJSON(message: QueryRandomRequestQueueRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = Math.round(message.height));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRandomRequestQueueRequest>, I>>(
    object: I,
  ): QueryRandomRequestQueueRequest {
    const message = createBaseQueryRandomRequestQueueRequest();
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseQueryRandomRequestQueueResponse(): QueryRandomRequestQueueResponse {
  return { requests: [] };
}

export const QueryRandomRequestQueueResponse = {
  encode(message: QueryRandomRequestQueueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.requests) {
      Request.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRandomRequestQueueResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRandomRequestQueueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requests.push(Request.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRandomRequestQueueResponse {
    return { requests: Array.isArray(object?.requests) ? object.requests.map((e: any) => Request.fromJSON(e)) : [] };
  },

  toJSON(message: QueryRandomRequestQueueResponse): unknown {
    const obj: any = {};
    if (message.requests) {
      obj.requests = message.requests.map((e) => e ? Request.toJSON(e) : undefined);
    } else {
      obj.requests = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRandomRequestQueueResponse>, I>>(
    object: I,
  ): QueryRandomRequestQueueResponse {
    const message = createBaseQueryRandomRequestQueueResponse();
    message.requests = object.requests?.map((e) => Request.fromPartial(e)) || [];
    return message;
  },
};

/** Query creates service with guardian as rpc */
export interface Query {
  /** Random queries the random result */
  Random(request: QueryRandomRequest): Promise<QueryRandomResponse>;
  /** RandomRequestQueue queries the random request queue */
  RandomRequestQueue(request: QueryRandomRequestQueueRequest): Promise<QueryRandomRequestQueueResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Random = this.Random.bind(this);
    this.RandomRequestQueue = this.RandomRequestQueue.bind(this);
  }
  Random(request: QueryRandomRequest): Promise<QueryRandomResponse> {
    const data = QueryRandomRequest.encode(request).finish();
    const promise = this.rpc.request("petrimod.random.Query", "Random", data);
    return promise.then((data) => QueryRandomResponse.decode(new _m0.Reader(data)));
  }

  RandomRequestQueue(request: QueryRandomRequestQueueRequest): Promise<QueryRandomRequestQueueResponse> {
    const data = QueryRandomRequestQueueRequest.encode(request).finish();
    const promise = this.rpc.request("petrimod.random.Query", "RandomRequestQueue", data);
    return promise.then((data) => QueryRandomRequestQueueResponse.decode(new _m0.Reader(data)));
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
