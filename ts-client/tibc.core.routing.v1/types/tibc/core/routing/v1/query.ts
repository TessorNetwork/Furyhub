/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "tibc.core.routing.v1";

/**
 * QueryRoutingRulesRequest is the request type for the
 * RoutingRules RPC method
 */
export interface QueryRoutingRulesRequest {
}

/** QueryRoutingRulesResponse defines the routing rules query response */
export interface QueryRoutingRulesResponse {
  /** rule string array */
  rules: string[];
}

function createBaseQueryRoutingRulesRequest(): QueryRoutingRulesRequest {
  return {};
}

export const QueryRoutingRulesRequest = {
  encode(_: QueryRoutingRulesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRoutingRulesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRoutingRulesRequest();
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

  fromJSON(_: any): QueryRoutingRulesRequest {
    return {};
  },

  toJSON(_: QueryRoutingRulesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRoutingRulesRequest>, I>>(_: I): QueryRoutingRulesRequest {
    const message = createBaseQueryRoutingRulesRequest();
    return message;
  },
};

function createBaseQueryRoutingRulesResponse(): QueryRoutingRulesResponse {
  return { rules: [] };
}

export const QueryRoutingRulesResponse = {
  encode(message: QueryRoutingRulesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rules) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRoutingRulesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRoutingRulesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rules.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRoutingRulesResponse {
    return { rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => String(e)) : [] };
  },

  toJSON(message: QueryRoutingRulesResponse): unknown {
    const obj: any = {};
    if (message.rules) {
      obj.rules = message.rules.map((e) => e);
    } else {
      obj.rules = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRoutingRulesResponse>, I>>(object: I): QueryRoutingRulesResponse {
    const message = createBaseQueryRoutingRulesResponse();
    message.rules = object.rules?.map((e) => e) || [];
    return message;
  },
};

/** Query provides defines the gRPC querier service */
export interface Query {
  /** RoutingRules queries all routing rules. */
  RoutingRules(request: QueryRoutingRulesRequest): Promise<QueryRoutingRulesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RoutingRules = this.RoutingRules.bind(this);
  }
  RoutingRules(request: QueryRoutingRulesRequest): Promise<QueryRoutingRulesResponse> {
    const data = QueryRoutingRulesRequest.encode(request).finish();
    const promise = this.rpc.request("tibc.core.routing.v1.Query", "RoutingRules", data);
    return promise.then((data) => QueryRoutingRulesResponse.decode(new _m0.Reader(data)));
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
