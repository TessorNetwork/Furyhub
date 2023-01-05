/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "tibc.apps.mt_transfer.v1";

export interface MultiTokenPacketData {
  /** the class to which the Mt to be transferred belongs */
  class: string;
  /** the mt id */
  id: string;
  /** the address defined by MT outside the chain */
  data: Uint8Array;
  /** the mt sender */
  sender: string;
  /** the mt receiver */
  receiver: string;
  /** identify whether it is far away from the source chain */
  awayFromOrigin: boolean;
  /** the destination contract address to receive the nft */
  destContract: string;
  /** the amount defined by MT outside the chain */
  amount: number;
}

/**
 * ClassTrace contains the base class for Multi Token and the
 * source tracing information path.
 */
export interface ClassTrace {
  /**
   * path defines the chain of sourceChain/destChain
   * identifiers used for tracing the source of the Non fungible token.
   */
  path: string;
  /** base class of the relayed non fungible token. */
  baseClass: string;
}

function createBaseMultiTokenPacketData(): MultiTokenPacketData {
  return {
    class: "",
    id: "",
    data: new Uint8Array(),
    sender: "",
    receiver: "",
    awayFromOrigin: false,
    destContract: "",
    amount: 0,
  };
}

export const MultiTokenPacketData = {
  encode(message: MultiTokenPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.class !== "") {
      writer.uint32(10).string(message.class);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(42).string(message.receiver);
    }
    if (message.awayFromOrigin === true) {
      writer.uint32(48).bool(message.awayFromOrigin);
    }
    if (message.destContract !== "") {
      writer.uint32(58).string(message.destContract);
    }
    if (message.amount !== 0) {
      writer.uint32(64).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiTokenPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiTokenPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        case 4:
          message.sender = reader.string();
          break;
        case 5:
          message.receiver = reader.string();
          break;
        case 6:
          message.awayFromOrigin = reader.bool();
          break;
        case 7:
          message.destContract = reader.string();
          break;
        case 8:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MultiTokenPacketData {
    return {
      class: isSet(object.class) ? String(object.class) : "",
      id: isSet(object.id) ? String(object.id) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      awayFromOrigin: isSet(object.awayFromOrigin) ? Boolean(object.awayFromOrigin) : false,
      destContract: isSet(object.destContract) ? String(object.destContract) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: MultiTokenPacketData): unknown {
    const obj: any = {};
    message.class !== undefined && (obj.class = message.class);
    message.id !== undefined && (obj.id = message.id);
    message.data !== undefined
      && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.awayFromOrigin !== undefined && (obj.awayFromOrigin = message.awayFromOrigin);
    message.destContract !== undefined && (obj.destContract = message.destContract);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MultiTokenPacketData>, I>>(object: I): MultiTokenPacketData {
    const message = createBaseMultiTokenPacketData();
    message.class = object.class ?? "";
    message.id = object.id ?? "";
    message.data = object.data ?? new Uint8Array();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.awayFromOrigin = object.awayFromOrigin ?? false;
    message.destContract = object.destContract ?? "";
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseClassTrace(): ClassTrace {
  return { path: "", baseClass: "" };
}

export const ClassTrace = {
  encode(message: ClassTrace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.baseClass !== "") {
      writer.uint32(18).string(message.baseClass);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassTrace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassTrace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.baseClass = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClassTrace {
    return {
      path: isSet(object.path) ? String(object.path) : "",
      baseClass: isSet(object.baseClass) ? String(object.baseClass) : "",
    };
  },

  toJSON(message: ClassTrace): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.baseClass !== undefined && (obj.baseClass = message.baseClass);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClassTrace>, I>>(object: I): ClassTrace {
    const message = createBaseClassTrace();
    message.path = object.path ?? "";
    message.baseClass = object.baseClass ?? "";
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

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
