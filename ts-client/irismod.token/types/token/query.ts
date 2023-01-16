/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Any } from "../google/protobuf/any";
import { Params } from "./token";

export const protobufPackage = "irismod.token";

/** QueryTokenRequest is request type for the Query/Token RPC method */
export interface QueryTokenRequest {
  denom: string;
}

/** QueryTokenResponse is response type for the Query/Token RPC method */
export interface QueryTokenResponse {
  Token: Any | undefined;
}

/** QueryTokensRequest is request type for the Query/Tokens RPC method */
export interface QueryTokensRequest {
  owner: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryTokensResponse is response type for the Query/Tokens RPC method */
export interface QueryTokensResponse {
  Tokens: Any[];
  pagination: PageResponse | undefined;
}

/** QueryFeesRequest is request type for the Query/Fees RPC method */
export interface QueryFeesRequest {
  symbol: string;
}

/** QueryFeesResponse is response type for the Query/Fees RPC method */
export interface QueryFeesResponse {
  exist: boolean;
  issueFee: Coin | undefined;
  mintFee: Coin | undefined;
}

/** QueryParametersRequest is request type for the Query/Parameters RPC method */
export interface QueryParamsRequest {
}

/** QueryParametersResponse is response type for the Query/Parameters RPC method */
export interface QueryParamsResponse {
  params: Params | undefined;
  res: PageResponse | undefined;
}

/** QueryTokenRequest is request type for the Query/TotalBurn RPC method */
export interface QueryTotalBurnRequest {
}

/** QueryTotalBurnResponse is response type for the Query/TotalBurn RPC method */
export interface QueryTotalBurnResponse {
  burnedCoins: Coin[];
}

function createBaseQueryTokenRequest(): QueryTokenRequest {
  return { denom: "" };
}

export const QueryTokenRequest = {
  encode(message: QueryTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenRequest();
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

  fromJSON(object: any): QueryTokenRequest {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QueryTokenRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenRequest>, I>>(object: I): QueryTokenRequest {
    const message = createBaseQueryTokenRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryTokenResponse(): QueryTokenResponse {
  return { Token: undefined };
}

export const QueryTokenResponse = {
  encode(message: QueryTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Token !== undefined) {
      Any.encode(message.Token, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Token = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenResponse {
    return { Token: isSet(object.Token) ? Any.fromJSON(object.Token) : undefined };
  },

  toJSON(message: QueryTokenResponse): unknown {
    const obj: any = {};
    message.Token !== undefined && (obj.Token = message.Token ? Any.toJSON(message.Token) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenResponse>, I>>(object: I): QueryTokenResponse {
    const message = createBaseQueryTokenResponse();
    message.Token = (object.Token !== undefined && object.Token !== null) ? Any.fromPartial(object.Token) : undefined;
    return message;
  },
};

function createBaseQueryTokensRequest(): QueryTokensRequest {
  return { owner: "", pagination: undefined };
}

export const QueryTokensRequest = {
  encode(message: QueryTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokensRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
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

  fromJSON(object: any): QueryTokensRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryTokensRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokensRequest>, I>>(object: I): QueryTokensRequest {
    const message = createBaseQueryTokensRequest();
    message.owner = object.owner ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryTokensResponse(): QueryTokensResponse {
  return { Tokens: [], pagination: undefined };
}

export const QueryTokensResponse = {
  encode(message: QueryTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Tokens) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Tokens.push(Any.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryTokensResponse {
    return {
      Tokens: Array.isArray(object?.Tokens) ? object.Tokens.map((e: any) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryTokensResponse): unknown {
    const obj: any = {};
    if (message.Tokens) {
      obj.Tokens = message.Tokens.map((e) => e ? Any.toJSON(e) : undefined);
    } else {
      obj.Tokens = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokensResponse>, I>>(object: I): QueryTokensResponse {
    const message = createBaseQueryTokensResponse();
    message.Tokens = object.Tokens?.map((e) => Any.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryFeesRequest(): QueryFeesRequest {
  return { symbol: "" };
}

export const QueryFeesRequest = {
  encode(message: QueryFeesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeesRequest {
    return { symbol: isSet(object.symbol) ? String(object.symbol) : "" };
  },

  toJSON(message: QueryFeesRequest): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeesRequest>, I>>(object: I): QueryFeesRequest {
    const message = createBaseQueryFeesRequest();
    message.symbol = object.symbol ?? "";
    return message;
  },
};

function createBaseQueryFeesResponse(): QueryFeesResponse {
  return { exist: false, issueFee: undefined, mintFee: undefined };
}

export const QueryFeesResponse = {
  encode(message: QueryFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exist === true) {
      writer.uint32(8).bool(message.exist);
    }
    if (message.issueFee !== undefined) {
      Coin.encode(message.issueFee, writer.uint32(18).fork()).ldelim();
    }
    if (message.mintFee !== undefined) {
      Coin.encode(message.mintFee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exist = reader.bool();
          break;
        case 2:
          message.issueFee = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.mintFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeesResponse {
    return {
      exist: isSet(object.exist) ? Boolean(object.exist) : false,
      issueFee: isSet(object.issueFee) ? Coin.fromJSON(object.issueFee) : undefined,
      mintFee: isSet(object.mintFee) ? Coin.fromJSON(object.mintFee) : undefined,
    };
  },

  toJSON(message: QueryFeesResponse): unknown {
    const obj: any = {};
    message.exist !== undefined && (obj.exist = message.exist);
    message.issueFee !== undefined && (obj.issueFee = message.issueFee ? Coin.toJSON(message.issueFee) : undefined);
    message.mintFee !== undefined && (obj.mintFee = message.mintFee ? Coin.toJSON(message.mintFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeesResponse>, I>>(object: I): QueryFeesResponse {
    const message = createBaseQueryFeesResponse();
    message.exist = object.exist ?? false;
    message.issueFee = (object.issueFee !== undefined && object.issueFee !== null)
      ? Coin.fromPartial(object.issueFee)
      : undefined;
    message.mintFee = (object.mintFee !== undefined && object.mintFee !== null)
      ? Coin.fromPartial(object.mintFee)
      : undefined;
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
  return { params: undefined, res: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.res !== undefined) {
      PageResponse.encode(message.res, writer.uint32(18).fork()).ldelim();
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
        case 2:
          message.res = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      res: isSet(object.res) ? PageResponse.fromJSON(object.res) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.res !== undefined && (obj.res = message.res ? PageResponse.toJSON(message.res) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.res = (object.res !== undefined && object.res !== null) ? PageResponse.fromPartial(object.res) : undefined;
    return message;
  },
};

function createBaseQueryTotalBurnRequest(): QueryTotalBurnRequest {
  return {};
}

export const QueryTotalBurnRequest = {
  encode(_: QueryTotalBurnRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalBurnRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalBurnRequest();
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

  fromJSON(_: any): QueryTotalBurnRequest {
    return {};
  },

  toJSON(_: QueryTotalBurnRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalBurnRequest>, I>>(_: I): QueryTotalBurnRequest {
    const message = createBaseQueryTotalBurnRequest();
    return message;
  },
};

function createBaseQueryTotalBurnResponse(): QueryTotalBurnResponse {
  return { burnedCoins: [] };
}

export const QueryTotalBurnResponse = {
  encode(message: QueryTotalBurnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.burnedCoins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalBurnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalBurnResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burnedCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalBurnResponse {
    return {
      burnedCoins: Array.isArray(object?.burnedCoins) ? object.burnedCoins.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryTotalBurnResponse): unknown {
    const obj: any = {};
    if (message.burnedCoins) {
      obj.burnedCoins = message.burnedCoins.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.burnedCoins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalBurnResponse>, I>>(object: I): QueryTotalBurnResponse {
    const message = createBaseQueryTotalBurnResponse();
    message.burnedCoins = object.burnedCoins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

/** Query creates service with token as RPC */
export interface Query {
  /** Token returns token with token name */
  Token(request: QueryTokenRequest): Promise<QueryTokenResponse>;
  /** Tokens returns the token list */
  Tokens(request: QueryTokensRequest): Promise<QueryTokensResponse>;
  /** Fees returns the fees to issue or mint a token */
  Fees(request: QueryFeesRequest): Promise<QueryFeesResponse>;
  /** Params queries the token parameters */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** TotalBurn queries all the burnt coins */
  TotalBurn(request: QueryTotalBurnRequest): Promise<QueryTotalBurnResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Token = this.Token.bind(this);
    this.Tokens = this.Tokens.bind(this);
    this.Fees = this.Fees.bind(this);
    this.Params = this.Params.bind(this);
    this.TotalBurn = this.TotalBurn.bind(this);
  }
  Token(request: QueryTokenRequest): Promise<QueryTokenResponse> {
    const data = QueryTokenRequest.encode(request).finish();
    const promise = this.rpc.request("irismod.token.Query", "Token", data);
    return promise.then((data) => QueryTokenResponse.decode(new _m0.Reader(data)));
  }

  Tokens(request: QueryTokensRequest): Promise<QueryTokensResponse> {
    const data = QueryTokensRequest.encode(request).finish();
    const promise = this.rpc.request("irismod.token.Query", "Tokens", data);
    return promise.then((data) => QueryTokensResponse.decode(new _m0.Reader(data)));
  }

  Fees(request: QueryFeesRequest): Promise<QueryFeesResponse> {
    const data = QueryFeesRequest.encode(request).finish();
    const promise = this.rpc.request("irismod.token.Query", "Fees", data);
    return promise.then((data) => QueryFeesResponse.decode(new _m0.Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("irismod.token.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  TotalBurn(request: QueryTotalBurnRequest): Promise<QueryTotalBurnResponse> {
    const data = QueryTotalBurnRequest.encode(request).finish();
    const promise = this.rpc.request("irismod.token.Query", "TotalBurn", data);
    return promise.then((data) => QueryTotalBurnResponse.decode(new _m0.Reader(data)));
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
