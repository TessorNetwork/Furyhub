/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "tibc.apps.nft_transfer.v1";

export interface NonFungibleTokenPacketData {
  /** the class to which the NFT to be transferred belongs */
  class: string;
  /** the nft id */
  id: string;
  /** the address defined by NFT outside the chain */
  uri: string;
  /** the nft sender */
  sender: string;
  /** the nft receiver */
  receiver: string;
  /** identify whether it is far away from the source chain */
  awayFromOrigin: boolean;
  /** the destination contract address to receive the nft */
  destContract: string;
}

/**
 * ClassTrace contains the base class for TICS30 Non fungible tokens and the
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

function createBaseNonFungibleTokenPacketData(): NonFungibleTokenPacketData {
  return { class: "", id: "", uri: "", sender: "", receiver: "", awayFromOrigin: false, destContract: "" };
}

export const NonFungibleTokenPacketData = {
  encode(message: NonFungibleTokenPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.class !== "") {
      writer.uint32(10).string(message.class);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NonFungibleTokenPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNonFungibleTokenPacketData();
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
          message.uri = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NonFungibleTokenPacketData {
    return {
      class: isSet(object.class) ? String(object.class) : "",
      id: isSet(object.id) ? String(object.id) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      awayFromOrigin: isSet(object.awayFromOrigin) ? Boolean(object.awayFromOrigin) : false,
      destContract: isSet(object.destContract) ? String(object.destContract) : "",
    };
  },

  toJSON(message: NonFungibleTokenPacketData): unknown {
    const obj: any = {};
    message.class !== undefined && (obj.class = message.class);
    message.id !== undefined && (obj.id = message.id);
    message.uri !== undefined && (obj.uri = message.uri);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.awayFromOrigin !== undefined && (obj.awayFromOrigin = message.awayFromOrigin);
    message.destContract !== undefined && (obj.destContract = message.destContract);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NonFungibleTokenPacketData>, I>>(object: I): NonFungibleTokenPacketData {
    const message = createBaseNonFungibleTokenPacketData();
    message.class = object.class ?? "";
    message.id = object.id ?? "";
    message.uri = object.uri ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.awayFromOrigin = object.awayFromOrigin ?? false;
    message.destContract = object.destContract ?? "";
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
