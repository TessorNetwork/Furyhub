/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "petrimod.htlc";

/** MsgCreateHTLC defines a message to create an HTLC */
export interface MsgCreateHTLC {
  sender: string;
  to: string;
  receiverOnOtherChain: string;
  senderOnOtherChain: string;
  amount: Coin[];
  hashLock: string;
  timestamp: number;
  timeLock: number;
  transfer: boolean;
}

/** MsgCreateHTLCResponse defines the Msg/CreateHTLC response type */
export interface MsgCreateHTLCResponse {
  id: string;
}

/** MsgClaimHTLC defines a message to claim an HTLC */
export interface MsgClaimHTLC {
  sender: string;
  id: string;
  secret: string;
}

/** MsgClaimHTLCResponse defines the Msg/ClaimHTLC response type */
export interface MsgClaimHTLCResponse {
}

function createBaseMsgCreateHTLC(): MsgCreateHTLC {
  return {
    sender: "",
    to: "",
    receiverOnOtherChain: "",
    senderOnOtherChain: "",
    amount: [],
    hashLock: "",
    timestamp: 0,
    timeLock: 0,
    transfer: false,
  };
}

export const MsgCreateHTLC = {
  encode(message: MsgCreateHTLC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.receiverOnOtherChain !== "") {
      writer.uint32(26).string(message.receiverOnOtherChain);
    }
    if (message.senderOnOtherChain !== "") {
      writer.uint32(34).string(message.senderOnOtherChain);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.hashLock !== "") {
      writer.uint32(50).string(message.hashLock);
    }
    if (message.timestamp !== 0) {
      writer.uint32(56).uint64(message.timestamp);
    }
    if (message.timeLock !== 0) {
      writer.uint32(64).uint64(message.timeLock);
    }
    if (message.transfer === true) {
      writer.uint32(72).bool(message.transfer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateHTLC {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateHTLC();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.receiverOnOtherChain = reader.string();
          break;
        case 4:
          message.senderOnOtherChain = reader.string();
          break;
        case 5:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.hashLock = reader.string();
          break;
        case 7:
          message.timestamp = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.timeLock = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.transfer = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateHTLC {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      to: isSet(object.to) ? String(object.to) : "",
      receiverOnOtherChain: isSet(object.receiverOnOtherChain) ? String(object.receiverOnOtherChain) : "",
      senderOnOtherChain: isSet(object.senderOnOtherChain) ? String(object.senderOnOtherChain) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      hashLock: isSet(object.hashLock) ? String(object.hashLock) : "",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      timeLock: isSet(object.timeLock) ? Number(object.timeLock) : 0,
      transfer: isSet(object.transfer) ? Boolean(object.transfer) : false,
    };
  },

  toJSON(message: MsgCreateHTLC): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.receiverOnOtherChain !== undefined && (obj.receiverOnOtherChain = message.receiverOnOtherChain);
    message.senderOnOtherChain !== undefined && (obj.senderOnOtherChain = message.senderOnOtherChain);
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.hashLock !== undefined && (obj.hashLock = message.hashLock);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.timeLock !== undefined && (obj.timeLock = Math.round(message.timeLock));
    message.transfer !== undefined && (obj.transfer = message.transfer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateHTLC>, I>>(object: I): MsgCreateHTLC {
    const message = createBaseMsgCreateHTLC();
    message.sender = object.sender ?? "";
    message.to = object.to ?? "";
    message.receiverOnOtherChain = object.receiverOnOtherChain ?? "";
    message.senderOnOtherChain = object.senderOnOtherChain ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    message.hashLock = object.hashLock ?? "";
    message.timestamp = object.timestamp ?? 0;
    message.timeLock = object.timeLock ?? 0;
    message.transfer = object.transfer ?? false;
    return message;
  },
};

function createBaseMsgCreateHTLCResponse(): MsgCreateHTLCResponse {
  return { id: "" };
}

export const MsgCreateHTLCResponse = {
  encode(message: MsgCreateHTLCResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateHTLCResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateHTLCResponse();
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

  fromJSON(object: any): MsgCreateHTLCResponse {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: MsgCreateHTLCResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateHTLCResponse>, I>>(object: I): MsgCreateHTLCResponse {
    const message = createBaseMsgCreateHTLCResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMsgClaimHTLC(): MsgClaimHTLC {
  return { sender: "", id: "", secret: "" };
}

export const MsgClaimHTLC = {
  encode(message: MsgClaimHTLC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.secret !== "") {
      writer.uint32(26).string(message.secret);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimHTLC {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimHTLC();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.secret = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimHTLC {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      id: isSet(object.id) ? String(object.id) : "",
      secret: isSet(object.secret) ? String(object.secret) : "",
    };
  },

  toJSON(message: MsgClaimHTLC): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.id !== undefined && (obj.id = message.id);
    message.secret !== undefined && (obj.secret = message.secret);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimHTLC>, I>>(object: I): MsgClaimHTLC {
    const message = createBaseMsgClaimHTLC();
    message.sender = object.sender ?? "";
    message.id = object.id ?? "";
    message.secret = object.secret ?? "";
    return message;
  },
};

function createBaseMsgClaimHTLCResponse(): MsgClaimHTLCResponse {
  return {};
}

export const MsgClaimHTLCResponse = {
  encode(_: MsgClaimHTLCResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimHTLCResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimHTLCResponse();
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

  fromJSON(_: any): MsgClaimHTLCResponse {
    return {};
  },

  toJSON(_: MsgClaimHTLCResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimHTLCResponse>, I>>(_: I): MsgClaimHTLCResponse {
    const message = createBaseMsgClaimHTLCResponse();
    return message;
  },
};

/** Msg defines the HTLC Msg service */
export interface Msg {
  /** CreateHTLC defines a method for creating a HTLC */
  CreateHTLC(request: MsgCreateHTLC): Promise<MsgCreateHTLCResponse>;
  /** ClaimHTLC defines a method for claiming a HTLC */
  ClaimHTLC(request: MsgClaimHTLC): Promise<MsgClaimHTLCResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateHTLC = this.CreateHTLC.bind(this);
    this.ClaimHTLC = this.ClaimHTLC.bind(this);
  }
  CreateHTLC(request: MsgCreateHTLC): Promise<MsgCreateHTLCResponse> {
    const data = MsgCreateHTLC.encode(request).finish();
    const promise = this.rpc.request("petrimod.htlc.Msg", "CreateHTLC", data);
    return promise.then((data) => MsgCreateHTLCResponse.decode(new _m0.Reader(data)));
  }

  ClaimHTLC(request: MsgClaimHTLC): Promise<MsgClaimHTLCResponse> {
    const data = MsgClaimHTLC.encode(request).finish();
    const promise = this.rpc.request("petrimod.htlc.Msg", "ClaimHTLC", data);
    return promise.then((data) => MsgClaimHTLCResponse.decode(new _m0.Reader(data)));
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
