/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PacketState } from "./packet";

export const protobufPackage = "tibc.core.packet.v1";

/** GenesisState defines the tibc channel submodule's genesis state. */
export interface GenesisState {
  acknowledgements: PacketState[];
  commitments: PacketState[];
  receipts: PacketState[];
  sendSequences: PacketSequence[];
  recvSequences: PacketSequence[];
  ackSequences: PacketSequence[];
}

/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */
export interface PacketSequence {
  sourceChain: string;
  destinationChain: string;
  sequence: number;
}

function createBaseGenesisState(): GenesisState {
  return {
    acknowledgements: [],
    commitments: [],
    receipts: [],
    sendSequences: [],
    recvSequences: [],
    ackSequences: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.acknowledgements) {
      PacketState.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.commitments) {
      PacketState.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.receipts) {
      PacketState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.sendSequences) {
      PacketSequence.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.recvSequences) {
      PacketSequence.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.ackSequences) {
      PacketSequence.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 3:
          message.commitments.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 4:
          message.receipts.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 5:
          message.sendSequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;
        case 6:
          message.recvSequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;
        case 7:
          message.ackSequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      acknowledgements: Array.isArray(object?.acknowledgements)
        ? object.acknowledgements.map((e: any) => PacketState.fromJSON(e))
        : [],
      commitments: Array.isArray(object?.commitments)
        ? object.commitments.map((e: any) => PacketState.fromJSON(e))
        : [],
      receipts: Array.isArray(object?.receipts) ? object.receipts.map((e: any) => PacketState.fromJSON(e)) : [],
      sendSequences: Array.isArray(object?.sendSequences)
        ? object.sendSequences.map((e: any) => PacketSequence.fromJSON(e))
        : [],
      recvSequences: Array.isArray(object?.recvSequences)
        ? object.recvSequences.map((e: any) => PacketSequence.fromJSON(e))
        : [],
      ackSequences: Array.isArray(object?.ackSequences)
        ? object.ackSequences.map((e: any) => PacketSequence.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map((e) => e ? PacketState.toJSON(e) : undefined);
    } else {
      obj.acknowledgements = [];
    }
    if (message.commitments) {
      obj.commitments = message.commitments.map((e) => e ? PacketState.toJSON(e) : undefined);
    } else {
      obj.commitments = [];
    }
    if (message.receipts) {
      obj.receipts = message.receipts.map((e) => e ? PacketState.toJSON(e) : undefined);
    } else {
      obj.receipts = [];
    }
    if (message.sendSequences) {
      obj.sendSequences = message.sendSequences.map((e) => e ? PacketSequence.toJSON(e) : undefined);
    } else {
      obj.sendSequences = [];
    }
    if (message.recvSequences) {
      obj.recvSequences = message.recvSequences.map((e) => e ? PacketSequence.toJSON(e) : undefined);
    } else {
      obj.recvSequences = [];
    }
    if (message.ackSequences) {
      obj.ackSequences = message.ackSequences.map((e) => e ? PacketSequence.toJSON(e) : undefined);
    } else {
      obj.ackSequences = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.acknowledgements = object.acknowledgements?.map((e) => PacketState.fromPartial(e)) || [];
    message.commitments = object.commitments?.map((e) => PacketState.fromPartial(e)) || [];
    message.receipts = object.receipts?.map((e) => PacketState.fromPartial(e)) || [];
    message.sendSequences = object.sendSequences?.map((e) => PacketSequence.fromPartial(e)) || [];
    message.recvSequences = object.recvSequences?.map((e) => PacketSequence.fromPartial(e)) || [];
    message.ackSequences = object.ackSequences?.map((e) => PacketSequence.fromPartial(e)) || [];
    return message;
  },
};

function createBasePacketSequence(): PacketSequence {
  return { sourceChain: "", destinationChain: "", sequence: 0 };
}

export const PacketSequence = {
  encode(message: PacketSequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceChain !== "") {
      writer.uint32(10).string(message.sourceChain);
    }
    if (message.destinationChain !== "") {
      writer.uint32(18).string(message.destinationChain);
    }
    if (message.sequence !== 0) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketSequence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketSequence();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PacketSequence {
    return {
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
    };
  },

  toJSON(message: PacketSequence): unknown {
    const obj: any = {};
    message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
    message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
    message.sequence !== undefined && (obj.sequence = Math.round(message.sequence));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PacketSequence>, I>>(object: I): PacketSequence {
    const message = createBasePacketSequence();
    message.sourceChain = object.sourceChain ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.sequence = object.sequence ?? 0;
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
