/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "tibc.core.packet.v1";

/** Packet defines a type that carries data across different chains through TIBC */
export interface Packet {
  /**
   * number corresponds to the order of sends and receives, where a Packet
   * with an earlier sequence number must be sent and received before a Packet
   * with a later sequence number.
   */
  sequence: number;
  /** identifies the port on the sending chain and destination chain. */
  port: string;
  /** identifies the chain id of the sending chain. */
  sourceChain: string;
  /** identifies the chain id of the receiving chain. */
  destinationChain: string;
  /** identifies the chain id of the relay chain. */
  relayChain: string;
  /** actual opaque bytes transferred directly to the application module */
  data: Uint8Array;
}

/**
 * CleanPacket defines a type that carries data across different chains through
 * TIBC
 */
export interface CleanPacket {
  /**
   * number corresponds to the order of sends and receives, where a Packet
   * with an earlier sequence number must be sent and received before a Packet
   * with a later sequence number.
   */
  sequence: number;
  /** identifies the chain id of the sending chain. */
  sourceChain: string;
  /** identifies the chain id of the receiving chain. */
  destinationChain: string;
  /** identifies the chain id of the relay chain. */
  relayChain: string;
}

/**
 * PacketState defines the generic type necessary to retrieve and store
 * packet commitments, acknowledgements, and receipts.
 * Caller is responsible for knowing the context necessary to interpret this
 * state as a commitment, acknowledgement, or a receipt.
 */
export interface PacketState {
  /** the sending chain identifier. */
  sourceChain: string;
  /** the receiving chain identifier. */
  destinationChain: string;
  /** packet sequence. */
  sequence: number;
  /** embedded data that represents packet state. */
  data: Uint8Array;
}

/**
 * Acknowledgement is the recommended acknowledgement format to be used by
 * app-specific protocols.
 * NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental
 * conflicts with other protobuf message formats used for acknowledgements.
 * The first byte of any message with this format will be the non-ASCII values
 * `0xaa` (result) or `0xb2` (error). Implemented as defined by TICS:
 * https://github.com/bianjieai/tics/tree/master/spec/tics-004-channel-and-packet-semantics#acknowledgement-envelope
 */
export interface Acknowledgement {
  result: Uint8Array | undefined;
  error: string | undefined;
}

function createBasePacket(): Packet {
  return { sequence: 0, port: "", sourceChain: "", destinationChain: "", relayChain: "", data: new Uint8Array() };
}

export const Packet = {
  encode(message: Packet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sequence !== 0) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.sourceChain !== "") {
      writer.uint32(26).string(message.sourceChain);
    }
    if (message.destinationChain !== "") {
      writer.uint32(34).string(message.destinationChain);
    }
    if (message.relayChain !== "") {
      writer.uint32(42).string(message.relayChain);
    }
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Packet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.sourceChain = reader.string();
          break;
        case 4:
          message.destinationChain = reader.string();
          break;
        case 5:
          message.relayChain = reader.string();
          break;
        case 6:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Packet {
    return {
      sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
      port: isSet(object.port) ? String(object.port) : "",
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      relayChain: isSet(object.relayChain) ? String(object.relayChain) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
    };
  },

  toJSON(message: Packet): unknown {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = Math.round(message.sequence));
    message.port !== undefined && (obj.port = message.port);
    message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
    message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
    message.relayChain !== undefined && (obj.relayChain = message.relayChain);
    message.data !== undefined
      && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Packet>, I>>(object: I): Packet {
    const message = createBasePacket();
    message.sequence = object.sequence ?? 0;
    message.port = object.port ?? "";
    message.sourceChain = object.sourceChain ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.relayChain = object.relayChain ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseCleanPacket(): CleanPacket {
  return { sequence: 0, sourceChain: "", destinationChain: "", relayChain: "" };
}

export const CleanPacket = {
  encode(message: CleanPacket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sequence !== 0) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.sourceChain !== "") {
      writer.uint32(26).string(message.sourceChain);
    }
    if (message.destinationChain !== "") {
      writer.uint32(34).string(message.destinationChain);
    }
    if (message.relayChain !== "") {
      writer.uint32(42).string(message.relayChain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CleanPacket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCleanPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.sourceChain = reader.string();
          break;
        case 4:
          message.destinationChain = reader.string();
          break;
        case 5:
          message.relayChain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CleanPacket {
    return {
      sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      relayChain: isSet(object.relayChain) ? String(object.relayChain) : "",
    };
  },

  toJSON(message: CleanPacket): unknown {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = Math.round(message.sequence));
    message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
    message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
    message.relayChain !== undefined && (obj.relayChain = message.relayChain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CleanPacket>, I>>(object: I): CleanPacket {
    const message = createBaseCleanPacket();
    message.sequence = object.sequence ?? 0;
    message.sourceChain = object.sourceChain ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.relayChain = object.relayChain ?? "";
    return message;
  },
};

function createBasePacketState(): PacketState {
  return { sourceChain: "", destinationChain: "", sequence: 0, data: new Uint8Array() };
}

export const PacketState = {
  encode(message: PacketState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceChain !== "") {
      writer.uint32(10).string(message.sourceChain);
    }
    if (message.destinationChain !== "") {
      writer.uint32(18).string(message.destinationChain);
    }
    if (message.sequence !== 0) {
      writer.uint32(24).uint64(message.sequence);
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceChain = reader.string();
          break;
        case 2:
          message.destinationChain = reader.string();
          break;
        case 3:
          message.sequence = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PacketState {
    return {
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
    };
  },

  toJSON(message: PacketState): unknown {
    const obj: any = {};
    message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
    message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
    message.sequence !== undefined && (obj.sequence = Math.round(message.sequence));
    message.data !== undefined
      && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PacketState>, I>>(object: I): PacketState {
    const message = createBasePacketState();
    message.sourceChain = object.sourceChain ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.sequence = object.sequence ?? 0;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseAcknowledgement(): Acknowledgement {
  return { result: undefined, error: undefined };
}

export const Acknowledgement = {
  encode(message: Acknowledgement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      writer.uint32(170).bytes(message.result);
    }
    if (message.error !== undefined) {
      writer.uint32(178).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Acknowledgement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 21:
          message.result = reader.bytes();
          break;
        case 22:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Acknowledgement {
    return {
      result: isSet(object.result) ? bytesFromBase64(object.result) : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: Acknowledgement): unknown {
    const obj: any = {};
    message.result !== undefined
      && (obj.result = message.result !== undefined ? base64FromBytes(message.result) : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Acknowledgement>, I>>(object: I): Acknowledgement {
    const message = createBaseAcknowledgement();
    message.result = object.result ?? undefined;
    message.error = object.error ?? undefined;
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
