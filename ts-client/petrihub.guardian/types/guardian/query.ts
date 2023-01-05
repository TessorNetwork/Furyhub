/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Super } from "./guardian";

export const protobufPackage = "petrihub.guardian";

/** QuerySupersRequest is request type for the Query/Supers RPC method */
export interface QuerySupersRequest {
  /** pagination defines an optional pagination for the request */
  pagination: PageRequest | undefined;
}

/** QuerySupersResponse is response type for the Query/Supers RPC method */
export interface QuerySupersResponse {
  supers: Super[];
  pagination: PageResponse | undefined;
}

function createBaseQuerySupersRequest(): QuerySupersRequest {
  return { pagination: undefined };
}

export const QuerySupersRequest = {
  encode(message: QuerySupersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupersRequest();
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

  fromJSON(object: any): QuerySupersRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QuerySupersRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySupersRequest>, I>>(object: I): QuerySupersRequest {
    const message = createBaseQuerySupersRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySupersResponse(): QuerySupersResponse {
  return { supers: [], pagination: undefined };
}

export const QuerySupersResponse = {
  encode(message: QuerySupersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.supers) {
      Super.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supers.push(Super.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QuerySupersResponse {
    return {
      supers: Array.isArray(object?.supers) ? object.supers.map((e: any) => Super.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySupersResponse): unknown {
    const obj: any = {};
    if (message.supers) {
      obj.supers = message.supers.map((e) => e ? Super.toJSON(e) : undefined);
    } else {
      obj.supers = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySupersResponse>, I>>(object: I): QuerySupersResponse {
    const message = createBaseQuerySupersResponse();
    message.supers = object.supers?.map((e) => Super.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query creates service with guardian as RPC */
export interface Query {
  /** Supers returns all Supers */
  Supers(request: QuerySupersRequest): Promise<QuerySupersResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Supers = this.Supers.bind(this);
  }
  Supers(request: QuerySupersRequest): Promise<QuerySupersResponse> {
    const data = QuerySupersRequest.encode(request).finish();
    const promise = this.rpc.request("petrihub.guardian.Query", "Supers", data);
    return promise.then((data) => QuerySupersResponse.decode(new _m0.Reader(data)));
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
