/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "petrimod.random";

/** Random defines the feed standard */
export interface Random {
  requestTxHash: string;
  height: number;
  value: string;
}

/** Request defines the random request standard */
export interface Request {
  height: number;
  consumer: string;
  txHash: string;
  oracle: boolean;
  serviceFeeCap: Coin[];
  serviceContextId: string;
}

function createBaseRandom(): Random {
  return { requestTxHash: "", height: 0, value: "" };
}

export const Random = {
  encode(message: Random, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestTxHash !== "") {
      writer.uint32(10).string(message.requestTxHash);
    }
    if (message.height !== 0) {
      writer.uint32(16).int64(message.height);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Random {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRandom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestTxHash = reader.string();
          break;
        case 2:
          message.height = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Random {
    return {
      requestTxHash: isSet(object.requestTxHash) ? String(object.requestTxHash) : "",
      height: isSet(object.height) ? Number(object.height) : 0,
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Random): unknown {
    const obj: any = {};
    message.requestTxHash !== undefined && (obj.requestTxHash = message.requestTxHash);
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Random>, I>>(object: I): Random {
    const message = createBaseRandom();
    message.requestTxHash = object.requestTxHash ?? "";
    message.height = object.height ?? 0;
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseRequest(): Request {
  return { height: 0, consumer: "", txHash: "", oracle: false, serviceFeeCap: [], serviceContextId: "" };
}

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).int64(message.height);
    }
    if (message.consumer !== "") {
      writer.uint32(18).string(message.consumer);
    }
    if (message.txHash !== "") {
      writer.uint32(26).string(message.txHash);
    }
    if (message.oracle === true) {
      writer.uint32(32).bool(message.oracle);
    }
    for (const v of message.serviceFeeCap) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.serviceContextId !== "") {
      writer.uint32(50).string(message.serviceContextId);
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
          message.height = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.consumer = reader.string();
          break;
        case 3:
          message.txHash = reader.string();
          break;
        case 4:
          message.oracle = reader.bool();
          break;
        case 5:
          message.serviceFeeCap.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.serviceContextId = reader.string();
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
      height: isSet(object.height) ? Number(object.height) : 0,
      consumer: isSet(object.consumer) ? String(object.consumer) : "",
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      oracle: isSet(object.oracle) ? Boolean(object.oracle) : false,
      serviceFeeCap: Array.isArray(object?.serviceFeeCap) ? object.serviceFeeCap.map((e: any) => Coin.fromJSON(e)) : [],
      serviceContextId: isSet(object.serviceContextId) ? String(object.serviceContextId) : "",
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.consumer !== undefined && (obj.consumer = message.consumer);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.oracle !== undefined && (obj.oracle = message.oracle);
    if (message.serviceFeeCap) {
      obj.serviceFeeCap = message.serviceFeeCap.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.serviceFeeCap = [];
    }
    message.serviceContextId !== undefined && (obj.serviceContextId = message.serviceContextId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.height = object.height ?? 0;
    message.consumer = object.consumer ?? "";
    message.txHash = object.txHash ?? "";
    message.oracle = object.oracle ?? false;
    message.serviceFeeCap = object.serviceFeeCap?.map((e) => Coin.fromPartial(e)) || [];
    message.serviceContextId = object.serviceContextId ?? "";
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
