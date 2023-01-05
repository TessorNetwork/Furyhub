/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";

export const protobufPackage = "tibc.core.client.v1";

/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */
export interface IdentifiedClientState {
  /** client identifier */
  chainName: string;
  /** client state */
  clientState: Any | undefined;
}

/**
 * IdentifiedRelayer defines a list of authorized relayers for the specified
 * client.
 */
export interface IdentifiedRelayers {
  /** client identifier */
  chainName: string;
  /** authorized relayer list */
  relayers: string[];
}

/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 */
export interface ConsensusStateWithHeight {
  /** consensus state height */
  height:
    | Height
    | undefined;
  /** consensus state */
  consensusState: Any | undefined;
}

/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 */
export interface ClientConsensusStates {
  /** client identifier */
  chainName: string;
  /** consensus states and their heights associated with the client */
  consensusStates: ConsensusStateWithHeight[];
}

/** CreateClientProposal defines a overnance proposal to create an TIBC client */
export interface CreateClientProposal {
  /** the title of the update proposal */
  title: string;
  /** the description of the proposal */
  description: string;
  /** the client identifier for the client to be updated if the proposal passes */
  chainName: string;
  /** light client state */
  clientState:
    | Any
    | undefined;
  /**
   * consensus state associated with the client that corresponds to a given
   * height.
   */
  consensusState: Any | undefined;
}

/**
 * UpgradeClientProposal defines a overnance proposal to overide an TIBC client
 * state
 */
export interface UpgradeClientProposal {
  /** the title of the update proposal */
  title: string;
  /** the description of the proposal */
  description: string;
  /** the client identifier for the client to be updated if the proposal passes */
  chainName: string;
  /** client state */
  clientState:
    | Any
    | undefined;
  /** consensus state */
  consensusState: Any | undefined;
}

/**
 * RegisterRelayerProposal defines a overnance proposal to register some
 * relayers for updating a client state.
 */
export interface RegisterRelayerProposal {
  /** the title of the update proposal */
  title: string;
  /** the description of the proposal */
  description: string;
  /** the client identifier for the client to be updated if the proposal passes */
  chainName: string;
  /** relayer address list */
  relayers: string[];
}

/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 *
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 */
export interface Height {
  /** the revision that the client is currently on */
  revisionNumber: number;
  /** the height within the given revision */
  revisionHeight: number;
}

function createBaseIdentifiedClientState(): IdentifiedClientState {
  return { chainName: "", clientState: undefined };
}

export const IdentifiedClientState = {
  encode(message: IdentifiedClientState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedClientState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainName = reader.string();
          break;
        case 2:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IdentifiedClientState {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
    };
  },

  toJSON(message: IdentifiedClientState): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.clientState !== undefined
      && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IdentifiedClientState>, I>>(object: I): IdentifiedClientState {
    const message = createBaseIdentifiedClientState();
    message.chainName = object.chainName ?? "";
    message.clientState = (object.clientState !== undefined && object.clientState !== null)
      ? Any.fromPartial(object.clientState)
      : undefined;
    return message;
  },
};

function createBaseIdentifiedRelayers(): IdentifiedRelayers {
  return { chainName: "", relayers: [] };
}

export const IdentifiedRelayers = {
  encode(message: IdentifiedRelayers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    for (const v of message.relayers) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedRelayers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedRelayers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainName = reader.string();
          break;
        case 2:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IdentifiedRelayers {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: IdentifiedRelayers): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IdentifiedRelayers>, I>>(object: I): IdentifiedRelayers {
    const message = createBaseIdentifiedRelayers();
    message.chainName = object.chainName ?? "";
    message.relayers = object.relayers?.map((e) => e) || [];
    return message;
  },
};

function createBaseConsensusStateWithHeight(): ConsensusStateWithHeight {
  return { height: undefined, consensusState: undefined };
}

export const ConsensusStateWithHeight = {
  encode(message: ConsensusStateWithHeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusStateWithHeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusStateWithHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = Height.decode(reader, reader.uint32());
          break;
        case 2:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConsensusStateWithHeight {
    return {
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
      consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined,
    };
  },

  toJSON(message: ConsensusStateWithHeight): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    message.consensusState !== undefined
      && (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConsensusStateWithHeight>, I>>(object: I): ConsensusStateWithHeight {
    const message = createBaseConsensusStateWithHeight();
    message.height = (object.height !== undefined && object.height !== null)
      ? Height.fromPartial(object.height)
      : undefined;
    message.consensusState = (object.consensusState !== undefined && object.consensusState !== null)
      ? Any.fromPartial(object.consensusState)
      : undefined;
    return message;
  },
};

function createBaseClientConsensusStates(): ClientConsensusStates {
  return { chainName: "", consensusStates: [] };
}

export const ClientConsensusStates = {
  encode(message: ClientConsensusStates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    for (const v of message.consensusStates) {
      ConsensusStateWithHeight.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientConsensusStates {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientConsensusStates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainName = reader.string();
          break;
        case 2:
          message.consensusStates.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClientConsensusStates {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      consensusStates: Array.isArray(object?.consensusStates)
        ? object.consensusStates.map((e: any) => ConsensusStateWithHeight.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ClientConsensusStates): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    if (message.consensusStates) {
      obj.consensusStates = message.consensusStates.map((e) => e ? ConsensusStateWithHeight.toJSON(e) : undefined);
    } else {
      obj.consensusStates = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClientConsensusStates>, I>>(object: I): ClientConsensusStates {
    const message = createBaseClientConsensusStates();
    message.chainName = object.chainName ?? "";
    message.consensusStates = object.consensusStates?.map((e) => ConsensusStateWithHeight.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateClientProposal(): CreateClientProposal {
  return { title: "", description: "", chainName: "", clientState: undefined, consensusState: undefined };
}

export const CreateClientProposal = {
  encode(message: CreateClientProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainName !== "") {
      writer.uint32(26).string(message.chainName);
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(34).fork()).ldelim();
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateClientProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateClientProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.chainName = reader.string();
          break;
        case 4:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 5:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateClientProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
      consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined,
    };
  },

  toJSON(message: CreateClientProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.clientState !== undefined
      && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    message.consensusState !== undefined
      && (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateClientProposal>, I>>(object: I): CreateClientProposal {
    const message = createBaseCreateClientProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainName = object.chainName ?? "";
    message.clientState = (object.clientState !== undefined && object.clientState !== null)
      ? Any.fromPartial(object.clientState)
      : undefined;
    message.consensusState = (object.consensusState !== undefined && object.consensusState !== null)
      ? Any.fromPartial(object.consensusState)
      : undefined;
    return message;
  },
};

function createBaseUpgradeClientProposal(): UpgradeClientProposal {
  return { title: "", description: "", chainName: "", clientState: undefined, consensusState: undefined };
}

export const UpgradeClientProposal = {
  encode(message: UpgradeClientProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainName !== "") {
      writer.uint32(26).string(message.chainName);
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(34).fork()).ldelim();
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpgradeClientProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpgradeClientProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.chainName = reader.string();
          break;
        case 4:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 5:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpgradeClientProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
      consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined,
    };
  },

  toJSON(message: UpgradeClientProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.clientState !== undefined
      && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    message.consensusState !== undefined
      && (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpgradeClientProposal>, I>>(object: I): UpgradeClientProposal {
    const message = createBaseUpgradeClientProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainName = object.chainName ?? "";
    message.clientState = (object.clientState !== undefined && object.clientState !== null)
      ? Any.fromPartial(object.clientState)
      : undefined;
    message.consensusState = (object.consensusState !== undefined && object.consensusState !== null)
      ? Any.fromPartial(object.consensusState)
      : undefined;
    return message;
  },
};

function createBaseRegisterRelayerProposal(): RegisterRelayerProposal {
  return { title: "", description: "", chainName: "", relayers: [] };
}

export const RegisterRelayerProposal = {
  encode(message: RegisterRelayerProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainName !== "") {
      writer.uint32(26).string(message.chainName);
    }
    for (const v of message.relayers) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterRelayerProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterRelayerProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.chainName = reader.string();
          break;
        case 4:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterRelayerProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: RegisterRelayerProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterRelayerProposal>, I>>(object: I): RegisterRelayerProposal {
    const message = createBaseRegisterRelayerProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainName = object.chainName ?? "";
    message.relayers = object.relayers?.map((e) => e) || [];
    return message;
  },
};

function createBaseHeight(): Height {
  return { revisionNumber: 0, revisionHeight: 0 };
}

export const Height = {
  encode(message: Height, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revisionNumber !== 0) {
      writer.uint32(8).uint64(message.revisionNumber);
    }
    if (message.revisionHeight !== 0) {
      writer.uint32(16).uint64(message.revisionHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Height {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.revisionNumber = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.revisionHeight = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Height {
    return {
      revisionNumber: isSet(object.revisionNumber) ? Number(object.revisionNumber) : 0,
      revisionHeight: isSet(object.revisionHeight) ? Number(object.revisionHeight) : 0,
    };
  },

  toJSON(message: Height): unknown {
    const obj: any = {};
    message.revisionNumber !== undefined && (obj.revisionNumber = Math.round(message.revisionNumber));
    message.revisionHeight !== undefined && (obj.revisionHeight = Math.round(message.revisionHeight));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Height>, I>>(object: I): Height {
    const message = createBaseHeight();
    message.revisionNumber = object.revisionNumber ?? 0;
    message.revisionHeight = object.revisionHeight ?? 0;
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
