/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "irismod.farm";

export interface FarmPool {
  id: string;
  creator: string;
  description: string;
  startHeight: number;
  endHeight: number;
  lastHeightDistrRewards: number;
  editable: boolean;
  totalLptLocked: Coin | undefined;
  rules: RewardRule[];
}

export interface RewardRule {
  reward: string;
  totalReward: string;
  remainingReward: string;
  rewardPerBlock: string;
  rewardPerShare: string;
}

export interface FarmInfo {
  poolId: string;
  address: string;
  locked: string;
  rewardDebt: Coin[];
}

export interface Params {
  poolCreationFee: Coin | undefined;
  maxRewardCategories: number;
  taxRate: string;
}

export interface EscrowInfo {
  proposer: string;
  fundApplied: Coin[];
  fundSelfBond: Coin[];
  proposalId: number;
}

/**
 * CommunityPoolCreateFarmProposal is a gov Content type for creating a farm
 * pool with community pool
 */
export interface CommunityPoolCreateFarmProposal {
  title: string;
  description: string;
  poolDescription: string;
  lptDenom: string;
  rewardPerBlock: Coin[];
  fundApplied: Coin[];
  fundSelfBond: Coin[];
}

function createBaseFarmPool(): FarmPool {
  return {
    id: "",
    creator: "",
    description: "",
    startHeight: 0,
    endHeight: 0,
    lastHeightDistrRewards: 0,
    editable: false,
    totalLptLocked: undefined,
    rules: [],
  };
}

export const FarmPool = {
  encode(message: FarmPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.startHeight !== 0) {
      writer.uint32(32).int64(message.startHeight);
    }
    if (message.endHeight !== 0) {
      writer.uint32(40).int64(message.endHeight);
    }
    if (message.lastHeightDistrRewards !== 0) {
      writer.uint32(48).int64(message.lastHeightDistrRewards);
    }
    if (message.editable === true) {
      writer.uint32(56).bool(message.editable);
    }
    if (message.totalLptLocked !== undefined) {
      Coin.encode(message.totalLptLocked, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.rules) {
      RewardRule.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FarmPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFarmPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.startHeight = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.endHeight = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.lastHeightDistrRewards = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.editable = reader.bool();
          break;
        case 8:
          message.totalLptLocked = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.rules.push(RewardRule.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FarmPool {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      description: isSet(object.description) ? String(object.description) : "",
      startHeight: isSet(object.startHeight) ? Number(object.startHeight) : 0,
      endHeight: isSet(object.endHeight) ? Number(object.endHeight) : 0,
      lastHeightDistrRewards: isSet(object.lastHeightDistrRewards) ? Number(object.lastHeightDistrRewards) : 0,
      editable: isSet(object.editable) ? Boolean(object.editable) : false,
      totalLptLocked: isSet(object.totalLptLocked) ? Coin.fromJSON(object.totalLptLocked) : undefined,
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => RewardRule.fromJSON(e)) : [],
    };
  },

  toJSON(message: FarmPool): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.creator !== undefined && (obj.creator = message.creator);
    message.description !== undefined && (obj.description = message.description);
    message.startHeight !== undefined && (obj.startHeight = Math.round(message.startHeight));
    message.endHeight !== undefined && (obj.endHeight = Math.round(message.endHeight));
    message.lastHeightDistrRewards !== undefined
      && (obj.lastHeightDistrRewards = Math.round(message.lastHeightDistrRewards));
    message.editable !== undefined && (obj.editable = message.editable);
    message.totalLptLocked !== undefined
      && (obj.totalLptLocked = message.totalLptLocked ? Coin.toJSON(message.totalLptLocked) : undefined);
    if (message.rules) {
      obj.rules = message.rules.map((e) => e ? RewardRule.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FarmPool>, I>>(object: I): FarmPool {
    const message = createBaseFarmPool();
    message.id = object.id ?? "";
    message.creator = object.creator ?? "";
    message.description = object.description ?? "";
    message.startHeight = object.startHeight ?? 0;
    message.endHeight = object.endHeight ?? 0;
    message.lastHeightDistrRewards = object.lastHeightDistrRewards ?? 0;
    message.editable = object.editable ?? false;
    message.totalLptLocked = (object.totalLptLocked !== undefined && object.totalLptLocked !== null)
      ? Coin.fromPartial(object.totalLptLocked)
      : undefined;
    message.rules = object.rules?.map((e) => RewardRule.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRewardRule(): RewardRule {
  return { reward: "", totalReward: "", remainingReward: "", rewardPerBlock: "", rewardPerShare: "" };
}

export const RewardRule = {
  encode(message: RewardRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reward !== "") {
      writer.uint32(10).string(message.reward);
    }
    if (message.totalReward !== "") {
      writer.uint32(18).string(message.totalReward);
    }
    if (message.remainingReward !== "") {
      writer.uint32(26).string(message.remainingReward);
    }
    if (message.rewardPerBlock !== "") {
      writer.uint32(34).string(message.rewardPerBlock);
    }
    if (message.rewardPerShare !== "") {
      writer.uint32(42).string(message.rewardPerShare);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reward = reader.string();
          break;
        case 2:
          message.totalReward = reader.string();
          break;
        case 3:
          message.remainingReward = reader.string();
          break;
        case 4:
          message.rewardPerBlock = reader.string();
          break;
        case 5:
          message.rewardPerShare = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardRule {
    return {
      reward: isSet(object.reward) ? String(object.reward) : "",
      totalReward: isSet(object.totalReward) ? String(object.totalReward) : "",
      remainingReward: isSet(object.remainingReward) ? String(object.remainingReward) : "",
      rewardPerBlock: isSet(object.rewardPerBlock) ? String(object.rewardPerBlock) : "",
      rewardPerShare: isSet(object.rewardPerShare) ? String(object.rewardPerShare) : "",
    };
  },

  toJSON(message: RewardRule): unknown {
    const obj: any = {};
    message.reward !== undefined && (obj.reward = message.reward);
    message.totalReward !== undefined && (obj.totalReward = message.totalReward);
    message.remainingReward !== undefined && (obj.remainingReward = message.remainingReward);
    message.rewardPerBlock !== undefined && (obj.rewardPerBlock = message.rewardPerBlock);
    message.rewardPerShare !== undefined && (obj.rewardPerShare = message.rewardPerShare);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RewardRule>, I>>(object: I): RewardRule {
    const message = createBaseRewardRule();
    message.reward = object.reward ?? "";
    message.totalReward = object.totalReward ?? "";
    message.remainingReward = object.remainingReward ?? "";
    message.rewardPerBlock = object.rewardPerBlock ?? "";
    message.rewardPerShare = object.rewardPerShare ?? "";
    return message;
  },
};

function createBaseFarmInfo(): FarmInfo {
  return { poolId: "", address: "", locked: "", rewardDebt: [] };
}

export const FarmInfo = {
  encode(message: FarmInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.locked !== "") {
      writer.uint32(26).string(message.locked);
    }
    for (const v of message.rewardDebt) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FarmInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFarmInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.locked = reader.string();
          break;
        case 4:
          message.rewardDebt.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FarmInfo {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      address: isSet(object.address) ? String(object.address) : "",
      locked: isSet(object.locked) ? String(object.locked) : "",
      rewardDebt: Array.isArray(object?.rewardDebt) ? object.rewardDebt.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: FarmInfo): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.address !== undefined && (obj.address = message.address);
    message.locked !== undefined && (obj.locked = message.locked);
    if (message.rewardDebt) {
      obj.rewardDebt = message.rewardDebt.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewardDebt = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FarmInfo>, I>>(object: I): FarmInfo {
    const message = createBaseFarmInfo();
    message.poolId = object.poolId ?? "";
    message.address = object.address ?? "";
    message.locked = object.locked ?? "";
    message.rewardDebt = object.rewardDebt?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseParams(): Params {
  return { poolCreationFee: undefined, maxRewardCategories: 0, taxRate: "" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolCreationFee !== undefined) {
      Coin.encode(message.poolCreationFee, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxRewardCategories !== 0) {
      writer.uint32(16).uint32(message.maxRewardCategories);
    }
    if (message.taxRate !== "") {
      writer.uint32(26).string(message.taxRate);
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
          message.poolCreationFee = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxRewardCategories = reader.uint32();
          break;
        case 3:
          message.taxRate = reader.string();
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
      poolCreationFee: isSet(object.poolCreationFee) ? Coin.fromJSON(object.poolCreationFee) : undefined,
      maxRewardCategories: isSet(object.maxRewardCategories) ? Number(object.maxRewardCategories) : 0,
      taxRate: isSet(object.taxRate) ? String(object.taxRate) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.poolCreationFee !== undefined
      && (obj.poolCreationFee = message.poolCreationFee ? Coin.toJSON(message.poolCreationFee) : undefined);
    message.maxRewardCategories !== undefined && (obj.maxRewardCategories = Math.round(message.maxRewardCategories));
    message.taxRate !== undefined && (obj.taxRate = message.taxRate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.poolCreationFee = (object.poolCreationFee !== undefined && object.poolCreationFee !== null)
      ? Coin.fromPartial(object.poolCreationFee)
      : undefined;
    message.maxRewardCategories = object.maxRewardCategories ?? 0;
    message.taxRate = object.taxRate ?? "";
    return message;
  },
};

function createBaseEscrowInfo(): EscrowInfo {
  return { proposer: "", fundApplied: [], fundSelfBond: [], proposalId: 0 };
}

export const EscrowInfo = {
  encode(message: EscrowInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposer !== "") {
      writer.uint32(10).string(message.proposer);
    }
    for (const v of message.fundApplied) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.fundSelfBond) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.proposalId !== 0) {
      writer.uint32(32).uint64(message.proposalId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EscrowInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEscrowInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposer = reader.string();
          break;
        case 2:
          message.fundApplied.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.fundSelfBond.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.proposalId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EscrowInfo {
    return {
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      fundApplied: Array.isArray(object?.fundApplied) ? object.fundApplied.map((e: any) => Coin.fromJSON(e)) : [],
      fundSelfBond: Array.isArray(object?.fundSelfBond) ? object.fundSelfBond.map((e: any) => Coin.fromJSON(e)) : [],
      proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0,
    };
  },

  toJSON(message: EscrowInfo): unknown {
    const obj: any = {};
    message.proposer !== undefined && (obj.proposer = message.proposer);
    if (message.fundApplied) {
      obj.fundApplied = message.fundApplied.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.fundApplied = [];
    }
    if (message.fundSelfBond) {
      obj.fundSelfBond = message.fundSelfBond.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.fundSelfBond = [];
    }
    message.proposalId !== undefined && (obj.proposalId = Math.round(message.proposalId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EscrowInfo>, I>>(object: I): EscrowInfo {
    const message = createBaseEscrowInfo();
    message.proposer = object.proposer ?? "";
    message.fundApplied = object.fundApplied?.map((e) => Coin.fromPartial(e)) || [];
    message.fundSelfBond = object.fundSelfBond?.map((e) => Coin.fromPartial(e)) || [];
    message.proposalId = object.proposalId ?? 0;
    return message;
  },
};

function createBaseCommunityPoolCreateFarmProposal(): CommunityPoolCreateFarmProposal {
  return {
    title: "",
    description: "",
    poolDescription: "",
    lptDenom: "",
    rewardPerBlock: [],
    fundApplied: [],
    fundSelfBond: [],
  };
}

export const CommunityPoolCreateFarmProposal = {
  encode(message: CommunityPoolCreateFarmProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.poolDescription !== "") {
      writer.uint32(26).string(message.poolDescription);
    }
    if (message.lptDenom !== "") {
      writer.uint32(34).string(message.lptDenom);
    }
    for (const v of message.rewardPerBlock) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.fundApplied) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.fundSelfBond) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolCreateFarmProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolCreateFarmProposal();
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
          message.poolDescription = reader.string();
          break;
        case 4:
          message.lptDenom = reader.string();
          break;
        case 5:
          message.rewardPerBlock.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.fundApplied.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.fundSelfBond.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommunityPoolCreateFarmProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      poolDescription: isSet(object.poolDescription) ? String(object.poolDescription) : "",
      lptDenom: isSet(object.lptDenom) ? String(object.lptDenom) : "",
      rewardPerBlock: Array.isArray(object?.rewardPerBlock)
        ? object.rewardPerBlock.map((e: any) => Coin.fromJSON(e))
        : [],
      fundApplied: Array.isArray(object?.fundApplied) ? object.fundApplied.map((e: any) => Coin.fromJSON(e)) : [],
      fundSelfBond: Array.isArray(object?.fundSelfBond) ? object.fundSelfBond.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: CommunityPoolCreateFarmProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.poolDescription !== undefined && (obj.poolDescription = message.poolDescription);
    message.lptDenom !== undefined && (obj.lptDenom = message.lptDenom);
    if (message.rewardPerBlock) {
      obj.rewardPerBlock = message.rewardPerBlock.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewardPerBlock = [];
    }
    if (message.fundApplied) {
      obj.fundApplied = message.fundApplied.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.fundApplied = [];
    }
    if (message.fundSelfBond) {
      obj.fundSelfBond = message.fundSelfBond.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.fundSelfBond = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommunityPoolCreateFarmProposal>, I>>(
    object: I,
  ): CommunityPoolCreateFarmProposal {
    const message = createBaseCommunityPoolCreateFarmProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.poolDescription = object.poolDescription ?? "";
    message.lptDenom = object.lptDenom ?? "";
    message.rewardPerBlock = object.rewardPerBlock?.map((e) => Coin.fromPartial(e)) || [];
    message.fundApplied = object.fundApplied?.map((e) => Coin.fromPartial(e)) || [];
    message.fundSelfBond = object.fundSelfBond?.map((e) => Coin.fromPartial(e)) || [];
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
