/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ClientConsensusStates, IdentifiedClientState, IdentifiedRelayers } from "./client";

export const protobufPackage = "tibc.core.client.v1";

/** GenesisState defines the tibc client submodule's genesis state. */
export interface GenesisState {
  /** client states with their corresponding identifiers */
  clients: IdentifiedClientState[];
  /** consensus states from each client */
  clientsConsensus: ClientConsensusStates[];
  /** metadata from each client */
  clientsMetadata: IdentifiedGenesisMetadata[];
  /** the chain name of the current chain */
  nativeChainName: string;
  /**
   * IdentifiedRelayer defines a list of authorized relayers for the specified
   * client.
   */
  relayers: IdentifiedRelayers[];
}

/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadata {
  /** store key of metadata without chainName-prefix */
  key: Uint8Array;
  /** metadata value */
  value: Uint8Array;
}

/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * chain name.
 */
export interface IdentifiedGenesisMetadata {
  chainName: string;
  metadata: GenesisMetadata[];
}

function createBaseGenesisState(): GenesisState {
  return { clients: [], clientsConsensus: [], clientsMetadata: [], nativeChainName: "", relayers: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.clients) {
      IdentifiedClientState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.clientsConsensus) {
      ClientConsensusStates.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.clientsMetadata) {
      IdentifiedGenesisMetadata.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.nativeChainName !== "") {
      writer.uint32(42).string(message.nativeChainName);
    }
    for (const v of message.relayers) {
      IdentifiedRelayers.encode(v!, writer.uint32(50).fork()).ldelim();
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
        case 1:
          message.clients.push(IdentifiedClientState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.clientsConsensus.push(ClientConsensusStates.decode(reader, reader.uint32()));
          break;
        case 3:
          message.clientsMetadata.push(IdentifiedGenesisMetadata.decode(reader, reader.uint32()));
          break;
        case 5:
          message.nativeChainName = reader.string();
          break;
        case 6:
          message.relayers.push(IdentifiedRelayers.decode(reader, reader.uint32()));
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
      clients: Array.isArray(object?.clients) ? object.clients.map((e: any) => IdentifiedClientState.fromJSON(e)) : [],
      clientsConsensus: Array.isArray(object?.clientsConsensus)
        ? object.clientsConsensus.map((e: any) => ClientConsensusStates.fromJSON(e))
        : [],
      clientsMetadata: Array.isArray(object?.clientsMetadata)
        ? object.clientsMetadata.map((e: any) => IdentifiedGenesisMetadata.fromJSON(e))
        : [],
      nativeChainName: isSet(object.nativeChainName) ? String(object.nativeChainName) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => IdentifiedRelayers.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.clients) {
      obj.clients = message.clients.map((e) => e ? IdentifiedClientState.toJSON(e) : undefined);
    } else {
      obj.clients = [];
    }
    if (message.clientsConsensus) {
      obj.clientsConsensus = message.clientsConsensus.map((e) => e ? ClientConsensusStates.toJSON(e) : undefined);
    } else {
      obj.clientsConsensus = [];
    }
    if (message.clientsMetadata) {
      obj.clientsMetadata = message.clientsMetadata.map((e) => e ? IdentifiedGenesisMetadata.toJSON(e) : undefined);
    } else {
      obj.clientsMetadata = [];
    }
    message.nativeChainName !== undefined && (obj.nativeChainName = message.nativeChainName);
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e ? IdentifiedRelayers.toJSON(e) : undefined);
    } else {
      obj.relayers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.clients = object.clients?.map((e) => IdentifiedClientState.fromPartial(e)) || [];
    message.clientsConsensus = object.clientsConsensus?.map((e) => ClientConsensusStates.fromPartial(e)) || [];
    message.clientsMetadata = object.clientsMetadata?.map((e) => IdentifiedGenesisMetadata.fromPartial(e)) || [];
    message.nativeChainName = object.nativeChainName ?? "";
    message.relayers = object.relayers?.map((e) => IdentifiedRelayers.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGenesisMetadata(): GenesisMetadata {
  return { key: new Uint8Array(), value: new Uint8Array() };
}

export const GenesisMetadata = {
  encode(message: GenesisMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisMetadata {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
    };
  },

  toJSON(message: GenesisMetadata): unknown {
    const obj: any = {};
    message.key !== undefined
      && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined
      && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisMetadata>, I>>(object: I): GenesisMetadata {
    const message = createBaseGenesisMetadata();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseIdentifiedGenesisMetadata(): IdentifiedGenesisMetadata {
  return { chainName: "", metadata: [] };
}

export const IdentifiedGenesisMetadata = {
  encode(message: IdentifiedGenesisMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    for (const v of message.metadata) {
      GenesisMetadata.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedGenesisMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedGenesisMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainName = reader.string();
          break;
        case 2:
          message.metadata.push(GenesisMetadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IdentifiedGenesisMetadata {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      metadata: Array.isArray(object?.metadata) ? object.metadata.map((e: any) => GenesisMetadata.fromJSON(e)) : [],
    };
  },

  toJSON(message: IdentifiedGenesisMetadata): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    if (message.metadata) {
      obj.metadata = message.metadata.map((e) => e ? GenesisMetadata.toJSON(e) : undefined);
    } else {
      obj.metadata = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IdentifiedGenesisMetadata>, I>>(object: I): IdentifiedGenesisMetadata {
    const message = createBaseIdentifiedGenesisMetadata();
    message.chainName = object.chainName ?? "";
    message.metadata = object.metadata?.map((e) => GenesisMetadata.fromPartial(e)) || [];
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
