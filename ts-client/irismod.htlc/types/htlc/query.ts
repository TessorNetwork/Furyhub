/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { AssetSupply, HTLC, Params } from "./htlc";

export const protobufPackage = "irismod.htlc";

/** QueryHTLCRequest is the request type for the Query/HTLC RPC method */
export interface QueryHTLCRequest {
  id: string;
}

/** QueryBalanceResponse is the response type for the Query/HTLC RPC method */
export interface QueryHTLCResponse {
  htlc: HTLC | undefined;
}

/** QueryAssetSupplyRequest is request type for the Query/AssetSupply RPC method */
export interface QueryAssetSupplyRequest {
  denom: string;
}

/**
 * QueryAssetSupplyResponse is response type for the Query/AssetSupply RPC
 * method
 */
export interface QueryAssetSupplyResponse {
  assetSupply: AssetSupply | undefined;
}

/**
 * QueryAssetSuppliesRequest is request type for the Query/AssetSupplies RPC
 * method
 */
export interface QueryAssetSuppliesRequest {
}

/**
 * QueryAssetSuppliesResponse is response type for the Query/AssetSupplies RPC
 * method
 */
export interface QueryAssetSuppliesResponse {
  assetSupplies: AssetSupply[];
}

/** QueryParamsRequest is request type for the Query/Parameters RPC method */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Parameters RPC method */
export interface QueryParamsResponse {
  params: Params | undefined;
}

function createBaseQueryHTLCRequest(): QueryHTLCRequest {
  return { id: "" };
}

export const QueryHTLCRequest = {
  encode(message: QueryHTLCRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHTLCRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHTLCRequest();
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

  fromJSON(object: any): QueryHTLCRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryHTLCRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryHTLCRequest>, I>>(object: I): QueryHTLCRequest {
    const message = createBaseQueryHTLCRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryHTLCResponse(): QueryHTLCResponse {
  return { htlc: undefined };
}

export const QueryHTLCResponse = {
  encode(message: QueryHTLCResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.htlc !== undefined) {
      HTLC.encode(message.htlc, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHTLCResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHTLCResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.htlc = HTLC.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHTLCResponse {
    return { htlc: isSet(object.htlc) ? HTLC.fromJSON(object.htlc) : undefined };
  },

  toJSON(message: QueryHTLCResponse): unknown {
    const obj: any = {};
    message.htlc !== undefined && (obj.htlc = message.htlc ? HTLC.toJSON(message.htlc) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryHTLCResponse>, I>>(object: I): QueryHTLCResponse {
    const message = createBaseQueryHTLCResponse();
    message.htlc = (object.htlc !== undefined && object.htlc !== null) ? HTLC.fromPartial(object.htlc) : undefined;
    return message;
  },
};

function createBaseQueryAssetSupplyRequest(): QueryAssetSupplyRequest {
  return { denom: "" };
}

export const QueryAssetSupplyRequest = {
  encode(message: QueryAssetSupplyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetSupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetSupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAssetSupplyRequest {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QueryAssetSupplyRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAssetSupplyRequest>, I>>(object: I): QueryAssetSupplyRequest {
    const message = createBaseQueryAssetSupplyRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryAssetSupplyResponse(): QueryAssetSupplyResponse {
  return { assetSupply: undefined };
}

export const QueryAssetSupplyResponse = {
  encode(message: QueryAssetSupplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetSupply !== undefined) {
      AssetSupply.encode(message.assetSupply, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetSupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetSupply = AssetSupply.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAssetSupplyResponse {
    return { assetSupply: isSet(object.assetSupply) ? AssetSupply.fromJSON(object.assetSupply) : undefined };
  },

  toJSON(message: QueryAssetSupplyResponse): unknown {
    const obj: any = {};
    message.assetSupply !== undefined
      && (obj.assetSupply = message.assetSupply ? AssetSupply.toJSON(message.assetSupply) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAssetSupplyResponse>, I>>(object: I): QueryAssetSupplyResponse {
    const message = createBaseQueryAssetSupplyResponse();
    message.assetSupply = (object.assetSupply !== undefined && object.assetSupply !== null)
      ? AssetSupply.fromPartial(object.assetSupply)
      : undefined;
    return message;
  },
};

function createBaseQueryAssetSuppliesRequest(): QueryAssetSuppliesRequest {
  return {};
}

export const QueryAssetSuppliesRequest = {
  encode(_: QueryAssetSuppliesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetSuppliesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetSuppliesRequest();
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

  fromJSON(_: any): QueryAssetSuppliesRequest {
    return {};
  },

  toJSON(_: QueryAssetSuppliesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAssetSuppliesRequest>, I>>(_: I): QueryAssetSuppliesRequest {
    const message = createBaseQueryAssetSuppliesRequest();
    return message;
  },
};

function createBaseQueryAssetSuppliesResponse(): QueryAssetSuppliesResponse {
  return { assetSupplies: [] };
}

export const QueryAssetSuppliesResponse = {
  encode(message: QueryAssetSuppliesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assetSupplies) {
      AssetSupply.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetSuppliesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetSuppliesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetSupplies.push(AssetSupply.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAssetSuppliesResponse {
    return {
      assetSupplies: Array.isArray(object?.assetSupplies)
        ? object.assetSupplies.map((e: any) => AssetSupply.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAssetSuppliesResponse): unknown {
    const obj: any = {};
    if (message.assetSupplies) {
      obj.assetSupplies = message.assetSupplies.map((e) => e ? AssetSupply.toJSON(e) : undefined);
    } else {
      obj.assetSupplies = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAssetSuppliesResponse>, I>>(object: I): QueryAssetSuppliesResponse {
    const message = createBaseQueryAssetSuppliesResponse();
    message.assetSupplies = object.assetSupplies?.map((e) => AssetSupply.fromPartial(e)) || [];
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

/** Query provides defines the gRPC querier service */
export interface Query {
  /** HTLC queries the HTLC by the specified hash lock */
  HTLC(request: QueryHTLCRequest): Promise<QueryHTLCResponse>;
  /** AssetSupply queries the supply of an asset */
  AssetSupply(request: QueryAssetSupplyRequest): Promise<QueryAssetSupplyResponse>;
  /** AssetSupplies queries the supplies of all assets */
  AssetSupplies(request: QueryAssetSuppliesRequest): Promise<QueryAssetSuppliesResponse>;
  /** Params queries the htlc parameters */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.HTLC = this.HTLC.bind(this);
    this.AssetSupply = this.AssetSupply.bind(this);
    this.AssetSupplies = this.AssetSupplies.bind(this);
    this.Params = this.Params.bind(this);
  }
  HTLC(request: QueryHTLCRequest): Promise<QueryHTLCResponse> {
    const data = QueryHTLCRequest.encode(request).finish();
    const promise = this.rpc.request("irismod.htlc.Query", "HTLC", data);
    return promise.then((data) => QueryHTLCResponse.decode(new _m0.Reader(data)));
  }

  AssetSupply(request: QueryAssetSupplyRequest): Promise<QueryAssetSupplyResponse> {
    const data = QueryAssetSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("irismod.htlc.Query", "AssetSupply", data);
    return promise.then((data) => QueryAssetSupplyResponse.decode(new _m0.Reader(data)));
  }

  AssetSupplies(request: QueryAssetSuppliesRequest): Promise<QueryAssetSuppliesResponse> {
    const data = QueryAssetSuppliesRequest.encode(request).finish();
    const promise = this.rpc.request("irismod.htlc.Query", "AssetSupplies", data);
    return promise.then((data) => QueryAssetSuppliesResponse.decode(new _m0.Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("irismod.htlc.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
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
