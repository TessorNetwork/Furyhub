/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "petrimod.oracle";

/** Feed defines the feed standard */
export interface Feed {
  feedName: string;
  description: string;
  aggregateFunc: string;
  valueJsonPath: string;
  latestHistory: number;
  requestContextId: string;
  creator: string;
}

/** FeedValue defines the feed result standard */
export interface FeedValue {
  data: string;
  timestamp: Date | undefined;
}

function createBaseFeed(): Feed {
  return {
    feedName: "",
    description: "",
    aggregateFunc: "",
    valueJsonPath: "",
    latestHistory: 0,
    requestContextId: "",
    creator: "",
  };
}

export const Feed = {
  encode(message: Feed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedName !== "") {
      writer.uint32(10).string(message.feedName);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.aggregateFunc !== "") {
      writer.uint32(26).string(message.aggregateFunc);
    }
    if (message.valueJsonPath !== "") {
      writer.uint32(34).string(message.valueJsonPath);
    }
    if (message.latestHistory !== 0) {
      writer.uint32(40).uint64(message.latestHistory);
    }
    if (message.requestContextId !== "") {
      writer.uint32(50).string(message.requestContextId);
    }
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Feed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeed();
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
          message.aggregateFunc = reader.string();
          break;
        case 4:
          message.valueJsonPath = reader.string();
          break;
        case 5:
          message.latestHistory = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.requestContextId = reader.string();
          break;
        case 7:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Feed {
    return {
      feedName: isSet(object.feedName) ? String(object.feedName) : "",
      description: isSet(object.description) ? String(object.description) : "",
      aggregateFunc: isSet(object.aggregateFunc) ? String(object.aggregateFunc) : "",
      valueJsonPath: isSet(object.valueJsonPath) ? String(object.valueJsonPath) : "",
      latestHistory: isSet(object.latestHistory) ? Number(object.latestHistory) : 0,
      requestContextId: isSet(object.requestContextId) ? String(object.requestContextId) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: Feed): unknown {
    const obj: any = {};
    message.feedName !== undefined && (obj.feedName = message.feedName);
    message.description !== undefined && (obj.description = message.description);
    message.aggregateFunc !== undefined && (obj.aggregateFunc = message.aggregateFunc);
    message.valueJsonPath !== undefined && (obj.valueJsonPath = message.valueJsonPath);
    message.latestHistory !== undefined && (obj.latestHistory = Math.round(message.latestHistory));
    message.requestContextId !== undefined && (obj.requestContextId = message.requestContextId);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Feed>, I>>(object: I): Feed {
    const message = createBaseFeed();
    message.feedName = object.feedName ?? "";
    message.description = object.description ?? "";
    message.aggregateFunc = object.aggregateFunc ?? "";
    message.valueJsonPath = object.valueJsonPath ?? "";
    message.latestHistory = object.latestHistory ?? 0;
    message.requestContextId = object.requestContextId ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseFeedValue(): FeedValue {
  return { data: "", timestamp: undefined };
}

export const FeedValue = {
  encode(message: FeedValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeedValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeedValue {
    return {
      data: isSet(object.data) ? String(object.data) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
    };
  },

  toJSON(message: FeedValue): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeedValue>, I>>(object: I): FeedValue {
    const message = createBaseFeedValue();
    message.data = object.data ?? "";
    message.timestamp = object.timestamp ?? undefined;
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
