/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Balance, Denom, MT } from "./mt";

export const protobufPackage = "irismod.mt";

/** QuerySupplyRequest is the request type for the Query RPC method */
export interface QuerySupplyRequest {
  denomId: string;
  owner: string;
}

/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponse {
  amount: number;
}

/** QueryDenomsRequest is the request type for the Query/Denoms RPC method */
export interface QueryDenomsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryDenomsResponse is the response type for the Query/Denoms RPC method */
export interface QueryDenomsResponse {
  denoms: Denom[];
  pagination: PageResponse | undefined;
}

/** QueryDenomRequest is the request type for the Query/Denom RPC method */
export interface QueryDenomRequest {
  denomId: string;
}

/** QueryDenomResponse is the response type for the Query/Denom RPC method */
export interface QueryDenomResponse {
  denom: Denom | undefined;
}

export interface QueryMTSupplyRequest {
  denomId: string;
  mtId: string;
}

export interface QueryMTSupplyResponse {
  amount: number;
}

/** QueryMTsRequest is the request type for the Query/MTs RPC method */
export interface QueryMTsRequest {
  denomId: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryMTsResponse is the response type for the Query/MTs RPC method */
export interface QueryMTsResponse {
  mts: MT[];
  pagination: PageResponse | undefined;
}

/** QueryMTRequest is the request type for the Query/MT RPC method */
export interface QueryMTRequest {
  denomId: string;
  mtId: string;
}

/** QueryMTResponse is the response type for the Query/MT RPC method */
export interface QueryMTResponse {
  mt: MT | undefined;
}

/** QueryBalancesRequest is the request type for the Query/Balances RPC method */
export interface QueryBalancesRequest {
  owner: string;
  denomId: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryBalancesResponse is the response type for the Query/Balances RPC method */
export interface QueryBalancesResponse {
  balance: Balance[];
  pagination: PageResponse | undefined;
}

function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return { denomId: "", owner: "" };
}

export const QuerySupplyRequest = {
  encode(message: QuerySupplyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySupplyRequest {
    return {
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: QuerySupplyRequest): unknown {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySupplyRequest>, I>>(object: I): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return { amount: 0 };
}

export const QuerySupplyResponse = {
  encode(message: QuerySupplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySupplyResponse {
    return { amount: isSet(object.amount) ? Number(object.amount) : 0 };
  },

  toJSON(message: QuerySupplyResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySupplyResponse>, I>>(object: I): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseQueryDenomsRequest(): QueryDenomsRequest {
  return { pagination: undefined };
}

export const QueryDenomsRequest = {
  encode(message: QueryDenomsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsRequest();
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

  fromJSON(object: any): QueryDenomsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryDenomsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomsRequest>, I>>(object: I): QueryDenomsRequest {
    const message = createBaseQueryDenomsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDenomsResponse(): QueryDenomsResponse {
  return { denoms: [], pagination: undefined };
}

export const QueryDenomsResponse = {
  encode(message: QueryDenomsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denoms) {
      Denom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(Denom.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryDenomsResponse {
    return {
      denoms: Array.isArray(object?.denoms) ? object.denoms.map((e: any) => Denom.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDenomsResponse): unknown {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e ? Denom.toJSON(e) : undefined);
    } else {
      obj.denoms = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomsResponse>, I>>(object: I): QueryDenomsResponse {
    const message = createBaseQueryDenomsResponse();
    message.denoms = object.denoms?.map((e) => Denom.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDenomRequest(): QueryDenomRequest {
  return { denomId: "" };
}

export const QueryDenomRequest = {
  encode(message: QueryDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomRequest {
    return { denomId: isSet(object.denomId) ? String(object.denomId) : "" };
  },

  toJSON(message: QueryDenomRequest): unknown {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomRequest>, I>>(object: I): QueryDenomRequest {
    const message = createBaseQueryDenomRequest();
    message.denomId = object.denomId ?? "";
    return message;
  },
};

function createBaseQueryDenomResponse(): QueryDenomResponse {
  return { denom: undefined };
}

export const QueryDenomResponse = {
  encode(message: QueryDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = Denom.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomResponse {
    return { denom: isSet(object.denom) ? Denom.fromJSON(object.denom) : undefined };
  },

  toJSON(message: QueryDenomResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom ? Denom.toJSON(message.denom) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomResponse>, I>>(object: I): QueryDenomResponse {
    const message = createBaseQueryDenomResponse();
    message.denom = (object.denom !== undefined && object.denom !== null) ? Denom.fromPartial(object.denom) : undefined;
    return message;
  },
};

function createBaseQueryMTSupplyRequest(): QueryMTSupplyRequest {
  return { denomId: "", mtId: "" };
}

export const QueryMTSupplyRequest = {
  encode(message: QueryMTSupplyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.mtId !== "") {
      writer.uint32(18).string(message.mtId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMTSupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMTSupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.mtId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMTSupplyRequest {
    return {
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      mtId: isSet(object.mtId) ? String(object.mtId) : "",
    };
  },

  toJSON(message: QueryMTSupplyRequest): unknown {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.mtId !== undefined && (obj.mtId = message.mtId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMTSupplyRequest>, I>>(object: I): QueryMTSupplyRequest {
    const message = createBaseQueryMTSupplyRequest();
    message.denomId = object.denomId ?? "";
    message.mtId = object.mtId ?? "";
    return message;
  },
};

function createBaseQueryMTSupplyResponse(): QueryMTSupplyResponse {
  return { amount: 0 };
}

export const QueryMTSupplyResponse = {
  encode(message: QueryMTSupplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMTSupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMTSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMTSupplyResponse {
    return { amount: isSet(object.amount) ? Number(object.amount) : 0 };
  },

  toJSON(message: QueryMTSupplyResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMTSupplyResponse>, I>>(object: I): QueryMTSupplyResponse {
    const message = createBaseQueryMTSupplyResponse();
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseQueryMTsRequest(): QueryMTsRequest {
  return { denomId: "", pagination: undefined };
}

export const QueryMTsRequest = {
  encode(message: QueryMTsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMTsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMTsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
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

  fromJSON(object: any): QueryMTsRequest {
    return {
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryMTsRequest): unknown {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMTsRequest>, I>>(object: I): QueryMTsRequest {
    const message = createBaseQueryMTsRequest();
    message.denomId = object.denomId ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryMTsResponse(): QueryMTsResponse {
  return { mts: [], pagination: undefined };
}

export const QueryMTsResponse = {
  encode(message: QueryMTsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.mts) {
      MT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMTsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMTsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mts.push(MT.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryMTsResponse {
    return {
      mts: Array.isArray(object?.mts) ? object.mts.map((e: any) => MT.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryMTsResponse): unknown {
    const obj: any = {};
    if (message.mts) {
      obj.mts = message.mts.map((e) => e ? MT.toJSON(e) : undefined);
    } else {
      obj.mts = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMTsResponse>, I>>(object: I): QueryMTsResponse {
    const message = createBaseQueryMTsResponse();
    message.mts = object.mts?.map((e) => MT.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryMTRequest(): QueryMTRequest {
  return { denomId: "", mtId: "" };
}

export const QueryMTRequest = {
  encode(message: QueryMTRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.mtId !== "") {
      writer.uint32(18).string(message.mtId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.mtId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMTRequest {
    return {
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      mtId: isSet(object.mtId) ? String(object.mtId) : "",
    };
  },

  toJSON(message: QueryMTRequest): unknown {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.mtId !== undefined && (obj.mtId = message.mtId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMTRequest>, I>>(object: I): QueryMTRequest {
    const message = createBaseQueryMTRequest();
    message.denomId = object.denomId ?? "";
    message.mtId = object.mtId ?? "";
    return message;
  },
};

function createBaseQueryMTResponse(): QueryMTResponse {
  return { mt: undefined };
}

export const QueryMTResponse = {
  encode(message: QueryMTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mt !== undefined) {
      MT.encode(message.mt, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mt = MT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMTResponse {
    return { mt: isSet(object.mt) ? MT.fromJSON(object.mt) : undefined };
  },

  toJSON(message: QueryMTResponse): unknown {
    const obj: any = {};
    message.mt !== undefined && (obj.mt = message.mt ? MT.toJSON(message.mt) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMTResponse>, I>>(object: I): QueryMTResponse {
    const message = createBaseQueryMTResponse();
    message.mt = (object.mt !== undefined && object.mt !== null) ? MT.fromPartial(object.mt) : undefined;
    return message;
  },
};

function createBaseQueryBalancesRequest(): QueryBalancesRequest {
  return { owner: "", denomId: "", pagination: undefined };
}

export const QueryBalancesRequest = {
  encode(message: QueryBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
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

  fromJSON(object: any): QueryBalancesRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryBalancesRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalancesRequest>, I>>(object: I): QueryBalancesRequest {
    const message = createBaseQueryBalancesRequest();
    message.owner = object.owner ?? "";
    message.denomId = object.denomId ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryBalancesResponse(): QueryBalancesResponse {
  return { balance: [], pagination: undefined };
}

export const QueryBalancesResponse = {
  encode(message: QueryBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balance) {
      Balance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance.push(Balance.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryBalancesResponse {
    return {
      balance: Array.isArray(object?.balance) ? object.balance.map((e: any) => Balance.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryBalancesResponse): unknown {
    const obj: any = {};
    if (message.balance) {
      obj.balance = message.balance.map((e) => e ? Balance.toJSON(e) : undefined);
    } else {
      obj.balance = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalancesResponse>, I>>(object: I): QueryBalancesResponse {
    const message = createBaseQueryBalancesResponse();
    message.balance = object.balance?.map((e) => Balance.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service for MT module */
export interface Query {
  /** Supply queries the total supply of a given denom or owner */
  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
  /** Denoms queries all the denoms */
  Denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse>;
  /** Denom queries the definition of a given denom ID */
  Denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
  /** MTSupply queries the total supply of given denom and mt ID */
  MTSupply(request: QueryMTSupplyRequest): Promise<QueryMTSupplyResponse>;
  /** MTs queries all the MTs of a given denom ID */
  MTs(request: QueryMTsRequest): Promise<QueryMTsResponse>;
  /** MT queries the MT of the given denom and mt ID */
  MT(request: QueryMTRequest): Promise<QueryMTResponse>;
  /** Balances queries the MT balances of a specified owner */
  Balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Supply = this.Supply.bind(this);
    this.Denoms = this.Denoms.bind(this);
    this.Denom = this.Denom.bind(this);
    this.MTSupply = this.MTSupply.bind(this);
    this.MTs = this.MTs.bind(this);
    this.MT = this.MT.bind(this);
    this.Balances = this.Balances.bind(this);
  }
  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("irismod.mt.Query", "Supply", data);
    return promise.then((data) => QuerySupplyResponse.decode(new _m0.Reader(data)));
  }

  Denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse> {
    const data = QueryDenomsRequest.encode(request).finish();
    const promise = this.rpc.request("irismod.mt.Query", "Denoms", data);
    return promise.then((data) => QueryDenomsResponse.decode(new _m0.Reader(data)));
  }

  Denom(request: QueryDenomRequest): Promise<QueryDenomResponse> {
    const data = QueryDenomRequest.encode(request).finish();
    const promise = this.rpc.request("irismod.mt.Query", "Denom", data);
    return promise.then((data) => QueryDenomResponse.decode(new _m0.Reader(data)));
  }

  MTSupply(request: QueryMTSupplyRequest): Promise<QueryMTSupplyResponse> {
    const data = QueryMTSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("irismod.mt.Query", "MTSupply", data);
    return promise.then((data) => QueryMTSupplyResponse.decode(new _m0.Reader(data)));
  }

  MTs(request: QueryMTsRequest): Promise<QueryMTsResponse> {
    const data = QueryMTsRequest.encode(request).finish();
    const promise = this.rpc.request("irismod.mt.Query", "MTs", data);
    return promise.then((data) => QueryMTsResponse.decode(new _m0.Reader(data)));
  }

  MT(request: QueryMTRequest): Promise<QueryMTResponse> {
    const data = QueryMTRequest.encode(request).finish();
    const promise = this.rpc.request("irismod.mt.Query", "MT", data);
    return promise.then((data) => QueryMTResponse.decode(new _m0.Reader(data)));
  }

  Balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse> {
    const data = QueryBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("irismod.mt.Query", "Balances", data);
    return promise.then((data) => QueryBalancesResponse.decode(new _m0.Reader(data)));
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
