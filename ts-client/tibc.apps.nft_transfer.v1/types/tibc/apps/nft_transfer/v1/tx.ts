/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "tibc.apps.nft_transfer.v1";

export interface MsgNftTransfer {
  /** the class to which the NFT to be transferred belongs */
  class: string;
  /** the nft id */
  id: string;
  /** the nft sender */
  sender: string;
  /** the nft receiver */
  receiver: string;
  /** target chain of transmission */
  destChain: string;
  /** relay chain during transmission */
  realayChain: string;
  /** the destination contract address to receive the nft */
  destContract: string;
}

/** MsgTransferResponse defines the Msg/NftTransfer response type. */
export interface MsgNftTransferResponse {
}

function createBaseMsgNftTransfer(): MsgNftTransfer {
  return { class: "", id: "", sender: "", receiver: "", destChain: "", realayChain: "", destContract: "" };
}

export const MsgNftTransfer = {
  encode(message: MsgNftTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNftTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNftTransfer();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgNftTransfer {
    return {
      class: isSet(object.class) ? String(object.class) : "",
      id: isSet(object.id) ? String(object.id) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      destChain: isSet(object.destChain) ? String(object.destChain) : "",
      realayChain: isSet(object.realayChain) ? String(object.realayChain) : "",
      destContract: isSet(object.destContract) ? String(object.destContract) : "",
    };
  },

  toJSON(message: MsgNftTransfer): unknown {
    const obj: any = {};
    message.class !== undefined && (obj.class = message.class);
    message.id !== undefined && (obj.id = message.id);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.destChain !== undefined && (obj.destChain = message.destChain);
    message.realayChain !== undefined && (obj.realayChain = message.realayChain);
    message.destContract !== undefined && (obj.destContract = message.destContract);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgNftTransfer>, I>>(object: I): MsgNftTransfer {
    const message = createBaseMsgNftTransfer();
    message.class = object.class ?? "";
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.destChain = object.destChain ?? "";
    message.realayChain = object.realayChain ?? "";
    message.destContract = object.destContract ?? "";
    return message;
  },
};

function createBaseMsgNftTransferResponse(): MsgNftTransferResponse {
  return {};
}

export const MsgNftTransferResponse = {
  encode(_: MsgNftTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNftTransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNftTransferResponse();
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

  fromJSON(_: any): MsgNftTransferResponse {
    return {};
  },

  toJSON(_: MsgNftTransferResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgNftTransferResponse>, I>>(_: I): MsgNftTransferResponse {
    const message = createBaseMsgNftTransferResponse();
    return message;
  },
};

/** Msg defines the tibc/nftTransfer Msg service. */
export interface Msg {
  /** NftTransfer defines a rpc handler method for MsgNftTransfer. */
  NftTransfer(request: MsgNftTransfer): Promise<MsgNftTransferResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.NftTransfer = this.NftTransfer.bind(this);
  }
  NftTransfer(request: MsgNftTransfer): Promise<MsgNftTransferResponse> {
    const data = MsgNftTransfer.encode(request).finish();
    const promise = this.rpc.request("tibc.apps.nft_transfer.v1.Msg", "NftTransfer", data);
    return promise.then((data) => MsgNftTransferResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
