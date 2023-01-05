/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "petrimod.oracle";

/** MsgCreateFeed defines an sdk.Msg type that supports creating a feed */
export interface MsgCreateFeed {
  feedName: string;
  latestHistory: number;
  description: string;
  creator: string;
  serviceName: string;
  providers: string[];
  input: string;
  timeout: number;
  serviceFeeCap: Coin[];
  repeatedFrequency: number;
  aggregateFunc: string;
  valueJsonPath: string;
  responseThreshold: number;
}

/** MsgCreateFeedResponse defines the Msg/CreateFeed response type */
export interface MsgCreateFeedResponse {
}

/** MsgPauseFeed defines an sdk.Msg type that supports stating a feed */
export interface MsgStartFeed {
  feedName: string;
  creator: string;
}

/** MsgStartFeedResponse defines the Msg/StartFeed response type */
export interface MsgStartFeedResponse {
}

/** MsgPauseFeed defines an sdk.Msg type that supports pausing a feed */
export interface MsgPauseFeed {
  feedName: string;
  creator: string;
}

/** MsgPauseFeedResponse defines the Msg/PauseFeed response type */
export interface MsgPauseFeedResponse {
}

/** MsgEditFeed defines an sdk.Msg type that supports editing a feed */
export interface MsgEditFeed {
  feedName: string;
  description: string;
  latestHistory: number;
  providers: string[];
  timeout: number;
  serviceFeeCap: Coin[];
  repeatedFrequency: number;
  responseThreshold: number;
  creator: string;
}

/** MsgEditFeedResponse defines the Msg/EditFeed response type */
export interface MsgEditFeedResponse {
}

function createBaseMsgCreateFeed(): MsgCreateFeed {
  return {
    feedName: "",
    latestHistory: 0,
    description: "",
    creator: "",
    serviceName: "",
    providers: [],
    input: "",
    timeout: 0,
    serviceFeeCap: [],
    repeatedFrequency: 0,
    aggregateFunc: "",
    valueJsonPath: "",
    responseThreshold: 0,
  };
}

export const MsgCreateFeed = {
  encode(message: MsgCreateFeed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedName !== "") {
      writer.uint32(10).string(message.feedName);
    }
    if (message.latestHistory !== 0) {
      writer.uint32(16).uint64(message.latestHistory);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    if (message.serviceName !== "") {
      writer.uint32(42).string(message.serviceName);
    }
    for (const v of message.providers) {
      writer.uint32(50).string(v!);
    }
    if (message.input !== "") {
      writer.uint32(58).string(message.input);
    }
    if (message.timeout !== 0) {
      writer.uint32(64).int64(message.timeout);
    }
    for (const v of message.serviceFeeCap) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.repeatedFrequency !== 0) {
      writer.uint32(80).uint64(message.repeatedFrequency);
    }
    if (message.aggregateFunc !== "") {
      writer.uint32(90).string(message.aggregateFunc);
    }
    if (message.valueJsonPath !== "") {
      writer.uint32(98).string(message.valueJsonPath);
    }
    if (message.responseThreshold !== 0) {
      writer.uint32(104).uint32(message.responseThreshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFeed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedName = reader.string();
          break;
        case 2:
          message.latestHistory = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.creator = reader.string();
          break;
        case 5:
          message.serviceName = reader.string();
          break;
        case 6:
          message.providers.push(reader.string());
          break;
        case 7:
          message.input = reader.string();
          break;
        case 8:
          message.timeout = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.serviceFeeCap.push(Coin.decode(reader, reader.uint32()));
          break;
        case 10:
          message.repeatedFrequency = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.aggregateFunc = reader.string();
          break;
        case 12:
          message.valueJsonPath = reader.string();
          break;
        case 13:
          message.responseThreshold = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateFeed {
    return {
      feedName: isSet(object.feedName) ? String(object.feedName) : "",
      latestHistory: isSet(object.latestHistory) ? Number(object.latestHistory) : 0,
      description: isSet(object.description) ? String(object.description) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => String(e)) : [],
      input: isSet(object.input) ? String(object.input) : "",
      timeout: isSet(object.timeout) ? Number(object.timeout) : 0,
      serviceFeeCap: Array.isArray(object?.serviceFeeCap) ? object.serviceFeeCap.map((e: any) => Coin.fromJSON(e)) : [],
      repeatedFrequency: isSet(object.repeatedFrequency) ? Number(object.repeatedFrequency) : 0,
      aggregateFunc: isSet(object.aggregateFunc) ? String(object.aggregateFunc) : "",
      valueJsonPath: isSet(object.valueJsonPath) ? String(object.valueJsonPath) : "",
      responseThreshold: isSet(object.responseThreshold) ? Number(object.responseThreshold) : 0,
    };
  },

  toJSON(message: MsgCreateFeed): unknown {
    const obj: any = {};
    message.feedName !== undefined && (obj.feedName = message.feedName);
    message.latestHistory !== undefined && (obj.latestHistory = Math.round(message.latestHistory));
    message.description !== undefined && (obj.description = message.description);
    message.creator !== undefined && (obj.creator = message.creator);
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
    message.aggregateFunc !== undefined && (obj.aggregateFunc = message.aggregateFunc);
    message.valueJsonPath !== undefined && (obj.valueJsonPath = message.valueJsonPath);
    message.responseThreshold !== undefined && (obj.responseThreshold = Math.round(message.responseThreshold));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateFeed>, I>>(object: I): MsgCreateFeed {
    const message = createBaseMsgCreateFeed();
    message.feedName = object.feedName ?? "";
    message.latestHistory = object.latestHistory ?? 0;
    message.description = object.description ?? "";
    message.creator = object.creator ?? "";
    message.serviceName = object.serviceName ?? "";
    message.providers = object.providers?.map((e) => e) || [];
    message.input = object.input ?? "";
    message.timeout = object.timeout ?? 0;
    message.serviceFeeCap = object.serviceFeeCap?.map((e) => Coin.fromPartial(e)) || [];
    message.repeatedFrequency = object.repeatedFrequency ?? 0;
    message.aggregateFunc = object.aggregateFunc ?? "";
    message.valueJsonPath = object.valueJsonPath ?? "";
    message.responseThreshold = object.responseThreshold ?? 0;
    return message;
  },
};

function createBaseMsgCreateFeedResponse(): MsgCreateFeedResponse {
  return {};
}

export const MsgCreateFeedResponse = {
  encode(_: MsgCreateFeedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFeedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFeedResponse();
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

  fromJSON(_: any): MsgCreateFeedResponse {
    return {};
  },

  toJSON(_: MsgCreateFeedResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateFeedResponse>, I>>(_: I): MsgCreateFeedResponse {
    const message = createBaseMsgCreateFeedResponse();
    return message;
  },
};

function createBaseMsgStartFeed(): MsgStartFeed {
  return { feedName: "", creator: "" };
}

export const MsgStartFeed = {
  encode(message: MsgStartFeed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedName !== "") {
      writer.uint32(10).string(message.feedName);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartFeed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedName = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStartFeed {
    return {
      feedName: isSet(object.feedName) ? String(object.feedName) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: MsgStartFeed): unknown {
    const obj: any = {};
    message.feedName !== undefined && (obj.feedName = message.feedName);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStartFeed>, I>>(object: I): MsgStartFeed {
    const message = createBaseMsgStartFeed();
    message.feedName = object.feedName ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgStartFeedResponse(): MsgStartFeedResponse {
  return {};
}

export const MsgStartFeedResponse = {
  encode(_: MsgStartFeedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartFeedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartFeedResponse();
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

  fromJSON(_: any): MsgStartFeedResponse {
    return {};
  },

  toJSON(_: MsgStartFeedResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStartFeedResponse>, I>>(_: I): MsgStartFeedResponse {
    const message = createBaseMsgStartFeedResponse();
    return message;
  },
};

function createBaseMsgPauseFeed(): MsgPauseFeed {
  return { feedName: "", creator: "" };
}

export const MsgPauseFeed = {
  encode(message: MsgPauseFeed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedName !== "") {
      writer.uint32(10).string(message.feedName);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseFeed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPauseFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedName = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPauseFeed {
    return {
      feedName: isSet(object.feedName) ? String(object.feedName) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: MsgPauseFeed): unknown {
    const obj: any = {};
    message.feedName !== undefined && (obj.feedName = message.feedName);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPauseFeed>, I>>(object: I): MsgPauseFeed {
    const message = createBaseMsgPauseFeed();
    message.feedName = object.feedName ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgPauseFeedResponse(): MsgPauseFeedResponse {
  return {};
}

export const MsgPauseFeedResponse = {
  encode(_: MsgPauseFeedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseFeedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPauseFeedResponse();
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

  fromJSON(_: any): MsgPauseFeedResponse {
    return {};
  },

  toJSON(_: MsgPauseFeedResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPauseFeedResponse>, I>>(_: I): MsgPauseFeedResponse {
    const message = createBaseMsgPauseFeedResponse();
    return message;
  },
};

function createBaseMsgEditFeed(): MsgEditFeed {
  return {
    feedName: "",
    description: "",
    latestHistory: 0,
    providers: [],
    timeout: 0,
    serviceFeeCap: [],
    repeatedFrequency: 0,
    responseThreshold: 0,
    creator: "",
  };
}

export const MsgEditFeed = {
  encode(message: MsgEditFeed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedName !== "") {
      writer.uint32(10).string(message.feedName);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.latestHistory !== 0) {
      writer.uint32(24).uint64(message.latestHistory);
    }
    for (const v of message.providers) {
      writer.uint32(34).string(v!);
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
    if (message.creator !== "") {
      writer.uint32(74).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditFeed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedName = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.latestHistory = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.providers.push(reader.string());
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
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEditFeed {
    return {
      feedName: isSet(object.feedName) ? String(object.feedName) : "",
      description: isSet(object.description) ? String(object.description) : "",
      latestHistory: isSet(object.latestHistory) ? Number(object.latestHistory) : 0,
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => String(e)) : [],
      timeout: isSet(object.timeout) ? Number(object.timeout) : 0,
      serviceFeeCap: Array.isArray(object?.serviceFeeCap) ? object.serviceFeeCap.map((e: any) => Coin.fromJSON(e)) : [],
      repeatedFrequency: isSet(object.repeatedFrequency) ? Number(object.repeatedFrequency) : 0,
      responseThreshold: isSet(object.responseThreshold) ? Number(object.responseThreshold) : 0,
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: MsgEditFeed): unknown {
    const obj: any = {};
    message.feedName !== undefined && (obj.feedName = message.feedName);
    message.description !== undefined && (obj.description = message.description);
    message.latestHistory !== undefined && (obj.latestHistory = Math.round(message.latestHistory));
    if (message.providers) {
      obj.providers = message.providers.map((e) => e);
    } else {
      obj.providers = [];
    }
    message.timeout !== undefined && (obj.timeout = Math.round(message.timeout));
    if (message.serviceFeeCap) {
      obj.serviceFeeCap = message.serviceFeeCap.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.serviceFeeCap = [];
    }
    message.repeatedFrequency !== undefined && (obj.repeatedFrequency = Math.round(message.repeatedFrequency));
    message.responseThreshold !== undefined && (obj.responseThreshold = Math.round(message.responseThreshold));
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditFeed>, I>>(object: I): MsgEditFeed {
    const message = createBaseMsgEditFeed();
    message.feedName = object.feedName ?? "";
    message.description = object.description ?? "";
    message.latestHistory = object.latestHistory ?? 0;
    message.providers = object.providers?.map((e) => e) || [];
    message.timeout = object.timeout ?? 0;
    message.serviceFeeCap = object.serviceFeeCap?.map((e) => Coin.fromPartial(e)) || [];
    message.repeatedFrequency = object.repeatedFrequency ?? 0;
    message.responseThreshold = object.responseThreshold ?? 0;
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgEditFeedResponse(): MsgEditFeedResponse {
  return {};
}

export const MsgEditFeedResponse = {
  encode(_: MsgEditFeedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditFeedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditFeedResponse();
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

  fromJSON(_: any): MsgEditFeedResponse {
    return {};
  },

  toJSON(_: MsgEditFeedResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditFeedResponse>, I>>(_: I): MsgEditFeedResponse {
    const message = createBaseMsgEditFeedResponse();
    return message;
  },
};

/** Msg defines the oracle Msg service */
export interface Msg {
  /** CreateFeed defines a method for creating a new feed */
  CreateFeed(request: MsgCreateFeed): Promise<MsgCreateFeedResponse>;
  /** EditFeed defines a method for editing a feed */
  EditFeed(request: MsgEditFeed): Promise<MsgEditFeedResponse>;
  /** StartFeed defines a method for starting a feed */
  StartFeed(request: MsgStartFeed): Promise<MsgStartFeedResponse>;
  /** PauseFeed defines a method for pausing a feed */
  PauseFeed(request: MsgPauseFeed): Promise<MsgPauseFeedResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateFeed = this.CreateFeed.bind(this);
    this.EditFeed = this.EditFeed.bind(this);
    this.StartFeed = this.StartFeed.bind(this);
    this.PauseFeed = this.PauseFeed.bind(this);
  }
  CreateFeed(request: MsgCreateFeed): Promise<MsgCreateFeedResponse> {
    const data = MsgCreateFeed.encode(request).finish();
    const promise = this.rpc.request("petrimod.oracle.Msg", "CreateFeed", data);
    return promise.then((data) => MsgCreateFeedResponse.decode(new _m0.Reader(data)));
  }

  EditFeed(request: MsgEditFeed): Promise<MsgEditFeedResponse> {
    const data = MsgEditFeed.encode(request).finish();
    const promise = this.rpc.request("petrimod.oracle.Msg", "EditFeed", data);
    return promise.then((data) => MsgEditFeedResponse.decode(new _m0.Reader(data)));
  }

  StartFeed(request: MsgStartFeed): Promise<MsgStartFeedResponse> {
    const data = MsgStartFeed.encode(request).finish();
    const promise = this.rpc.request("petrimod.oracle.Msg", "StartFeed", data);
    return promise.then((data) => MsgStartFeedResponse.decode(new _m0.Reader(data)));
  }

  PauseFeed(request: MsgPauseFeed): Promise<MsgPauseFeedResponse> {
    const data = MsgPauseFeed.encode(request).finish();
    const promise = this.rpc.request("petrimod.oracle.Msg", "PauseFeed", data);
    return promise.then((data) => MsgPauseFeedResponse.decode(new _m0.Reader(data)));
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
