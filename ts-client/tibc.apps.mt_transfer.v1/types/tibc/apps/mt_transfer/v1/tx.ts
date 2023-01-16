/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "tibc.apps.mt_transfer.v1";

export interface MsgMtTransfer {
  /** the class to which the mt to be transferred belongs */
  class: string;
  /** the mt id */
  id: string;
  /** the mt sender */
  sender: string;
  /** the mt receiver */
  receiver: string;
  /** target chain of transmission */
  destChain: string;
  /** relay chain during transmission */
  realayChain: string;
  /** the destination contract address to receive the nft */
  destContract: string;
  /** the amount defined by MT outside the chain */
  amount: number;
}

/** MsgMtTransferResponse defines the Msg/MtTransfer response type. */
export interface MsgMtTransferResponse {
}

function createBaseMsgMtTransfer(): MsgMtTransfer {
  return { class: "", id: "", sender: "", receiver: "", destChain: "", realayChain: "", destContract: "", amount: 0 };
}

export const MsgMtTransfer = {
  encode(message: MsgMtTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.class !== "") {
      writer.uint32(10).string(message.class);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    if (message.destChain !== "") {
      writer.uint32(42).string(message.destChain);
    }
    if (message.realayChain !== "") {
      writer.uint32(50).string(message.realayChain);
    }
    if (message.destContract !== "") {
      writer.uint32(58).string(message.destContract);
    }
    if (message.amount !== 0) {
      writer.uint32(64).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMtTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMtTransfer();
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
          message.sender = reader.string();
          break;
        case 4:
          message.receiver = reader.string();
          break;
        case 5:
          message.destChain = reader.string();
          break;
        case 6:
          message.realayChain = reader.string();
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

  fromJSON(object: any): MsgMtTransfer {
    return {
      class: isSet(object.class) ? String(object.class) : "",
      id: isSet(object.id) ? String(object.id) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      destChain: isSet(object.destChain) ? String(object.destChain) : "",
      realayChain: isSet(object.realayChain) ? String(object.realayChain) : "",
      destContract: isSet(object.destContract) ? String(object.destContract) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: MsgMtTransfer): unknown {
    const obj: any = {};
    message.class !== undefined && (obj.class = message.class);
    message.id !== undefined && (obj.id = message.id);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.destChain !== undefined && (obj.destChain = message.destChain);
    message.realayChain !== undefined && (obj.realayChain = message.realayChain);
    message.destContract !== undefined && (obj.destContract = message.destContract);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMtTransfer>, I>>(object: I): MsgMtTransfer {
    const message = createBaseMsgMtTransfer();
    message.class = object.class ?? "";
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.destChain = object.destChain ?? "";
    message.realayChain = object.realayChain ?? "";
    message.destContract = object.destContract ?? "";
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseMsgMtTransferResponse(): MsgMtTransferResponse {
  return {};
}

export const MsgMtTransferResponse = {
  encode(_: MsgMtTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMtTransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMtTransferResponse();
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

  fromJSON(_: any): MsgMtTransferResponse {
    return {};
  },

  toJSON(_: MsgMtTransferResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMtTransferResponse>, I>>(_: I): MsgMtTransferResponse {
    const message = createBaseMsgMtTransferResponse();
    return message;
  },
};

/** Msg defines the tibc/MtTransfer Msg service. */
export interface Msg {
  /** MtTransfer defines a rpc handler method for MsgMtTransfer. */
  MtTransfer(request: MsgMtTransfer): Promise<MsgMtTransferResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MtTransfer = this.MtTransfer.bind(this);
  }
  MtTransfer(request: MsgMtTransfer): Promise<MsgMtTransferResponse> {
    const data = MsgMtTransfer.encode(request).finish();
    const promise = this.rpc.request("tibc.apps.mt_transfer.v1.Msg", "MtTransfer", data);
    return promise.then((data) => MsgMtTransferResponse.decode(new _m0.Reader(data)));
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
