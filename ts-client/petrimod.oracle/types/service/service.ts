/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Duration } from "../google/protobuf/duration";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "petrimod.service";

/**
 * RequestContextBatchState is a type alias that represents a request batch
 * status as a byte
 */
export enum RequestContextBatchState {
  /** BATCH_RUNNING - BATCH_RUNNING defines the running batch status. */
  BATCH_RUNNING = 0,
  /** BATCH_COMPLETED - BATCH_COMPLETED defines the completed batch status. */
  BATCH_COMPLETED = 1,
  UNRECOGNIZED = -1,
}

export function requestContextBatchStateFromJSON(object: any): RequestContextBatchState {
  switch (object) {
    case 0:
    case "BATCH_RUNNING":
      return RequestContextBatchState.BATCH_RUNNING;
    case 1:
    case "BATCH_COMPLETED":
      return RequestContextBatchState.BATCH_COMPLETED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RequestContextBatchState.UNRECOGNIZED;
  }
}

export function requestContextBatchStateToJSON(object: RequestContextBatchState): string {
  switch (object) {
    case RequestContextBatchState.BATCH_RUNNING:
      return "BATCH_RUNNING";
    case RequestContextBatchState.BATCH_COMPLETED:
      return "BATCH_COMPLETED";
    case RequestContextBatchState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * RequestContextState is a type alias that represents a request status as a
 * byte
 */
export enum RequestContextState {
  /** RUNNING - RUNNING defines the running request context status */
  RUNNING = 0,
  /** PAUSED - PAUSED defines the paused request context status */
  PAUSED = 1,
  /** COMPLETED - COMPLETED defines the completed request context status */
  COMPLETED = 2,
  UNRECOGNIZED = -1,
}

export function requestContextStateFromJSON(object: any): RequestContextState {
  switch (object) {
    case 0:
    case "RUNNING":
      return RequestContextState.RUNNING;
    case 1:
    case "PAUSED":
      return RequestContextState.PAUSED;
    case 2:
    case "COMPLETED":
      return RequestContextState.COMPLETED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RequestContextState.UNRECOGNIZED;
  }
}

export function requestContextStateToJSON(object: RequestContextState): string {
  switch (object) {
    case RequestContextState.RUNNING:
      return "RUNNING";
    case RequestContextState.PAUSED:
      return "PAUSED";
    case RequestContextState.COMPLETED:
      return "COMPLETED";
    case RequestContextState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** ServiceDefinition defines a standard for service definition */
export interface ServiceDefinition {
  name: string;
  description: string;
  tags: string[];
  author: string;
  authorDescription: string;
  schemas: string;
}

/** ServiceBinding defines a standard for service binding */
export interface ServiceBinding {
  serviceName: string;
  provider: string;
  deposit: Coin[];
  pricing: string;
  qos: number;
  options: string;
  available: boolean;
  disabledTime: Date | undefined;
  owner: string;
}

/** RequestContext defines a standard for request context */
export interface RequestContext {
  serviceName: string;
  providers: string[];
  consumer: string;
  input: string;
  serviceFeeCap: Coin[];
  moduleName: string;
  timeout: number;
  repeated: boolean;
  repeatedFrequency: number;
  repeatedTotal: number;
  batchCounter: number;
  batchRequestCount: number;
  batchResponseCount: number;
  batchResponseThreshold: number;
  responseThreshold: number;
  batchState: RequestContextBatchState;
  state: RequestContextState;
}

/** Request defines a standard for request */
export interface Request {
  id: string;
  serviceName: string;
  provider: string;
  consumer: string;
  input: string;
  serviceFee: Coin[];
  requestHeight: number;
  expirationHeight: number;
  requestContextId: string;
  requestContextBatchCounter: number;
}

/** CompactRequest defines a standard for compact request */
export interface CompactRequest {
  requestContextId: string;
  requestContextBatchCounter: number;
  provider: string;
  serviceFee: Coin[];
  requestHeight: number;
  expirationHeight: number;
}

/** Response defines a standard for response */
export interface Response {
  provider: string;
  consumer: string;
  result: string;
  output: string;
  requestContextId: string;
  requestContextBatchCounter: number;
}

/** Pricing defines a standard for service pricing */
export interface Pricing {
  price: Coin[];
  promotionsByTime: PromotionByTime[];
  promotionsByVolume: PromotionByVolume[];
}

/** PromotionByTime defines a standard for service promotion by time */
export interface PromotionByTime {
  startTime: Date | undefined;
  endTime: Date | undefined;
  discount: string;
}

/** PromotionByVolume defines a standard for service promotion by volume */
export interface PromotionByVolume {
  volume: number;
  discount: string;
}

/** Params defines service module's parameters */
export interface Params {
  maxRequestTimeout: number;
  minDepositMultiple: number;
  minDeposit: Coin[];
  serviceFeeTax: string;
  slashFraction: string;
  complaintRetrospect: Duration | undefined;
  arbitrationTimeLimit: Duration | undefined;
  txSizeLimit: number;
  baseDenom: string;
  restrictedServiceFeeDenom: boolean;
}

function createBaseServiceDefinition(): ServiceDefinition {
  return { name: "", description: "", tags: [], author: "", authorDescription: "", schemas: "" };
}

export const ServiceDefinition = {
  encode(message: ServiceDefinition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.tags) {
      writer.uint32(26).string(v!);
    }
    if (message.author !== "") {
      writer.uint32(34).string(message.author);
    }
    if (message.authorDescription !== "") {
      writer.uint32(42).string(message.authorDescription);
    }
    if (message.schemas !== "") {
      writer.uint32(50).string(message.schemas);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceDefinition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.tags.push(reader.string());
          break;
        case 4:
          message.author = reader.string();
          break;
        case 5:
          message.authorDescription = reader.string();
          break;
        case 6:
          message.schemas = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ServiceDefinition {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      author: isSet(object.author) ? String(object.author) : "",
      authorDescription: isSet(object.authorDescription) ? String(object.authorDescription) : "",
      schemas: isSet(object.schemas) ? String(object.schemas) : "",
    };
  },

  toJSON(message: ServiceDefinition): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.author !== undefined && (obj.author = message.author);
    message.authorDescription !== undefined && (obj.authorDescription = message.authorDescription);
    message.schemas !== undefined && (obj.schemas = message.schemas);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ServiceDefinition>, I>>(object: I): ServiceDefinition {
    const message = createBaseServiceDefinition();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.tags = object.tags?.map((e) => e) || [];
    message.author = object.author ?? "";
    message.authorDescription = object.authorDescription ?? "";
    message.schemas = object.schemas ?? "";
    return message;
  },
};

function createBaseServiceBinding(): ServiceBinding {
  return {
    serviceName: "",
    provider: "",
    deposit: [],
    pricing: "",
    qos: 0,
    options: "",
    available: false,
    disabledTime: undefined,
    owner: "",
  };
}

export const ServiceBinding = {
  encode(message: ServiceBinding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    for (const v of message.deposit) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.pricing !== "") {
      writer.uint32(34).string(message.pricing);
    }
    if (message.qos !== 0) {
      writer.uint32(40).uint64(message.qos);
    }
    if (message.options !== "") {
      writer.uint32(50).string(message.options);
    }
    if (message.available === true) {
      writer.uint32(56).bool(message.available);
    }
    if (message.disabledTime !== undefined) {
      Timestamp.encode(toTimestamp(message.disabledTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(74).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceBinding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceBinding();
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
          message.deposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.pricing = reader.string();
          break;
        case 5:
          message.qos = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.options = reader.string();
          break;
        case 7:
          message.available = reader.bool();
          break;
        case 8:
          message.disabledTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ServiceBinding {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      deposit: Array.isArray(object?.deposit) ? object.deposit.map((e: any) => Coin.fromJSON(e)) : [],
      pricing: isSet(object.pricing) ? String(object.pricing) : "",
      qos: isSet(object.qos) ? Number(object.qos) : 0,
      options: isSet(object.options) ? String(object.options) : "",
      available: isSet(object.available) ? Boolean(object.available) : false,
      disabledTime: isSet(object.disabledTime) ? fromJsonTimestamp(object.disabledTime) : undefined,
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: ServiceBinding): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.provider !== undefined && (obj.provider = message.provider);
    if (message.deposit) {
      obj.deposit = message.deposit.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.deposit = [];
    }
    message.pricing !== undefined && (obj.pricing = message.pricing);
    message.qos !== undefined && (obj.qos = Math.round(message.qos));
    message.options !== undefined && (obj.options = message.options);
    message.available !== undefined && (obj.available = message.available);
    message.disabledTime !== undefined && (obj.disabledTime = message.disabledTime.toISOString());
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ServiceBinding>, I>>(object: I): ServiceBinding {
    const message = createBaseServiceBinding();
    message.serviceName = object.serviceName ?? "";
    message.provider = object.provider ?? "";
    message.deposit = object.deposit?.map((e) => Coin.fromPartial(e)) || [];
    message.pricing = object.pricing ?? "";
    message.qos = object.qos ?? 0;
    message.options = object.options ?? "";
    message.available = object.available ?? false;
    message.disabledTime = object.disabledTime ?? undefined;
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseRequestContext(): RequestContext {
  return {
    serviceName: "",
    providers: [],
    consumer: "",
    input: "",
    serviceFeeCap: [],
    moduleName: "",
    timeout: 0,
    repeated: false,
    repeatedFrequency: 0,
    repeatedTotal: 0,
    batchCounter: 0,
    batchRequestCount: 0,
    batchResponseCount: 0,
    batchResponseThreshold: 0,
    responseThreshold: 0,
    batchState: 0,
    state: 0,
  };
}

export const RequestContext = {
  encode(message: RequestContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    for (const v of message.providers) {
      writer.uint32(18).string(v!);
    }
    if (message.consumer !== "") {
      writer.uint32(26).string(message.consumer);
    }
    if (message.input !== "") {
      writer.uint32(34).string(message.input);
    }
    for (const v of message.serviceFeeCap) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.moduleName !== "") {
      writer.uint32(50).string(message.moduleName);
    }
    if (message.timeout !== 0) {
      writer.uint32(56).int64(message.timeout);
    }
    if (message.repeated === true) {
      writer.uint32(64).bool(message.repeated);
    }
    if (message.repeatedFrequency !== 0) {
      writer.uint32(72).uint64(message.repeatedFrequency);
    }
    if (message.repeatedTotal !== 0) {
      writer.uint32(80).int64(message.repeatedTotal);
    }
    if (message.batchCounter !== 0) {
      writer.uint32(88).uint64(message.batchCounter);
    }
    if (message.batchRequestCount !== 0) {
      writer.uint32(96).uint32(message.batchRequestCount);
    }
    if (message.batchResponseCount !== 0) {
      writer.uint32(104).uint32(message.batchResponseCount);
    }
    if (message.batchResponseThreshold !== 0) {
      writer.uint32(112).uint32(message.batchResponseThreshold);
    }
    if (message.responseThreshold !== 0) {
      writer.uint32(120).uint32(message.responseThreshold);
    }
    if (message.batchState !== 0) {
      writer.uint32(128).int32(message.batchState);
    }
    if (message.state !== 0) {
      writer.uint32(136).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestContext {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.providers.push(reader.string());
          break;
        case 3:
          message.consumer = reader.string();
          break;
        case 4:
          message.input = reader.string();
          break;
        case 5:
          message.serviceFeeCap.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.moduleName = reader.string();
          break;
        case 7:
          message.timeout = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.repeated = reader.bool();
          break;
        case 9:
          message.repeatedFrequency = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.repeatedTotal = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.batchCounter = longToNumber(reader.uint64() as Long);
          break;
        case 12:
          message.batchRequestCount = reader.uint32();
          break;
        case 13:
          message.batchResponseCount = reader.uint32();
          break;
        case 14:
          message.batchResponseThreshold = reader.uint32();
          break;
        case 15:
          message.responseThreshold = reader.uint32();
          break;
        case 16:
          message.batchState = reader.int32() as any;
          break;
        case 17:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestContext {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => String(e)) : [],
      consumer: isSet(object.consumer) ? String(object.consumer) : "",
      input: isSet(object.input) ? String(object.input) : "",
      serviceFeeCap: Array.isArray(object?.serviceFeeCap) ? object.serviceFeeCap.map((e: any) => Coin.fromJSON(e)) : [],
      moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
      timeout: isSet(object.timeout) ? Number(object.timeout) : 0,
      repeated: isSet(object.repeated) ? Boolean(object.repeated) : false,
      repeatedFrequency: isSet(object.repeatedFrequency) ? Number(object.repeatedFrequency) : 0,
      repeatedTotal: isSet(object.repeatedTotal) ? Number(object.repeatedTotal) : 0,
      batchCounter: isSet(object.batchCounter) ? Number(object.batchCounter) : 0,
      batchRequestCount: isSet(object.batchRequestCount) ? Number(object.batchRequestCount) : 0,
      batchResponseCount: isSet(object.batchResponseCount) ? Number(object.batchResponseCount) : 0,
      batchResponseThreshold: isSet(object.batchResponseThreshold) ? Number(object.batchResponseThreshold) : 0,
      responseThreshold: isSet(object.responseThreshold) ? Number(object.responseThreshold) : 0,
      batchState: isSet(object.batchState) ? requestContextBatchStateFromJSON(object.batchState) : 0,
      state: isSet(object.state) ? requestContextStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: RequestContext): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    if (message.providers) {
      obj.providers = message.providers.map((e) => e);
    } else {
      obj.providers = [];
    }
    message.consumer !== undefined && (obj.consumer = message.consumer);
    message.input !== undefined && (obj.input = message.input);
    if (message.serviceFeeCap) {
      obj.serviceFeeCap = message.serviceFeeCap.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.serviceFeeCap = [];
    }
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.timeout !== undefined && (obj.timeout = Math.round(message.timeout));
    message.repeated !== undefined && (obj.repeated = message.repeated);
    message.repeatedFrequency !== undefined && (obj.repeatedFrequency = Math.round(message.repeatedFrequency));
    message.repeatedTotal !== undefined && (obj.repeatedTotal = Math.round(message.repeatedTotal));
    message.batchCounter !== undefined && (obj.batchCounter = Math.round(message.batchCounter));
    message.batchRequestCount !== undefined && (obj.batchRequestCount = Math.round(message.batchRequestCount));
    message.batchResponseCount !== undefined && (obj.batchResponseCount = Math.round(message.batchResponseCount));
    message.batchResponseThreshold !== undefined
      && (obj.batchResponseThreshold = Math.round(message.batchResponseThreshold));
    message.responseThreshold !== undefined && (obj.responseThreshold = Math.round(message.responseThreshold));
    message.batchState !== undefined && (obj.batchState = requestContextBatchStateToJSON(message.batchState));
    message.state !== undefined && (obj.state = requestContextStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestContext>, I>>(object: I): RequestContext {
    const message = createBaseRequestContext();
    message.serviceName = object.serviceName ?? "";
    message.providers = object.providers?.map((e) => e) || [];
    message.consumer = object.consumer ?? "";
    message.input = object.input ?? "";
    message.serviceFeeCap = object.serviceFeeCap?.map((e) => Coin.fromPartial(e)) || [];
    message.moduleName = object.moduleName ?? "";
    message.timeout = object.timeout ?? 0;
    message.repeated = object.repeated ?? false;
    message.repeatedFrequency = object.repeatedFrequency ?? 0;
    message.repeatedTotal = object.repeatedTotal ?? 0;
    message.batchCounter = object.batchCounter ?? 0;
    message.batchRequestCount = object.batchRequestCount ?? 0;
    message.batchResponseCount = object.batchResponseCount ?? 0;
    message.batchResponseThreshold = object.batchResponseThreshold ?? 0;
    message.responseThreshold = object.responseThreshold ?? 0;
    message.batchState = object.batchState ?? 0;
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseRequest(): Request {
  return {
    id: "",
    serviceName: "",
    provider: "",
    consumer: "",
    input: "",
    serviceFee: [],
    requestHeight: 0,
    expirationHeight: 0,
    requestContextId: "",
    requestContextBatchCounter: 0,
  };
}

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.serviceName !== "") {
      writer.uint32(18).string(message.serviceName);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    if (message.consumer !== "") {
      writer.uint32(34).string(message.consumer);
    }
    if (message.input !== "") {
      writer.uint32(42).string(message.input);
    }
    for (const v of message.serviceFee) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.requestHeight !== 0) {
      writer.uint32(56).int64(message.requestHeight);
    }
    if (message.expirationHeight !== 0) {
      writer.uint32(64).int64(message.expirationHeight);
    }
    if (message.requestContextId !== "") {
      writer.uint32(74).string(message.requestContextId);
    }
    if (message.requestContextBatchCounter !== 0) {
      writer.uint32(80).uint64(message.requestContextBatchCounter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.serviceName = reader.string();
          break;
        case 3:
          message.provider = reader.string();
          break;
        case 4:
          message.consumer = reader.string();
          break;
        case 5:
          message.input = reader.string();
          break;
        case 6:
          message.serviceFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.requestHeight = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.expirationHeight = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.requestContextId = reader.string();
          break;
        case 10:
          message.requestContextBatchCounter = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      consumer: isSet(object.consumer) ? String(object.consumer) : "",
      input: isSet(object.input) ? String(object.input) : "",
      serviceFee: Array.isArray(object?.serviceFee) ? object.serviceFee.map((e: any) => Coin.fromJSON(e)) : [],
      requestHeight: isSet(object.requestHeight) ? Number(object.requestHeight) : 0,
      expirationHeight: isSet(object.expirationHeight) ? Number(object.expirationHeight) : 0,
      requestContextId: isSet(object.requestContextId) ? String(object.requestContextId) : "",
      requestContextBatchCounter: isSet(object.requestContextBatchCounter)
        ? Number(object.requestContextBatchCounter)
        : 0,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.provider !== undefined && (obj.provider = message.provider);
    message.consumer !== undefined && (obj.consumer = message.consumer);
    message.input !== undefined && (obj.input = message.input);
    if (message.serviceFee) {
      obj.serviceFee = message.serviceFee.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.serviceFee = [];
    }
    message.requestHeight !== undefined && (obj.requestHeight = Math.round(message.requestHeight));
    message.expirationHeight !== undefined && (obj.expirationHeight = Math.round(message.expirationHeight));
    message.requestContextId !== undefined && (obj.requestContextId = message.requestContextId);
    message.requestContextBatchCounter !== undefined
      && (obj.requestContextBatchCounter = Math.round(message.requestContextBatchCounter));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.id = object.id ?? "";
    message.serviceName = object.serviceName ?? "";
    message.provider = object.provider ?? "";
    message.consumer = object.consumer ?? "";
    message.input = object.input ?? "";
    message.serviceFee = object.serviceFee?.map((e) => Coin.fromPartial(e)) || [];
    message.requestHeight = object.requestHeight ?? 0;
    message.expirationHeight = object.expirationHeight ?? 0;
    message.requestContextId = object.requestContextId ?? "";
    message.requestContextBatchCounter = object.requestContextBatchCounter ?? 0;
    return message;
  },
};

function createBaseCompactRequest(): CompactRequest {
  return {
    requestContextId: "",
    requestContextBatchCounter: 0,
    provider: "",
    serviceFee: [],
    requestHeight: 0,
    expirationHeight: 0,
  };
}

export const CompactRequest = {
  encode(message: CompactRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestContextId !== "") {
      writer.uint32(10).string(message.requestContextId);
    }
    if (message.requestContextBatchCounter !== 0) {
      writer.uint32(16).uint64(message.requestContextBatchCounter);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    for (const v of message.serviceFee) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.requestHeight !== 0) {
      writer.uint32(40).int64(message.requestHeight);
    }
    if (message.expirationHeight !== 0) {
      writer.uint32(48).int64(message.expirationHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompactRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompactRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestContextId = reader.string();
          break;
        case 2:
          message.requestContextBatchCounter = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.provider = reader.string();
          break;
        case 4:
          message.serviceFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.requestHeight = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.expirationHeight = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompactRequest {
    return {
      requestContextId: isSet(object.requestContextId) ? String(object.requestContextId) : "",
      requestContextBatchCounter: isSet(object.requestContextBatchCounter)
        ? Number(object.requestContextBatchCounter)
        : 0,
      provider: isSet(object.provider) ? String(object.provider) : "",
      serviceFee: Array.isArray(object?.serviceFee) ? object.serviceFee.map((e: any) => Coin.fromJSON(e)) : [],
      requestHeight: isSet(object.requestHeight) ? Number(object.requestHeight) : 0,
      expirationHeight: isSet(object.expirationHeight) ? Number(object.expirationHeight) : 0,
    };
  },

  toJSON(message: CompactRequest): unknown {
    const obj: any = {};
    message.requestContextId !== undefined && (obj.requestContextId = message.requestContextId);
    message.requestContextBatchCounter !== undefined
      && (obj.requestContextBatchCounter = Math.round(message.requestContextBatchCounter));
    message.provider !== undefined && (obj.provider = message.provider);
    if (message.serviceFee) {
      obj.serviceFee = message.serviceFee.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.serviceFee = [];
    }
    message.requestHeight !== undefined && (obj.requestHeight = Math.round(message.requestHeight));
    message.expirationHeight !== undefined && (obj.expirationHeight = Math.round(message.expirationHeight));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompactRequest>, I>>(object: I): CompactRequest {
    const message = createBaseCompactRequest();
    message.requestContextId = object.requestContextId ?? "";
    message.requestContextBatchCounter = object.requestContextBatchCounter ?? 0;
    message.provider = object.provider ?? "";
    message.serviceFee = object.serviceFee?.map((e) => Coin.fromPartial(e)) || [];
    message.requestHeight = object.requestHeight ?? 0;
    message.expirationHeight = object.expirationHeight ?? 0;
    return message;
  },
};

function createBaseResponse(): Response {
  return { provider: "", consumer: "", result: "", output: "", requestContextId: "", requestContextBatchCounter: 0 };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.consumer !== "") {
      writer.uint32(18).string(message.consumer);
    }
    if (message.result !== "") {
      writer.uint32(26).string(message.result);
    }
    if (message.output !== "") {
      writer.uint32(34).string(message.output);
    }
    if (message.requestContextId !== "") {
      writer.uint32(42).string(message.requestContextId);
    }
    if (message.requestContextBatchCounter !== 0) {
      writer.uint32(48).uint64(message.requestContextBatchCounter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.consumer = reader.string();
          break;
        case 3:
          message.result = reader.string();
          break;
        case 4:
          message.output = reader.string();
          break;
        case 5:
          message.requestContextId = reader.string();
          break;
        case 6:
          message.requestContextBatchCounter = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response {
    return {
      provider: isSet(object.provider) ? String(object.provider) : "",
      consumer: isSet(object.consumer) ? String(object.consumer) : "",
      result: isSet(object.result) ? String(object.result) : "",
      output: isSet(object.output) ? String(object.output) : "",
      requestContextId: isSet(object.requestContextId) ? String(object.requestContextId) : "",
      requestContextBatchCounter: isSet(object.requestContextBatchCounter)
        ? Number(object.requestContextBatchCounter)
        : 0,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.consumer !== undefined && (obj.consumer = message.consumer);
    message.result !== undefined && (obj.result = message.result);
    message.output !== undefined && (obj.output = message.output);
    message.requestContextId !== undefined && (obj.requestContextId = message.requestContextId);
    message.requestContextBatchCounter !== undefined
      && (obj.requestContextBatchCounter = Math.round(message.requestContextBatchCounter));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.provider = object.provider ?? "";
    message.consumer = object.consumer ?? "";
    message.result = object.result ?? "";
    message.output = object.output ?? "";
    message.requestContextId = object.requestContextId ?? "";
    message.requestContextBatchCounter = object.requestContextBatchCounter ?? 0;
    return message;
  },
};

function createBasePricing(): Pricing {
  return { price: [], promotionsByTime: [], promotionsByVolume: [] };
}

export const Pricing = {
  encode(message: Pricing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.promotionsByTime) {
      PromotionByTime.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.promotionsByVolume) {
      PromotionByVolume.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pricing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePricing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.promotionsByTime.push(PromotionByTime.decode(reader, reader.uint32()));
          break;
        case 3:
          message.promotionsByVolume.push(PromotionByVolume.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pricing {
    return {
      price: Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromJSON(e)) : [],
      promotionsByTime: Array.isArray(object?.promotionsByTime)
        ? object.promotionsByTime.map((e: any) => PromotionByTime.fromJSON(e))
        : [],
      promotionsByVolume: Array.isArray(object?.promotionsByVolume)
        ? object.promotionsByVolume.map((e: any) => PromotionByVolume.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Pricing): unknown {
    const obj: any = {};
    if (message.price) {
      obj.price = message.price.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.price = [];
    }
    if (message.promotionsByTime) {
      obj.promotionsByTime = message.promotionsByTime.map((e) => e ? PromotionByTime.toJSON(e) : undefined);
    } else {
      obj.promotionsByTime = [];
    }
    if (message.promotionsByVolume) {
      obj.promotionsByVolume = message.promotionsByVolume.map((e) => e ? PromotionByVolume.toJSON(e) : undefined);
    } else {
      obj.promotionsByVolume = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pricing>, I>>(object: I): Pricing {
    const message = createBasePricing();
    message.price = object.price?.map((e) => Coin.fromPartial(e)) || [];
    message.promotionsByTime = object.promotionsByTime?.map((e) => PromotionByTime.fromPartial(e)) || [];
    message.promotionsByVolume = object.promotionsByVolume?.map((e) => PromotionByVolume.fromPartial(e)) || [];
    return message;
  },
};

function createBasePromotionByTime(): PromotionByTime {
  return { startTime: undefined, endTime: undefined, discount: "" };
}

export const PromotionByTime = {
  encode(message: PromotionByTime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(10).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.discount !== "") {
      writer.uint32(26).string(message.discount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PromotionByTime {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePromotionByTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.discount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PromotionByTime {
    return {
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      discount: isSet(object.discount) ? String(object.discount) : "",
    };
  },

  toJSON(message: PromotionByTime): unknown {
    const obj: any = {};
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    message.discount !== undefined && (obj.discount = message.discount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PromotionByTime>, I>>(object: I): PromotionByTime {
    const message = createBasePromotionByTime();
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.discount = object.discount ?? "";
    return message;
  },
};

function createBasePromotionByVolume(): PromotionByVolume {
  return { volume: 0, discount: "" };
}

export const PromotionByVolume = {
  encode(message: PromotionByVolume, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.volume !== 0) {
      writer.uint32(8).uint64(message.volume);
    }
    if (message.discount !== "") {
      writer.uint32(18).string(message.discount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PromotionByVolume {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePromotionByVolume();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volume = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.discount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PromotionByVolume {
    return {
      volume: isSet(object.volume) ? Number(object.volume) : 0,
      discount: isSet(object.discount) ? String(object.discount) : "",
    };
  },

  toJSON(message: PromotionByVolume): unknown {
    const obj: any = {};
    message.volume !== undefined && (obj.volume = Math.round(message.volume));
    message.discount !== undefined && (obj.discount = message.discount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PromotionByVolume>, I>>(object: I): PromotionByVolume {
    const message = createBasePromotionByVolume();
    message.volume = object.volume ?? 0;
    message.discount = object.discount ?? "";
    return message;
  },
};

function createBaseParams(): Params {
  return {
    maxRequestTimeout: 0,
    minDepositMultiple: 0,
    minDeposit: [],
    serviceFeeTax: "",
    slashFraction: "",
    complaintRetrospect: undefined,
    arbitrationTimeLimit: undefined,
    txSizeLimit: 0,
    baseDenom: "",
    restrictedServiceFeeDenom: false,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxRequestTimeout !== 0) {
      writer.uint32(8).int64(message.maxRequestTimeout);
    }
    if (message.minDepositMultiple !== 0) {
      writer.uint32(16).int64(message.minDepositMultiple);
    }
    for (const v of message.minDeposit) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.serviceFeeTax !== "") {
      writer.uint32(34).string(message.serviceFeeTax);
    }
    if (message.slashFraction !== "") {
      writer.uint32(42).string(message.slashFraction);
    }
    if (message.complaintRetrospect !== undefined) {
      Duration.encode(message.complaintRetrospect, writer.uint32(50).fork()).ldelim();
    }
    if (message.arbitrationTimeLimit !== undefined) {
      Duration.encode(message.arbitrationTimeLimit, writer.uint32(58).fork()).ldelim();
    }
    if (message.txSizeLimit !== 0) {
      writer.uint32(64).uint64(message.txSizeLimit);
    }
    if (message.baseDenom !== "") {
      writer.uint32(74).string(message.baseDenom);
    }
    if (message.restrictedServiceFeeDenom === true) {
      writer.uint32(80).bool(message.restrictedServiceFeeDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxRequestTimeout = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.minDepositMultiple = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.minDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.serviceFeeTax = reader.string();
          break;
        case 5:
          message.slashFraction = reader.string();
          break;
        case 6:
          message.complaintRetrospect = Duration.decode(reader, reader.uint32());
          break;
        case 7:
          message.arbitrationTimeLimit = Duration.decode(reader, reader.uint32());
          break;
        case 8:
          message.txSizeLimit = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.baseDenom = reader.string();
          break;
        case 10:
          message.restrictedServiceFeeDenom = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      maxRequestTimeout: isSet(object.maxRequestTimeout) ? Number(object.maxRequestTimeout) : 0,
      minDepositMultiple: isSet(object.minDepositMultiple) ? Number(object.minDepositMultiple) : 0,
      minDeposit: Array.isArray(object?.minDeposit) ? object.minDeposit.map((e: any) => Coin.fromJSON(e)) : [],
      serviceFeeTax: isSet(object.serviceFeeTax) ? String(object.serviceFeeTax) : "",
      slashFraction: isSet(object.slashFraction) ? String(object.slashFraction) : "",
      complaintRetrospect: isSet(object.complaintRetrospect)
        ? Duration.fromJSON(object.complaintRetrospect)
        : undefined,
      arbitrationTimeLimit: isSet(object.arbitrationTimeLimit)
        ? Duration.fromJSON(object.arbitrationTimeLimit)
        : undefined,
      txSizeLimit: isSet(object.txSizeLimit) ? Number(object.txSizeLimit) : 0,
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      restrictedServiceFeeDenom: isSet(object.restrictedServiceFeeDenom)
        ? Boolean(object.restrictedServiceFeeDenom)
        : false,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxRequestTimeout !== undefined && (obj.maxRequestTimeout = Math.round(message.maxRequestTimeout));
    message.minDepositMultiple !== undefined && (obj.minDepositMultiple = Math.round(message.minDepositMultiple));
    if (message.minDeposit) {
      obj.minDeposit = message.minDeposit.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.minDeposit = [];
    }
    message.serviceFeeTax !== undefined && (obj.serviceFeeTax = message.serviceFeeTax);
    message.slashFraction !== undefined && (obj.slashFraction = message.slashFraction);
    message.complaintRetrospect !== undefined && (obj.complaintRetrospect = message.complaintRetrospect
      ? Duration.toJSON(message.complaintRetrospect)
      : undefined);
    message.arbitrationTimeLimit !== undefined && (obj.arbitrationTimeLimit = message.arbitrationTimeLimit
      ? Duration.toJSON(message.arbitrationTimeLimit)
      : undefined);
    message.txSizeLimit !== undefined && (obj.txSizeLimit = Math.round(message.txSizeLimit));
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.restrictedServiceFeeDenom !== undefined
      && (obj.restrictedServiceFeeDenom = message.restrictedServiceFeeDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.maxRequestTimeout = object.maxRequestTimeout ?? 0;
    message.minDepositMultiple = object.minDepositMultiple ?? 0;
    message.minDeposit = object.minDeposit?.map((e) => Coin.fromPartial(e)) || [];
    message.serviceFeeTax = object.serviceFeeTax ?? "";
    message.slashFraction = object.slashFraction ?? "";
    message.complaintRetrospect = (object.complaintRetrospect !== undefined && object.complaintRetrospect !== null)
      ? Duration.fromPartial(object.complaintRetrospect)
      : undefined;
    message.arbitrationTimeLimit = (object.arbitrationTimeLimit !== undefined && object.arbitrationTimeLimit !== null)
      ? Duration.fromPartial(object.arbitrationTimeLimit)
      : undefined;
    message.txSizeLimit = object.txSizeLimit ?? 0;
    message.baseDenom = object.baseDenom ?? "";
    message.restrictedServiceFeeDenom = object.restrictedServiceFeeDenom ?? false;
    return message;
  },
};

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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
