/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "irismod.random";

/**
 * MsgRequestRandom defines an sdk.Msg type that supports requesting a random
 * number
 */
export interface MsgRequestRandom {
  blockInterval: number;
  consumer: string;
  oracle: boolean;
  serviceFeeCap: Coin[];
}

/** MsgRequestRandomResponse defines the Msg/RequestRandom response type */
export interface MsgRequestRandomResponse {
}

function createBaseMsgRequestRandom(): MsgRequestRandom {
  return { blockInterval: 0, consumer: "", oracle: false, serviceFeeCap: [] };
}

export const MsgRequestRandom = {
  encode(message: MsgRequestRandom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockInterval !== 0) {
      writer.uint32(8).uint64(message.blockInterval);
    }
    if (message.consumer !== "") {
      writer.uint32(18).string(message.consumer);
    }
    if (message.oracle === true) {
      writer.uint32(24).bool(message.oracle);
    }
    for (const v of message.serviceFeeCap) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestRandom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestRandom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockInterval = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.consumer = reader.string();
          break;
        case 3:
          message.oracle = reader.bool();
          break;
        case 4:
          message.serviceFeeCap.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestRandom {
    return {
      blockInterval: isSet(object.blockInterval) ? Number(object.blockInterval) : 0,
      consumer: isSet(object.consumer) ? String(object.consumer) : "",
      oracle: isSet(object.oracle) ? Boolean(object.oracle) : false,
      serviceFeeCap: Array.isArray(object?.serviceFeeCap) ? object.serviceFeeCap.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgRequestRandom): unknown {
    const obj: any = {};
    message.blockInterval !== undefined && (obj.blockInterval = Math.round(message.blockInterval));
    message.consumer !== undefined && (obj.consumer = message.consumer);
    message.oracle !== undefined && (obj.oracle = message.oracle);
    if (message.serviceFeeCap) {
      obj.serviceFeeCap = message.serviceFeeCap.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.serviceFeeCap = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestRandom>, I>>(object: I): MsgRequestRandom {
    const message = createBaseMsgRequestRandom();
    message.blockInterval = object.blockInterval ?? 0;
    message.consumer = object.consumer ?? "";
    message.oracle = object.oracle ?? false;
    message.serviceFeeCap = object.serviceFeeCap?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgRequestRandomResponse(): MsgRequestRandomResponse {
  return {};
}

export const MsgRequestRandomResponse = {
  encode(_: MsgRequestRandomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestRandomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestRandomResponse();
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

  fromJSON(_: any): MsgRequestRandomResponse {
    return {};
  },

  toJSON(_: MsgRequestRandomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestRandomResponse>, I>>(_: I): MsgRequestRandomResponse {
    const message = createBaseMsgRequestRandomResponse();
    return message;
  },
};

/** Msg defines the oracle Msg service */
export interface Msg {
  /** RequestRandom defines a method for requesting a new random number */
  RequestRandom(request: MsgRequestRandom): Promise<MsgRequestRandomResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RequestRandom = this.RequestRandom.bind(this);
  }
  RequestRandom(request: MsgRequestRandom): Promise<MsgRequestRandomResponse> {
    const data = MsgRequestRandom.encode(request).finish();
    const promise = this.rpc.request("irismod.random.Msg", "RequestRandom", data);
    return promise.then((data) => MsgRequestRandomResponse.decode(new _m0.Reader(data)));
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
