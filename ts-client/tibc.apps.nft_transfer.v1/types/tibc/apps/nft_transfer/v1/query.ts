/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ClassTrace } from "./nft_transfer";

export const protobufPackage = "tibc.apps.nft_transfer.v1";

/**
 * QueryClassTraceRequest is the request type for the Query/ClassTrace RPC
 * method
 */
export interface QueryClassTraceRequest {
  /** hash (in hex format) of the class trace information. */
  hash: string;
}

/**
 * QueryClassTraceResponse is the response type for the Query/ClassTrace RPC
 * method.
 */
export interface QueryClassTraceResponse {
  /** class_trace returns the requested class trace information. */
  classTrace: ClassTrace | undefined;
}

/**
 * QueryConnectionsRequest is the request type for the Query/ClassTraces RPC
 * method
 */
export interface QueryClassTracesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/**
 * QueryConnectionsResponse is the response type for the Query/ClassTraces RPC
 * method.
 */
export interface QueryClassTracesResponse {
  /** class_traces returns all class trace information. */
  classTraces: ClassTrace[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

function createBaseQueryClassTraceRequest(): QueryClassTraceRequest {
  return { hash: "" };
}

export const QueryClassTraceRequest = {
  encode(message: QueryClassTraceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassTraceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassTraceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClassTraceRequest {
    return { hash: isSet(object.hash) ? String(object.hash) : "" };
  },

  toJSON(message: QueryClassTraceRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassTraceRequest>, I>>(object: I): QueryClassTraceRequest {
    const message = createBaseQueryClassTraceRequest();
    message.hash = object.hash ?? "";
    return message;
  },
};

function createBaseQueryClassTraceResponse(): QueryClassTraceResponse {
  return { classTrace: undefined };
}

export const QueryClassTraceResponse = {
  encode(message: QueryClassTraceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classTrace !== undefined) {
      ClassTrace.encode(message.classTrace, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassTraceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassTraceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classTrace = ClassTrace.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClassTraceResponse {
    return { classTrace: isSet(object.classTrace) ? ClassTrace.fromJSON(object.classTrace) : undefined };
  },

  toJSON(message: QueryClassTraceResponse): unknown {
    const obj: any = {};
    message.classTrace !== undefined
      && (obj.classTrace = message.classTrace ? ClassTrace.toJSON(message.classTrace) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassTraceResponse>, I>>(object: I): QueryClassTraceResponse {
    const message = createBaseQueryClassTraceResponse();
    message.classTrace = (object.classTrace !== undefined && object.classTrace !== null)
      ? ClassTrace.fromPartial(object.classTrace)
      : undefined;
    return message;
  },
};

function createBaseQueryClassTracesRequest(): QueryClassTracesRequest {
  return { pagination: undefined };
}

export const QueryClassTracesRequest = {
  encode(message: QueryClassTracesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassTracesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassTracesRequest();
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

  fromJSON(object: any): QueryClassTracesRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryClassTracesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassTracesRequest>, I>>(object: I): QueryClassTracesRequest {
    const message = createBaseQueryClassTracesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryClassTracesResponse(): QueryClassTracesResponse {
  return { classTraces: [], pagination: undefined };
}

export const QueryClassTracesResponse = {
  encode(message: QueryClassTracesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.classTraces) {
      ClassTrace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassTracesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassTracesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classTraces.push(ClassTrace.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryClassTracesResponse {
    return {
      classTraces: Array.isArray(object?.classTraces) ? object.classTraces.map((e: any) => ClassTrace.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryClassTracesResponse): unknown {
    const obj: any = {};
    if (message.classTraces) {
      obj.classTraces = message.classTraces.map((e) => e ? ClassTrace.toJSON(e) : undefined);
    } else {
      obj.classTraces = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassTracesResponse>, I>>(object: I): QueryClassTracesResponse {
    const message = createBaseQueryClassTracesResponse();
    message.classTraces = object.classTraces?.map((e) => ClassTrace.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query provides defines the gRPC querier service. */
export interface Query {
  /** ClassTrace queries a class trace information. */
  ClassTrace(request: QueryClassTraceRequest): Promise<QueryClassTraceResponse>;
  /** ClassTraces queries all class traces. */
  ClassTraces(request: QueryClassTracesRequest): Promise<QueryClassTracesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ClassTrace = this.ClassTrace.bind(this);
    this.ClassTraces = this.ClassTraces.bind(this);
  }
  ClassTrace(request: QueryClassTraceRequest): Promise<QueryClassTraceResponse> {
    const data = QueryClassTraceRequest.encode(request).finish();
    const promise = this.rpc.request("tibc.apps.nft_transfer.v1.Query", "ClassTrace", data);
    return promise.then((data) => QueryClassTraceResponse.decode(new _m0.Reader(data)));
  }

  ClassTraces(request: QueryClassTracesRequest): Promise<QueryClassTracesResponse> {
    const data = QueryClassTracesRequest.encode(request).finish();
    const promise = this.rpc.request("tibc.apps.nft_transfer.v1.Query", "ClassTraces", data);
    return promise.then((data) => QueryClassTracesResponse.decode(new _m0.Reader(data)));
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
