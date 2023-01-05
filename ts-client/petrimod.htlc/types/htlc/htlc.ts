/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Duration } from "../google/protobuf/duration";

export const protobufPackage = "petrimod.htlc";

/** HTLCState defines the state of an HTLC */
export enum HTLCState {
  /** HTLC_STATE_OPEN - HTLC_STATE_OPEN defines an open state. */
  HTLC_STATE_OPEN = 0,
  /** HTLC_STATE_COMPLETED - HTLC_STATE_COMPLETED defines a completed state. */
  HTLC_STATE_COMPLETED = 1,
  /** HTLC_STATE_REFUNDED - HTLC_STATE_REFUNDED defines a refunded state. */
  HTLC_STATE_REFUNDED = 2,
  UNRECOGNIZED = -1,
}

export function hTLCStateFromJSON(object: any): HTLCState {
  switch (object) {
    case 0:
    case "HTLC_STATE_OPEN":
      return HTLCState.HTLC_STATE_OPEN;
    case 1:
    case "HTLC_STATE_COMPLETED":
      return HTLCState.HTLC_STATE_COMPLETED;
    case 2:
    case "HTLC_STATE_REFUNDED":
      return HTLCState.HTLC_STATE_REFUNDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HTLCState.UNRECOGNIZED;
  }
}

export function hTLCStateToJSON(object: HTLCState): string {
  switch (object) {
    case HTLCState.HTLC_STATE_OPEN:
      return "HTLC_STATE_OPEN";
    case HTLCState.HTLC_STATE_COMPLETED:
      return "HTLC_STATE_COMPLETED";
    case HTLCState.HTLC_STATE_REFUNDED:
      return "HTLC_STATE_REFUNDED";
    case HTLCState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** SwapDirection defines the direction of an HTLT */
export enum SwapDirection {
  /** NONE - NONE defines an htlt none direction. */
  NONE = 0,
  /** INCOMING - INCOMING defines an htlt incoming direction. */
  INCOMING = 1,
  /** OUTGOING - OUTGOING defines an htlt outgoing direction. */
  OUTGOING = 2,
  UNRECOGNIZED = -1,
}

export function swapDirectionFromJSON(object: any): SwapDirection {
  switch (object) {
    case 0:
    case "NONE":
      return SwapDirection.NONE;
    case 1:
    case "INCOMING":
      return SwapDirection.INCOMING;
    case 2:
    case "OUTGOING":
      return SwapDirection.OUTGOING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SwapDirection.UNRECOGNIZED;
  }
}

export function swapDirectionToJSON(object: SwapDirection): string {
  switch (object) {
    case SwapDirection.NONE:
      return "NONE";
    case SwapDirection.INCOMING:
      return "INCOMING";
    case SwapDirection.OUTGOING:
      return "OUTGOING";
    case SwapDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** HTLC defines the struct of an HTLC */
export interface HTLC {
  id: string;
  sender: string;
  to: string;
  receiverOnOtherChain: string;
  senderOnOtherChain: string;
  amount: Coin[];
  hashLock: string;
  secret: string;
  timestamp: number;
  expirationHeight: number;
  state: HTLCState;
  closedBlock: number;
  transfer: boolean;
  direction: SwapDirection;
}

export interface AssetSupply {
  incomingSupply: Coin | undefined;
  outgoingSupply: Coin | undefined;
  currentSupply: Coin | undefined;
  timeLimitedCurrentSupply: Coin | undefined;
  timeElapsed: Duration | undefined;
}

/** Params defines token module's parameters */
export interface Params {
  assetParams: AssetParam[];
}

export interface AssetParam {
  /** name of the asset */
  denom: string;
  /** asset supply limit */
  supplyLimit:
    | SupplyLimit
    | undefined;
  /** denotes if asset is available or paused */
  active: boolean;
  /** the address of the relayer process */
  deputyAddress: string;
  /** the fixed fee charged by the relayer process for outgoing swaps */
  fixedFee: string;
  /** Minimum swap amount */
  minSwapAmount: string;
  /** Maximum swap amount */
  maxSwapAmount: string;
  /** Minimum swap block lock */
  minBlockLock: number;
  /** Maximum swap block lock */
  maxBlockLock: number;
}

export interface SupplyLimit {
  /** the absolute supply limit for an asset */
  limit: string;
  /** boolean for if the supply is also limited by time */
  timeLimited: boolean;
  /** the duration for which the supply time limit applies */
  timePeriod:
    | Duration
    | undefined;
  /** the supply limit for an asset for each time period */
  timeBasedLimit: string;
}

function createBaseHTLC(): HTLC {
  return {
    id: "",
    sender: "",
    to: "",
    receiverOnOtherChain: "",
    senderOnOtherChain: "",
    amount: [],
    hashLock: "",
    secret: "",
    timestamp: 0,
    expirationHeight: 0,
    state: 0,
    closedBlock: 0,
    transfer: false,
    direction: 0,
  };
}

export const HTLC = {
  encode(message: HTLC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    if (message.receiverOnOtherChain !== "") {
      writer.uint32(34).string(message.receiverOnOtherChain);
    }
    if (message.senderOnOtherChain !== "") {
      writer.uint32(42).string(message.senderOnOtherChain);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.hashLock !== "") {
      writer.uint32(58).string(message.hashLock);
    }
    if (message.secret !== "") {
      writer.uint32(66).string(message.secret);
    }
    if (message.timestamp !== 0) {
      writer.uint32(72).uint64(message.timestamp);
    }
    if (message.expirationHeight !== 0) {
      writer.uint32(80).uint64(message.expirationHeight);
    }
    if (message.state !== 0) {
      writer.uint32(88).int32(message.state);
    }
    if (message.closedBlock !== 0) {
      writer.uint32(96).uint64(message.closedBlock);
    }
    if (message.transfer === true) {
      writer.uint32(104).bool(message.transfer);
    }
    if (message.direction !== 0) {
      writer.uint32(112).int32(message.direction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HTLC {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHTLC();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.receiverOnOtherChain = reader.string();
          break;
        case 5:
          message.senderOnOtherChain = reader.string();
          break;
        case 6:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.hashLock = reader.string();
          break;
        case 8:
          message.secret = reader.string();
          break;
        case 9:
          message.timestamp = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.expirationHeight = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.state = reader.int32() as any;
          break;
        case 12:
          message.closedBlock = longToNumber(reader.uint64() as Long);
          break;
        case 13:
          message.transfer = reader.bool();
          break;
        case 14:
          message.direction = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HTLC {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      to: isSet(object.to) ? String(object.to) : "",
      receiverOnOtherChain: isSet(object.receiverOnOtherChain) ? String(object.receiverOnOtherChain) : "",
      senderOnOtherChain: isSet(object.senderOnOtherChain) ? String(object.senderOnOtherChain) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      hashLock: isSet(object.hashLock) ? String(object.hashLock) : "",
      secret: isSet(object.secret) ? String(object.secret) : "",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      expirationHeight: isSet(object.expirationHeight) ? Number(object.expirationHeight) : 0,
      state: isSet(object.state) ? hTLCStateFromJSON(object.state) : 0,
      closedBlock: isSet(object.closedBlock) ? Number(object.closedBlock) : 0,
      transfer: isSet(object.transfer) ? Boolean(object.transfer) : false,
      direction: isSet(object.direction) ? swapDirectionFromJSON(object.direction) : 0,
    };
  },

  toJSON(message: HTLC): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
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
    message.secret !== undefined && (obj.secret = message.secret);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.expirationHeight !== undefined && (obj.expirationHeight = Math.round(message.expirationHeight));
    message.state !== undefined && (obj.state = hTLCStateToJSON(message.state));
    message.closedBlock !== undefined && (obj.closedBlock = Math.round(message.closedBlock));
    message.transfer !== undefined && (obj.transfer = message.transfer);
    message.direction !== undefined && (obj.direction = swapDirectionToJSON(message.direction));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HTLC>, I>>(object: I): HTLC {
    const message = createBaseHTLC();
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.to = object.to ?? "";
    message.receiverOnOtherChain = object.receiverOnOtherChain ?? "";
    message.senderOnOtherChain = object.senderOnOtherChain ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    message.hashLock = object.hashLock ?? "";
    message.secret = object.secret ?? "";
    message.timestamp = object.timestamp ?? 0;
    message.expirationHeight = object.expirationHeight ?? 0;
    message.state = object.state ?? 0;
    message.closedBlock = object.closedBlock ?? 0;
    message.transfer = object.transfer ?? false;
    message.direction = object.direction ?? 0;
    return message;
  },
};

function createBaseAssetSupply(): AssetSupply {
  return {
    incomingSupply: undefined,
    outgoingSupply: undefined,
    currentSupply: undefined,
    timeLimitedCurrentSupply: undefined,
    timeElapsed: undefined,
  };
}

export const AssetSupply = {
  encode(message: AssetSupply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.incomingSupply !== undefined) {
      Coin.encode(message.incomingSupply, writer.uint32(10).fork()).ldelim();
    }
    if (message.outgoingSupply !== undefined) {
      Coin.encode(message.outgoingSupply, writer.uint32(18).fork()).ldelim();
    }
    if (message.currentSupply !== undefined) {
      Coin.encode(message.currentSupply, writer.uint32(26).fork()).ldelim();
    }
    if (message.timeLimitedCurrentSupply !== undefined) {
      Coin.encode(message.timeLimitedCurrentSupply, writer.uint32(34).fork()).ldelim();
    }
    if (message.timeElapsed !== undefined) {
      Duration.encode(message.timeElapsed, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetSupply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetSupply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incomingSupply = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.outgoingSupply = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.currentSupply = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.timeLimitedCurrentSupply = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.timeElapsed = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetSupply {
    return {
      incomingSupply: isSet(object.incomingSupply) ? Coin.fromJSON(object.incomingSupply) : undefined,
      outgoingSupply: isSet(object.outgoingSupply) ? Coin.fromJSON(object.outgoingSupply) : undefined,
      currentSupply: isSet(object.currentSupply) ? Coin.fromJSON(object.currentSupply) : undefined,
      timeLimitedCurrentSupply: isSet(object.timeLimitedCurrentSupply)
        ? Coin.fromJSON(object.timeLimitedCurrentSupply)
        : undefined,
      timeElapsed: isSet(object.timeElapsed) ? Duration.fromJSON(object.timeElapsed) : undefined,
    };
  },

  toJSON(message: AssetSupply): unknown {
    const obj: any = {};
    message.incomingSupply !== undefined
      && (obj.incomingSupply = message.incomingSupply ? Coin.toJSON(message.incomingSupply) : undefined);
    message.outgoingSupply !== undefined
      && (obj.outgoingSupply = message.outgoingSupply ? Coin.toJSON(message.outgoingSupply) : undefined);
    message.currentSupply !== undefined
      && (obj.currentSupply = message.currentSupply ? Coin.toJSON(message.currentSupply) : undefined);
    message.timeLimitedCurrentSupply !== undefined && (obj.timeLimitedCurrentSupply = message.timeLimitedCurrentSupply
      ? Coin.toJSON(message.timeLimitedCurrentSupply)
      : undefined);
    message.timeElapsed !== undefined
      && (obj.timeElapsed = message.timeElapsed ? Duration.toJSON(message.timeElapsed) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetSupply>, I>>(object: I): AssetSupply {
    const message = createBaseAssetSupply();
    message.incomingSupply = (object.incomingSupply !== undefined && object.incomingSupply !== null)
      ? Coin.fromPartial(object.incomingSupply)
      : undefined;
    message.outgoingSupply = (object.outgoingSupply !== undefined && object.outgoingSupply !== null)
      ? Coin.fromPartial(object.outgoingSupply)
      : undefined;
    message.currentSupply = (object.currentSupply !== undefined && object.currentSupply !== null)
      ? Coin.fromPartial(object.currentSupply)
      : undefined;
    message.timeLimitedCurrentSupply =
      (object.timeLimitedCurrentSupply !== undefined && object.timeLimitedCurrentSupply !== null)
        ? Coin.fromPartial(object.timeLimitedCurrentSupply)
        : undefined;
    message.timeElapsed = (object.timeElapsed !== undefined && object.timeElapsed !== null)
      ? Duration.fromPartial(object.timeElapsed)
      : undefined;
    return message;
  },
};

function createBaseParams(): Params {
  return { assetParams: [] };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assetParams) {
      AssetParam.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetParams.push(AssetParam.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      assetParams: Array.isArray(object?.assetParams) ? object.assetParams.map((e: any) => AssetParam.fromJSON(e)) : [],
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.assetParams) {
      obj.assetParams = message.assetParams.map((e) => e ? AssetParam.toJSON(e) : undefined);
    } else {
      obj.assetParams = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.assetParams = object.assetParams?.map((e) => AssetParam.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAssetParam(): AssetParam {
  return {
    denom: "",
    supplyLimit: undefined,
    active: false,
    deputyAddress: "",
    fixedFee: "",
    minSwapAmount: "",
    maxSwapAmount: "",
    minBlockLock: 0,
    maxBlockLock: 0,
  };
}

export const AssetParam = {
  encode(message: AssetParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.supplyLimit !== undefined) {
      SupplyLimit.encode(message.supplyLimit, writer.uint32(18).fork()).ldelim();
    }
    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }
    if (message.deputyAddress !== "") {
      writer.uint32(34).string(message.deputyAddress);
    }
    if (message.fixedFee !== "") {
      writer.uint32(42).string(message.fixedFee);
    }
    if (message.minSwapAmount !== "") {
      writer.uint32(50).string(message.minSwapAmount);
    }
    if (message.maxSwapAmount !== "") {
      writer.uint32(58).string(message.maxSwapAmount);
    }
    if (message.minBlockLock !== 0) {
      writer.uint32(64).uint64(message.minBlockLock);
    }
    if (message.maxBlockLock !== 0) {
      writer.uint32(72).uint64(message.maxBlockLock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.supplyLimit = SupplyLimit.decode(reader, reader.uint32());
          break;
        case 3:
          message.active = reader.bool();
          break;
        case 4:
          message.deputyAddress = reader.string();
          break;
        case 5:
          message.fixedFee = reader.string();
          break;
        case 6:
          message.minSwapAmount = reader.string();
          break;
        case 7:
          message.maxSwapAmount = reader.string();
          break;
        case 8:
          message.minBlockLock = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.maxBlockLock = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetParam {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      supplyLimit: isSet(object.supplyLimit) ? SupplyLimit.fromJSON(object.supplyLimit) : undefined,
      active: isSet(object.active) ? Boolean(object.active) : false,
      deputyAddress: isSet(object.deputyAddress) ? String(object.deputyAddress) : "",
      fixedFee: isSet(object.fixedFee) ? String(object.fixedFee) : "",
      minSwapAmount: isSet(object.minSwapAmount) ? String(object.minSwapAmount) : "",
      maxSwapAmount: isSet(object.maxSwapAmount) ? String(object.maxSwapAmount) : "",
      minBlockLock: isSet(object.minBlockLock) ? Number(object.minBlockLock) : 0,
      maxBlockLock: isSet(object.maxBlockLock) ? Number(object.maxBlockLock) : 0,
    };
  },

  toJSON(message: AssetParam): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.supplyLimit !== undefined
      && (obj.supplyLimit = message.supplyLimit ? SupplyLimit.toJSON(message.supplyLimit) : undefined);
    message.active !== undefined && (obj.active = message.active);
    message.deputyAddress !== undefined && (obj.deputyAddress = message.deputyAddress);
    message.fixedFee !== undefined && (obj.fixedFee = message.fixedFee);
    message.minSwapAmount !== undefined && (obj.minSwapAmount = message.minSwapAmount);
    message.maxSwapAmount !== undefined && (obj.maxSwapAmount = message.maxSwapAmount);
    message.minBlockLock !== undefined && (obj.minBlockLock = Math.round(message.minBlockLock));
    message.maxBlockLock !== undefined && (obj.maxBlockLock = Math.round(message.maxBlockLock));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetParam>, I>>(object: I): AssetParam {
    const message = createBaseAssetParam();
    message.denom = object.denom ?? "";
    message.supplyLimit = (object.supplyLimit !== undefined && object.supplyLimit !== null)
      ? SupplyLimit.fromPartial(object.supplyLimit)
      : undefined;
    message.active = object.active ?? false;
    message.deputyAddress = object.deputyAddress ?? "";
    message.fixedFee = object.fixedFee ?? "";
    message.minSwapAmount = object.minSwapAmount ?? "";
    message.maxSwapAmount = object.maxSwapAmount ?? "";
    message.minBlockLock = object.minBlockLock ?? 0;
    message.maxBlockLock = object.maxBlockLock ?? 0;
    return message;
  },
};

function createBaseSupplyLimit(): SupplyLimit {
  return { limit: "", timeLimited: false, timePeriod: undefined, timeBasedLimit: "" };
}

export const SupplyLimit = {
  encode(message: SupplyLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== "") {
      writer.uint32(10).string(message.limit);
    }
    if (message.timeLimited === true) {
      writer.uint32(16).bool(message.timeLimited);
    }
    if (message.timePeriod !== undefined) {
      Duration.encode(message.timePeriod, writer.uint32(26).fork()).ldelim();
    }
    if (message.timeBasedLimit !== "") {
      writer.uint32(34).string(message.timeBasedLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SupplyLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSupplyLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limit = reader.string();
          break;
        case 2:
          message.timeLimited = reader.bool();
          break;
        case 3:
          message.timePeriod = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.timeBasedLimit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SupplyLimit {
    return {
      limit: isSet(object.limit) ? String(object.limit) : "",
      timeLimited: isSet(object.timeLimited) ? Boolean(object.timeLimited) : false,
      timePeriod: isSet(object.timePeriod) ? Duration.fromJSON(object.timePeriod) : undefined,
      timeBasedLimit: isSet(object.timeBasedLimit) ? String(object.timeBasedLimit) : "",
    };
  },

  toJSON(message: SupplyLimit): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = message.limit);
    message.timeLimited !== undefined && (obj.timeLimited = message.timeLimited);
    message.timePeriod !== undefined
      && (obj.timePeriod = message.timePeriod ? Duration.toJSON(message.timePeriod) : undefined);
    message.timeBasedLimit !== undefined && (obj.timeBasedLimit = message.timeBasedLimit);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SupplyLimit>, I>>(object: I): SupplyLimit {
    const message = createBaseSupplyLimit();
    message.limit = object.limit ?? "";
    message.timeLimited = object.timeLimited ?? false;
    message.timePeriod = (object.timePeriod !== undefined && object.timePeriod !== null)
      ? Duration.fromPartial(object.timePeriod)
      : undefined;
    message.timeBasedLimit = object.timeBasedLimit ?? "";
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
