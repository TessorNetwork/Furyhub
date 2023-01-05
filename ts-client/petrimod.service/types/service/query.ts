/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Params, Request, RequestContext, Response, ServiceBinding, ServiceDefinition } from "./service";

export const protobufPackage = "petrimod.service";

/** QueryDefinitionRequest is request type for the Query/Definition RPC method */
export interface QueryDefinitionRequest {
  serviceName: string;
}

/** QueryDefinitionResponse is response type for the Query/Definition RPC method */
export interface QueryDefinitionResponse {
  serviceDefinition: ServiceDefinition | undefined;
}

/** QueryBindingRequest is request type for the Query/Binding RPC method */
export interface QueryBindingRequest {
  serviceName: string;
  provider: string;
}

/** QueryDefinitionResponse is response type for the Query/Binding RPC method */
export interface QueryBindingResponse {
  serviceBinding: ServiceBinding | undefined;
}

/** QueryBindingsRequest is request type for the Query/Bindings RPC method */
export interface QueryBindingsRequest {
  serviceName: string;
  owner: string;
  /** pagination defines an optional pagination for the request */
  pagination: PageRequest | undefined;
}

/** QueryDefinitionsResponse is response type for the Query/Bindings RPC method */
export interface QueryBindingsResponse {
  serviceBindings: ServiceBinding[];
  pagination: PageResponse | undefined;
}

/**
 * QueryWithdrawAddressRequest is request type for the Query/WithdrawAddress RPC
 * method
 */
export interface QueryWithdrawAddressRequest {
  owner: string;
}

/**
 * QueryWithdrawAddressResponse is response type for the Query/WithdrawAddress
 * RPC method
 */
export interface QueryWithdrawAddressResponse {
  withdrawAddress: string;
}

/**
 * QueryRequestContextRequest is request type for the Query/RequestContext RPC
 * method
 */
export interface QueryRequestContextRequest {
  requestContextId: string;
}

/**
 * QueryRequestContextResponse is response type for the Query/RequestContext RPC
 * method
 */
export interface QueryRequestContextResponse {
  requestContext: RequestContext | undefined;
}

/** QueryRequestRequest is request type for the Query/Request RPC method */
export interface QueryRequestRequest {
  requestId: string;
}

/** QueryRequestResponse is response type for the Query/Request RPC method */
export interface QueryRequestResponse {
  request: Request | undefined;
}

/** QueryRequestsRequest is request type for the Query/Requests RPC method */
export interface QueryRequestsRequest {
  serviceName: string;
  provider: string;
  pagination: PageRequest | undefined;
}

/** QueryRequestsResponse is response type for the Query/Requests RPC method */
export interface QueryRequestsResponse {
  requests: Request[];
  pagination: PageResponse | undefined;
}

/**
 * QueryRequestsByReqCtxRequest is request type for the Query/RequestsByReqCtx
 * RPC method
 */
export interface QueryRequestsByReqCtxRequest {
  requestContextId: string;
  batchCounter: number;
  pagination: PageRequest | undefined;
}

/**
 * QueryRequestsByReqCtxResponse is response type for the Query/RequestsByReqCtx
 * RPC method
 */
export interface QueryRequestsByReqCtxResponse {
  requests: Request[];
  pagination: PageResponse | undefined;
}

/** QueryResponseRequest is request type for the Query/Response RPC method */
export interface QueryResponseRequest {
  requestId: string;
}

/** QueryResponseResponse is response type for the Query/Response RPC method */
export interface QueryResponseResponse {
  response: Response | undefined;
}

/** QueryResponsesRequest is request type for the Query/Responses RPC method */
export interface QueryResponsesRequest {
  requestContextId: string;
  batchCounter: number;
  pagination: PageRequest | undefined;
}

/** QueryResponsesResponse is response type for the Query/Responses RPC method */
export interface QueryResponsesResponse {
  responses: Response[];
  pagination: PageResponse | undefined;
}

/** QueryEarnedFeesRequest is request type for the Query/EarnedFees RPC method */
export interface QueryEarnedFeesRequest {
  provider: string;
}

/** QueryEarnedFeesResponse is response type for the Query/EarnedFees RPC method */
export interface QueryEarnedFeesResponse {
  fees: Coin[];
}

/** QuerySchemaRequest is request type for the Query/Schema RPC method */
export interface QuerySchemaRequest {
  schemaName: string;
}

/** QuerySchemaResponse is response type for the Query/Schema RPC method */
export interface QuerySchemaResponse {
  schema: string;
}

/** QueryParametersRequest is request type for the Query/Parameters RPC method */
export interface QueryParamsRequest {
}

/** QueryParametersResponse is response type for the Query/Parameters RPC method */
export interface QueryParamsResponse {
  params: Params | undefined;
  res: PageResponse | undefined;
}

function createBaseQueryDefinitionRequest(): QueryDefinitionRequest {
  return { serviceName: "" };
}

export const QueryDefinitionRequest = {
  encode(message: QueryDefinitionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDefinitionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDefinitionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDefinitionRequest {
    return { serviceName: isSet(object.serviceName) ? String(object.serviceName) : "" };
  },

  toJSON(message: QueryDefinitionRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDefinitionRequest>, I>>(object: I): QueryDefinitionRequest {
    const message = createBaseQueryDefinitionRequest();
    message.serviceName = object.serviceName ?? "";
    return message;
  },
};

function createBaseQueryDefinitionResponse(): QueryDefinitionResponse {
  return { serviceDefinition: undefined };
}

export const QueryDefinitionResponse = {
  encode(message: QueryDefinitionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceDefinition !== undefined) {
      ServiceDefinition.encode(message.serviceDefinition, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDefinitionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDefinitionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceDefinition = ServiceDefinition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDefinitionResponse {
    return {
      serviceDefinition: isSet(object.serviceDefinition)
        ? ServiceDefinition.fromJSON(object.serviceDefinition)
        : undefined,
    };
  },

  toJSON(message: QueryDefinitionResponse): unknown {
    const obj: any = {};
    message.serviceDefinition !== undefined && (obj.serviceDefinition = message.serviceDefinition
      ? ServiceDefinition.toJSON(message.serviceDefinition)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDefinitionResponse>, I>>(object: I): QueryDefinitionResponse {
    const message = createBaseQueryDefinitionResponse();
    message.serviceDefinition = (object.serviceDefinition !== undefined && object.serviceDefinition !== null)
      ? ServiceDefinition.fromPartial(object.serviceDefinition)
      : undefined;
    return message;
  },
};

function createBaseQueryBindingRequest(): QueryBindingRequest {
  return { serviceName: "", provider: "" };
}

export const QueryBindingRequest = {
  encode(message: QueryBindingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBindingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBindingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.provider = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBindingRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
    };
  },

  toJSON(message: QueryBindingRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.provider !== undefined && (obj.provider = message.provider);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBindingRequest>, I>>(object: I): QueryBindingRequest {
    const message = createBaseQueryBindingRequest();
    message.serviceName = object.serviceName ?? "";
    message.provider = object.provider ?? "";
    return message;
  },
};

function createBaseQueryBindingResponse(): QueryBindingResponse {
  return { serviceBinding: undefined };
}

export const QueryBindingResponse = {
  encode(message: QueryBindingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceBinding !== undefined) {
      ServiceBinding.encode(message.serviceBinding, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBindingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBindingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceBinding = ServiceBinding.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBindingResponse {
    return {
      serviceBinding: isSet(object.serviceBinding) ? ServiceBinding.fromJSON(object.serviceBinding) : undefined,
    };
  },

  toJSON(message: QueryBindingResponse): unknown {
    const obj: any = {};
    message.serviceBinding !== undefined
      && (obj.serviceBinding = message.serviceBinding ? ServiceBinding.toJSON(message.serviceBinding) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBindingResponse>, I>>(object: I): QueryBindingResponse {
    const message = createBaseQueryBindingResponse();
    message.serviceBinding = (object.serviceBinding !== undefined && object.serviceBinding !== null)
      ? ServiceBinding.fromPartial(object.serviceBinding)
      : undefined;
    return message;
  },
};

function createBaseQueryBindingsRequest(): QueryBindingsRequest {
  return { serviceName: "", owner: "", pagination: undefined };
}

export const QueryBindingsRequest = {
  encode(message: QueryBindingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBindingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBindingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.owner = reader.string();
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

  fromJSON(object: any): QueryBindingsRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryBindingsRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBindingsRequest>, I>>(object: I): QueryBindingsRequest {
    const message = createBaseQueryBindingsRequest();
    message.serviceName = object.serviceName ?? "";
    message.owner = object.owner ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryBindingsResponse(): QueryBindingsResponse {
  return { serviceBindings: [], pagination: undefined };
}

export const QueryBindingsResponse = {
  encode(message: QueryBindingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.serviceBindings) {
      ServiceBinding.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBindingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBindingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceBindings.push(ServiceBinding.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryBindingsResponse {
    return {
      serviceBindings: Array.isArray(object?.serviceBindings)
        ? object.serviceBindings.map((e: any) => ServiceBinding.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryBindingsResponse): unknown {
    const obj: any = {};
    if (message.serviceBindings) {
      obj.serviceBindings = message.serviceBindings.map((e) => e ? ServiceBinding.toJSON(e) : undefined);
    } else {
      obj.serviceBindings = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBindingsResponse>, I>>(object: I): QueryBindingsResponse {
    const message = createBaseQueryBindingsResponse();
    message.serviceBindings = object.serviceBindings?.map((e) => ServiceBinding.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryWithdrawAddressRequest(): QueryWithdrawAddressRequest {
  return { owner: "" };
}

export const QueryWithdrawAddressRequest = {
  encode(message: QueryWithdrawAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryWithdrawAddressRequest {
    return { owner: isSet(object.owner) ? String(object.owner) : "" };
  },

  toJSON(message: QueryWithdrawAddressRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryWithdrawAddressRequest>, I>>(object: I): QueryWithdrawAddressRequest {
    const message = createBaseQueryWithdrawAddressRequest();
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseQueryWithdrawAddressResponse(): QueryWithdrawAddressResponse {
  return { withdrawAddress: "" };
}

export const QueryWithdrawAddressResponse = {
  encode(message: QueryWithdrawAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawAddress !== "") {
      writer.uint32(10).string(message.withdrawAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryWithdrawAddressResponse {
    return { withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : "" };
  },

  toJSON(message: QueryWithdrawAddressResponse): unknown {
    const obj: any = {};
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryWithdrawAddressResponse>, I>>(object: I): QueryWithdrawAddressResponse {
    const message = createBaseQueryWithdrawAddressResponse();
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
};

function createBaseQueryRequestContextRequest(): QueryRequestContextRequest {
  return { requestContextId: "" };
}

export const QueryRequestContextRequest = {
  encode(message: QueryRequestContextRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestContextId !== "") {
      writer.uint32(10).string(message.requestContextId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestContextRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestContextRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestContextId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRequestContextRequest {
    return { requestContextId: isSet(object.requestContextId) ? String(object.requestContextId) : "" };
  },

  toJSON(message: QueryRequestContextRequest): unknown {
    const obj: any = {};
    message.requestContextId !== undefined && (obj.requestContextId = message.requestContextId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequestContextRequest>, I>>(object: I): QueryRequestContextRequest {
    const message = createBaseQueryRequestContextRequest();
    message.requestContextId = object.requestContextId ?? "";
    return message;
  },
};

function createBaseQueryRequestContextResponse(): QueryRequestContextResponse {
  return { requestContext: undefined };
}

export const QueryRequestContextResponse = {
  encode(message: QueryRequestContextResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestContext !== undefined) {
      RequestContext.encode(message.requestContext, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestContextResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestContextResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestContext = RequestContext.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRequestContextResponse {
    return {
      requestContext: isSet(object.requestContext) ? RequestContext.fromJSON(object.requestContext) : undefined,
    };
  },

  toJSON(message: QueryRequestContextResponse): unknown {
    const obj: any = {};
    message.requestContext !== undefined
      && (obj.requestContext = message.requestContext ? RequestContext.toJSON(message.requestContext) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequestContextResponse>, I>>(object: I): QueryRequestContextResponse {
    const message = createBaseQueryRequestContextResponse();
    message.requestContext = (object.requestContext !== undefined && object.requestContext !== null)
      ? RequestContext.fromPartial(object.requestContext)
      : undefined;
    return message;
  },
};

function createBaseQueryRequestRequest(): QueryRequestRequest {
  return { requestId: "" };
}

export const QueryRequestRequest = {
  encode(message: QueryRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRequestRequest {
    return { requestId: isSet(object.requestId) ? String(object.requestId) : "" };
  },

  toJSON(message: QueryRequestRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequestRequest>, I>>(object: I): QueryRequestRequest {
    const message = createBaseQueryRequestRequest();
    message.requestId = object.requestId ?? "";
    return message;
  },
};

function createBaseQueryRequestResponse(): QueryRequestResponse {
  return { request: undefined };
}

export const QueryRequestResponse = {
  encode(message: QueryRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      Request.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = Request.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRequestResponse {
    return { request: isSet(object.request) ? Request.fromJSON(object.request) : undefined };
  },

  toJSON(message: QueryRequestResponse): unknown {
    const obj: any = {};
    message.request !== undefined && (obj.request = message.request ? Request.toJSON(message.request) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequestResponse>, I>>(object: I): QueryRequestResponse {
    const message = createBaseQueryRequestResponse();
    message.request = (object.request !== undefined && object.request !== null)
      ? Request.fromPartial(object.request)
      : undefined;
    return message;
  },
};

function createBaseQueryRequestsRequest(): QueryRequestsRequest {
  return { serviceName: "", provider: "", pagination: undefined };
}

export const QueryRequestsRequest = {
  encode(message: QueryRequestsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.provider = reader.string();
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

  fromJSON(object: any): QueryRequestsRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRequestsRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.provider !== undefined && (obj.provider = message.provider);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequestsRequest>, I>>(object: I): QueryRequestsRequest {
    const message = createBaseQueryRequestsRequest();
    message.serviceName = object.serviceName ?? "";
    message.provider = object.provider ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRequestsResponse(): QueryRequestsResponse {
  return { requests: [], pagination: undefined };
}

export const QueryRequestsResponse = {
  encode(message: QueryRequestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.requests) {
      Request.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requests.push(Request.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryRequestsResponse {
    return {
      requests: Array.isArray(object?.requests) ? object.requests.map((e: any) => Request.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRequestsResponse): unknown {
    const obj: any = {};
    if (message.requests) {
      obj.requests = message.requests.map((e) => e ? Request.toJSON(e) : undefined);
    } else {
      obj.requests = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequestsResponse>, I>>(object: I): QueryRequestsResponse {
    const message = createBaseQueryRequestsResponse();
    message.requests = object.requests?.map((e) => Request.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRequestsByReqCtxRequest(): QueryRequestsByReqCtxRequest {
  return { requestContextId: "", batchCounter: 0, pagination: undefined };
}

export const QueryRequestsByReqCtxRequest = {
  encode(message: QueryRequestsByReqCtxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestContextId !== "") {
      writer.uint32(10).string(message.requestContextId);
    }
    if (message.batchCounter !== 0) {
      writer.uint32(16).uint64(message.batchCounter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestsByReqCtxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestsByReqCtxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestContextId = reader.string();
          break;
        case 2:
          message.batchCounter = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): QueryRequestsByReqCtxRequest {
    return {
      requestContextId: isSet(object.requestContextId) ? String(object.requestContextId) : "",
      batchCounter: isSet(object.batchCounter) ? Number(object.batchCounter) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRequestsByReqCtxRequest): unknown {
    const obj: any = {};
    message.requestContextId !== undefined && (obj.requestContextId = message.requestContextId);
    message.batchCounter !== undefined && (obj.batchCounter = Math.round(message.batchCounter));
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequestsByReqCtxRequest>, I>>(object: I): QueryRequestsByReqCtxRequest {
    const message = createBaseQueryRequestsByReqCtxRequest();
    message.requestContextId = object.requestContextId ?? "";
    message.batchCounter = object.batchCounter ?? 0;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRequestsByReqCtxResponse(): QueryRequestsByReqCtxResponse {
  return { requests: [], pagination: undefined };
}

export const QueryRequestsByReqCtxResponse = {
  encode(message: QueryRequestsByReqCtxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.requests) {
      Request.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestsByReqCtxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestsByReqCtxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requests.push(Request.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryRequestsByReqCtxResponse {
    return {
      requests: Array.isArray(object?.requests) ? object.requests.map((e: any) => Request.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRequestsByReqCtxResponse): unknown {
    const obj: any = {};
    if (message.requests) {
      obj.requests = message.requests.map((e) => e ? Request.toJSON(e) : undefined);
    } else {
      obj.requests = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequestsByReqCtxResponse>, I>>(
    object: I,
  ): QueryRequestsByReqCtxResponse {
    const message = createBaseQueryRequestsByReqCtxResponse();
    message.requests = object.requests?.map((e) => Request.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryResponseRequest(): QueryResponseRequest {
  return { requestId: "" };
}

export const QueryResponseRequest = {
  encode(message: QueryResponseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResponseRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResponseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryResponseRequest {
    return { requestId: isSet(object.requestId) ? String(object.requestId) : "" };
  },

  toJSON(message: QueryResponseRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryResponseRequest>, I>>(object: I): QueryResponseRequest {
    const message = createBaseQueryResponseRequest();
    message.requestId = object.requestId ?? "";
    return message;
  },
};

function createBaseQueryResponseResponse(): QueryResponseResponse {
  return { response: undefined };
}

export const QueryResponseResponse = {
  encode(message: QueryResponseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== undefined) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResponseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResponseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = Response.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryResponseResponse {
    return { response: isSet(object.response) ? Response.fromJSON(object.response) : undefined };
  },

  toJSON(message: QueryResponseResponse): unknown {
    const obj: any = {};
    message.response !== undefined && (obj.response = message.response ? Response.toJSON(message.response) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryResponseResponse>, I>>(object: I): QueryResponseResponse {
    const message = createBaseQueryResponseResponse();
    message.response = (object.response !== undefined && object.response !== null)
      ? Response.fromPartial(object.response)
      : undefined;
    return message;
  },
};

function createBaseQueryResponsesRequest(): QueryResponsesRequest {
  return { requestContextId: "", batchCounter: 0, pagination: undefined };
}

export const QueryResponsesRequest = {
  encode(message: QueryResponsesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestContextId !== "") {
      writer.uint32(10).string(message.requestContextId);
    }
    if (message.batchCounter !== 0) {
      writer.uint32(16).uint64(message.batchCounter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResponsesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResponsesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestContextId = reader.string();
          break;
        case 2:
          message.batchCounter = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): QueryResponsesRequest {
    return {
      requestContextId: isSet(object.requestContextId) ? String(object.requestContextId) : "",
      batchCounter: isSet(object.batchCounter) ? Number(object.batchCounter) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryResponsesRequest): unknown {
    const obj: any = {};
    message.requestContextId !== undefined && (obj.requestContextId = message.requestContextId);
    message.batchCounter !== undefined && (obj.batchCounter = Math.round(message.batchCounter));
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryResponsesRequest>, I>>(object: I): QueryResponsesRequest {
    const message = createBaseQueryResponsesRequest();
    message.requestContextId = object.requestContextId ?? "";
    message.batchCounter = object.batchCounter ?? 0;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryResponsesResponse(): QueryResponsesResponse {
  return { responses: [], pagination: undefined };
}

export const QueryResponsesResponse = {
  encode(message: QueryResponsesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.responses) {
      Response.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResponsesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResponsesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.responses.push(Response.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryResponsesResponse {
    return {
      responses: Array.isArray(object?.responses) ? object.responses.map((e: any) => Response.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryResponsesResponse): unknown {
    const obj: any = {};
    if (message.responses) {
      obj.responses = message.responses.map((e) => e ? Response.toJSON(e) : undefined);
    } else {
      obj.responses = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryResponsesResponse>, I>>(object: I): QueryResponsesResponse {
    const message = createBaseQueryResponsesResponse();
    message.responses = object.responses?.map((e) => Response.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryEarnedFeesRequest(): QueryEarnedFeesRequest {
  return { provider: "" };
}

export const QueryEarnedFeesRequest = {
  encode(message: QueryEarnedFeesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEarnedFeesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEarnedFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEarnedFeesRequest {
    return { provider: isSet(object.provider) ? String(object.provider) : "" };
  },

  toJSON(message: QueryEarnedFeesRequest): unknown {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryEarnedFeesRequest>, I>>(object: I): QueryEarnedFeesRequest {
    const message = createBaseQueryEarnedFeesRequest();
    message.provider = object.provider ?? "";
    return message;
  },
};

function createBaseQueryEarnedFeesResponse(): QueryEarnedFeesResponse {
  return { fees: [] };
}

export const QueryEarnedFeesResponse = {
  encode(message: QueryEarnedFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEarnedFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEarnedFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEarnedFeesResponse {
    return { fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Coin.fromJSON(e)) : [] };
  },

  toJSON(message: QueryEarnedFeesResponse): unknown {
    const obj: any = {};
    if (message.fees) {
      obj.fees = message.fees.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.fees = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryEarnedFeesResponse>, I>>(object: I): QueryEarnedFeesResponse {
    const message = createBaseQueryEarnedFeesResponse();
    message.fees = object.fees?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuerySchemaRequest(): QuerySchemaRequest {
  return { schemaName: "" };
}

export const QuerySchemaRequest = {
  encode(message: QuerySchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaName !== "") {
      writer.uint32(10).string(message.schemaName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySchemaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySchemaRequest {
    return { schemaName: isSet(object.schemaName) ? String(object.schemaName) : "" };
  },

  toJSON(message: QuerySchemaRequest): unknown {
    const obj: any = {};
    message.schemaName !== undefined && (obj.schemaName = message.schemaName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySchemaRequest>, I>>(object: I): QuerySchemaRequest {
    const message = createBaseQuerySchemaRequest();
    message.schemaName = object.schemaName ?? "";
    return message;
  },
};

function createBaseQuerySchemaResponse(): QuerySchemaResponse {
  return { schema: "" };
}

export const QuerySchemaResponse = {
  encode(message: QuerySchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schema !== "") {
      writer.uint32(10).string(message.schema);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySchemaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schema = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySchemaResponse {
    return { schema: isSet(object.schema) ? String(object.schema) : "" };
  },

  toJSON(message: QuerySchemaResponse): unknown {
    const obj: any = {};
    message.schema !== undefined && (obj.schema = message.schema);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySchemaResponse>, I>>(object: I): QuerySchemaResponse {
    const message = createBaseQuerySchemaResponse();
    message.schema = object.schema ?? "";
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

/** Query creates service with iservice as rpc */
export interface Query {
  /** Definition returns service definition */
  Definition(request: QueryDefinitionRequest): Promise<QueryDefinitionResponse>;
  /** Binding returns service Binding with service name and provider */
  Binding(request: QueryBindingRequest): Promise<QueryBindingResponse>;
  /** Bindings returns all service Bindings with service name and owner */
  Bindings(request: QueryBindingsRequest): Promise<QueryBindingsResponse>;
  /** WithdrawAddress returns the withdraw address of the binding owner */
  WithdrawAddress(request: QueryWithdrawAddressRequest): Promise<QueryWithdrawAddressResponse>;
  /** RequestContext returns the request context */
  RequestContext(request: QueryRequestContextRequest): Promise<QueryRequestContextResponse>;
  /** Request returns the request */
  Request(request: QueryRequestRequest): Promise<QueryRequestResponse>;
  /** Request returns all requests of one service with provider */
  Requests(request: QueryRequestsRequest): Promise<QueryRequestsResponse>;
  /** RequestsByReqCtx returns all requests of one service call batch */
  RequestsByReqCtx(request: QueryRequestsByReqCtxRequest): Promise<QueryRequestsByReqCtxResponse>;
  /** Response returns the response of request */
  Response(request: QueryResponseRequest): Promise<QueryResponseResponse>;
  /** Responses returns all responses of one service call batch */
  Responses(request: QueryResponsesRequest): Promise<QueryResponsesResponse>;
  /** EarnedFees returns the earned service fee of one provider */
  EarnedFees(request: QueryEarnedFeesRequest): Promise<QueryEarnedFeesResponse>;
  /** Schema returns the schema */
  Schema(request: QuerySchemaRequest): Promise<QuerySchemaResponse>;
  /** Params queries the service parameters */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Definition = this.Definition.bind(this);
    this.Binding = this.Binding.bind(this);
    this.Bindings = this.Bindings.bind(this);
    this.WithdrawAddress = this.WithdrawAddress.bind(this);
    this.RequestContext = this.RequestContext.bind(this);
    this.Request = this.Request.bind(this);
    this.Requests = this.Requests.bind(this);
    this.RequestsByReqCtx = this.RequestsByReqCtx.bind(this);
    this.Response = this.Response.bind(this);
    this.Responses = this.Responses.bind(this);
    this.EarnedFees = this.EarnedFees.bind(this);
    this.Schema = this.Schema.bind(this);
    this.Params = this.Params.bind(this);
  }
  Definition(request: QueryDefinitionRequest): Promise<QueryDefinitionResponse> {
    const data = QueryDefinitionRequest.encode(request).finish();
    const promise = this.rpc.request("petrimod.service.Query", "Definition", data);
    return promise.then((data) => QueryDefinitionResponse.decode(new _m0.Reader(data)));
  }

  Binding(request: QueryBindingRequest): Promise<QueryBindingResponse> {
    const data = QueryBindingRequest.encode(request).finish();
    const promise = this.rpc.request("petrimod.service.Query", "Binding", data);
    return promise.then((data) => QueryBindingResponse.decode(new _m0.Reader(data)));
  }

  Bindings(request: QueryBindingsRequest): Promise<QueryBindingsResponse> {
    const data = QueryBindingsRequest.encode(request).finish();
    const promise = this.rpc.request("petrimod.service.Query", "Bindings", data);
    return promise.then((data) => QueryBindingsResponse.decode(new _m0.Reader(data)));
  }

  WithdrawAddress(request: QueryWithdrawAddressRequest): Promise<QueryWithdrawAddressResponse> {
    const data = QueryWithdrawAddressRequest.encode(request).finish();
    const promise = this.rpc.request("petrimod.service.Query", "WithdrawAddress", data);
    return promise.then((data) => QueryWithdrawAddressResponse.decode(new _m0.Reader(data)));
  }

  RequestContext(request: QueryRequestContextRequest): Promise<QueryRequestContextResponse> {
    const data = QueryRequestContextRequest.encode(request).finish();
    const promise = this.rpc.request("petrimod.service.Query", "RequestContext", data);
    return promise.then((data) => QueryRequestContextResponse.decode(new _m0.Reader(data)));
  }

  Request(request: QueryRequestRequest): Promise<QueryRequestResponse> {
    const data = QueryRequestRequest.encode(request).finish();
    const promise = this.rpc.request("petrimod.service.Query", "Request", data);
    return promise.then((data) => QueryRequestResponse.decode(new _m0.Reader(data)));
  }

  Requests(request: QueryRequestsRequest): Promise<QueryRequestsResponse> {
    const data = QueryRequestsRequest.encode(request).finish();
    const promise = this.rpc.request("petrimod.service.Query", "Requests", data);
    return promise.then((data) => QueryRequestsResponse.decode(new _m0.Reader(data)));
  }

  RequestsByReqCtx(request: QueryRequestsByReqCtxRequest): Promise<QueryRequestsByReqCtxResponse> {
    const data = QueryRequestsByReqCtxRequest.encode(request).finish();
    const promise = this.rpc.request("petrimod.service.Query", "RequestsByReqCtx", data);
    return promise.then((data) => QueryRequestsByReqCtxResponse.decode(new _m0.Reader(data)));
  }

  Response(request: QueryResponseRequest): Promise<QueryResponseResponse> {
    const data = QueryResponseRequest.encode(request).finish();
    const promise = this.rpc.request("petrimod.service.Query", "Response", data);
    return promise.then((data) => QueryResponseResponse.decode(new _m0.Reader(data)));
  }

  Responses(request: QueryResponsesRequest): Promise<QueryResponsesResponse> {
    const data = QueryResponsesRequest.encode(request).finish();
    const promise = this.rpc.request("petrimod.service.Query", "Responses", data);
    return promise.then((data) => QueryResponsesResponse.decode(new _m0.Reader(data)));
  }

  EarnedFees(request: QueryEarnedFeesRequest): Promise<QueryEarnedFeesResponse> {
    const data = QueryEarnedFeesRequest.encode(request).finish();
    const promise = this.rpc.request("petrimod.service.Query", "EarnedFees", data);
    return promise.then((data) => QueryEarnedFeesResponse.decode(new _m0.Reader(data)));
  }

  Schema(request: QuerySchemaRequest): Promise<QuerySchemaResponse> {
    const data = QuerySchemaRequest.encode(request).finish();
    const promise = this.rpc.request("petrimod.service.Query", "Schema", data);
    return promise.then((data) => QuerySchemaResponse.decode(new _m0.Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("petrimod.service.Query", "Params", data);
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
