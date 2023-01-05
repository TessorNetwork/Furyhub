/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { CommunityPoolCreateFarmProposal } from "./farm";

export const protobufPackage = "petrimod.farm";

export interface MsgCreatePool {
  description: string;
  lptDenom: string;
  startHeight: number;
  rewardPerBlock: Coin[];
  totalReward: Coin[];
  editable: boolean;
  creator: string;
}

export interface MsgCreatePoolWithCommunityPool {
  content: CommunityPoolCreateFarmProposal | undefined;
  initialDeposit: Coin[];
  proposer: string;
}

export interface MsgDestroyPool {
  poolId: string;
  creator: string;
}

export interface MsgAdjustPool {
  poolId: string;
  additionalReward: Coin[];
  rewardPerBlock: Coin[];
  creator: string;
}

export interface MsgStake {
  poolId: string;
  amount: Coin | undefined;
  sender: string;
}

export interface MsgUnstake {
  poolId: string;
  amount: Coin | undefined;
  sender: string;
}

export interface MsgHarvest {
  poolId: string;
  sender: string;
}

export interface MsgCreatePoolResponse {
}

export interface MsgCreatePoolWithCommunityPoolResponse {
}

export interface MsgDestroyPoolResponse {
}

export interface MsgAdjustPoolResponse {
}

export interface MsgStakeResponse {
  reward: Coin[];
}

export interface MsgUnstakeResponse {
  reward: Coin[];
}

export interface MsgHarvestResponse {
  reward: Coin[];
}

function createBaseMsgCreatePool(): MsgCreatePool {
  return {
    description: "",
    lptDenom: "",
    startHeight: 0,
    rewardPerBlock: [],
    totalReward: [],
    editable: false,
    creator: "",
  };
}

export const MsgCreatePool = {
  encode(message: MsgCreatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.lptDenom !== "") {
      writer.uint32(18).string(message.lptDenom);
    }
    if (message.startHeight !== 0) {
      writer.uint32(24).int64(message.startHeight);
    }
    for (const v of message.rewardPerBlock) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.totalReward) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.editable === true) {
      writer.uint32(48).bool(message.editable);
    }
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        case 2:
          message.lptDenom = reader.string();
          break;
        case 3:
          message.startHeight = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.rewardPerBlock.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.totalReward.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.editable = reader.bool();
          break;
        case 7:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePool {
    return {
      description: isSet(object.description) ? String(object.description) : "",
      lptDenom: isSet(object.lptDenom) ? String(object.lptDenom) : "",
      startHeight: isSet(object.startHeight) ? Number(object.startHeight) : 0,
      rewardPerBlock: Array.isArray(object?.rewardPerBlock)
        ? object.rewardPerBlock.map((e: any) => Coin.fromJSON(e))
        : [],
      totalReward: Array.isArray(object?.totalReward) ? object.totalReward.map((e: any) => Coin.fromJSON(e)) : [],
      editable: isSet(object.editable) ? Boolean(object.editable) : false,
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: MsgCreatePool): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description);
    message.lptDenom !== undefined && (obj.lptDenom = message.lptDenom);
    message.startHeight !== undefined && (obj.startHeight = Math.round(message.startHeight));
    if (message.rewardPerBlock) {
      obj.rewardPerBlock = message.rewardPerBlock.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewardPerBlock = [];
    }
    if (message.totalReward) {
      obj.totalReward = message.totalReward.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalReward = [];
    }
    message.editable !== undefined && (obj.editable = message.editable);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePool>, I>>(object: I): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.description = object.description ?? "";
    message.lptDenom = object.lptDenom ?? "";
    message.startHeight = object.startHeight ?? 0;
    message.rewardPerBlock = object.rewardPerBlock?.map((e) => Coin.fromPartial(e)) || [];
    message.totalReward = object.totalReward?.map((e) => Coin.fromPartial(e)) || [];
    message.editable = object.editable ?? false;
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgCreatePoolWithCommunityPool(): MsgCreatePoolWithCommunityPool {
  return { content: undefined, initialDeposit: [], proposer: "" };
}

export const MsgCreatePoolWithCommunityPool = {
  encode(message: MsgCreatePoolWithCommunityPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== undefined) {
      CommunityPoolCreateFarmProposal.encode(message.content, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.initialDeposit) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolWithCommunityPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolWithCommunityPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = CommunityPoolCreateFarmProposal.decode(reader, reader.uint32());
          break;
        case 2:
          message.initialDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.proposer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePoolWithCommunityPool {
    return {
      content: isSet(object.content) ? CommunityPoolCreateFarmProposal.fromJSON(object.content) : undefined,
      initialDeposit: Array.isArray(object?.initialDeposit)
        ? object.initialDeposit.map((e: any) => Coin.fromJSON(e))
        : [],
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
    };
  },

  toJSON(message: MsgCreatePoolWithCommunityPool): unknown {
    const obj: any = {};
    message.content !== undefined
      && (obj.content = message.content ? CommunityPoolCreateFarmProposal.toJSON(message.content) : undefined);
    if (message.initialDeposit) {
      obj.initialDeposit = message.initialDeposit.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.initialDeposit = [];
    }
    message.proposer !== undefined && (obj.proposer = message.proposer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePoolWithCommunityPool>, I>>(
    object: I,
  ): MsgCreatePoolWithCommunityPool {
    const message = createBaseMsgCreatePoolWithCommunityPool();
    message.content = (object.content !== undefined && object.content !== null)
      ? CommunityPoolCreateFarmProposal.fromPartial(object.content)
      : undefined;
    message.initialDeposit = object.initialDeposit?.map((e) => Coin.fromPartial(e)) || [];
    message.proposer = object.proposer ?? "";
    return message;
  },
};

function createBaseMsgDestroyPool(): MsgDestroyPool {
  return { poolId: "", creator: "" };
}

export const MsgDestroyPool = {
  encode(message: MsgDestroyPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDestroyPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDestroyPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDestroyPool {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: MsgDestroyPool): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDestroyPool>, I>>(object: I): MsgDestroyPool {
    const message = createBaseMsgDestroyPool();
    message.poolId = object.poolId ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgAdjustPool(): MsgAdjustPool {
  return { poolId: "", additionalReward: [], rewardPerBlock: [], creator: "" };
}

export const MsgAdjustPool = {
  encode(message: MsgAdjustPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    for (const v of message.additionalReward) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.rewardPerBlock) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAdjustPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAdjustPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.additionalReward.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.rewardPerBlock.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAdjustPool {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      additionalReward: Array.isArray(object?.additionalReward)
        ? object.additionalReward.map((e: any) => Coin.fromJSON(e))
        : [],
      rewardPerBlock: Array.isArray(object?.rewardPerBlock)
        ? object.rewardPerBlock.map((e: any) => Coin.fromJSON(e))
        : [],
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: MsgAdjustPool): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    if (message.additionalReward) {
      obj.additionalReward = message.additionalReward.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.additionalReward = [];
    }
    if (message.rewardPerBlock) {
      obj.rewardPerBlock = message.rewardPerBlock.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewardPerBlock = [];
    }
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAdjustPool>, I>>(object: I): MsgAdjustPool {
    const message = createBaseMsgAdjustPool();
    message.poolId = object.poolId ?? "";
    message.additionalReward = object.additionalReward?.map((e) => Coin.fromPartial(e)) || [];
    message.rewardPerBlock = object.rewardPerBlock?.map((e) => Coin.fromPartial(e)) || [];
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgStake(): MsgStake {
  return { poolId: "", amount: undefined, sender: "" };
}

export const MsgStake = {
  encode(message: MsgStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStake {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgStake): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStake>, I>>(object: I): MsgStake {
    const message = createBaseMsgStake();
    message.poolId = object.poolId ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgUnstake(): MsgUnstake {
  return { poolId: "", amount: undefined, sender: "" };
}

export const MsgUnstake = {
  encode(message: MsgUnstake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnstake {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgUnstake): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnstake>, I>>(object: I): MsgUnstake {
    const message = createBaseMsgUnstake();
    message.poolId = object.poolId ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgHarvest(): MsgHarvest {
  return { poolId: "", sender: "" };
}

export const MsgHarvest = {
  encode(message: MsgHarvest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgHarvest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHarvest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgHarvest {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgHarvest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgHarvest>, I>>(object: I): MsgHarvest {
    const message = createBaseMsgHarvest();
    message.poolId = object.poolId ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return {};
}

export const MsgCreatePoolResponse = {
  encode(_: MsgCreatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolResponse();
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

  fromJSON(_: any): MsgCreatePoolResponse {
    return {};
  },

  toJSON(_: MsgCreatePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePoolResponse>, I>>(_: I): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  },
};

function createBaseMsgCreatePoolWithCommunityPoolResponse(): MsgCreatePoolWithCommunityPoolResponse {
  return {};
}

export const MsgCreatePoolWithCommunityPoolResponse = {
  encode(_: MsgCreatePoolWithCommunityPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolWithCommunityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolWithCommunityPoolResponse();
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

  fromJSON(_: any): MsgCreatePoolWithCommunityPoolResponse {
    return {};
  },

  toJSON(_: MsgCreatePoolWithCommunityPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePoolWithCommunityPoolResponse>, I>>(
    _: I,
  ): MsgCreatePoolWithCommunityPoolResponse {
    const message = createBaseMsgCreatePoolWithCommunityPoolResponse();
    return message;
  },
};

function createBaseMsgDestroyPoolResponse(): MsgDestroyPoolResponse {
  return {};
}

export const MsgDestroyPoolResponse = {
  encode(_: MsgDestroyPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDestroyPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDestroyPoolResponse();
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

  fromJSON(_: any): MsgDestroyPoolResponse {
    return {};
  },

  toJSON(_: MsgDestroyPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDestroyPoolResponse>, I>>(_: I): MsgDestroyPoolResponse {
    const message = createBaseMsgDestroyPoolResponse();
    return message;
  },
};

function createBaseMsgAdjustPoolResponse(): MsgAdjustPoolResponse {
  return {};
}

export const MsgAdjustPoolResponse = {
  encode(_: MsgAdjustPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAdjustPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAdjustPoolResponse();
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

  fromJSON(_: any): MsgAdjustPoolResponse {
    return {};
  },

  toJSON(_: MsgAdjustPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAdjustPoolResponse>, I>>(_: I): MsgAdjustPoolResponse {
    const message = createBaseMsgAdjustPoolResponse();
    return message;
  },
};

function createBaseMsgStakeResponse(): MsgStakeResponse {
  return { reward: [] };
}

export const MsgStakeResponse = {
  encode(message: MsgStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.reward) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.reward.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStakeResponse {
    return { reward: Array.isArray(object?.reward) ? object.reward.map((e: any) => Coin.fromJSON(e)) : [] };
  },

  toJSON(message: MsgStakeResponse): unknown {
    const obj: any = {};
    if (message.reward) {
      obj.reward = message.reward.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.reward = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStakeResponse>, I>>(object: I): MsgStakeResponse {
    const message = createBaseMsgStakeResponse();
    message.reward = object.reward?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgUnstakeResponse(): MsgUnstakeResponse {
  return { reward: [] };
}

export const MsgUnstakeResponse = {
  encode(message: MsgUnstakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.reward) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.reward.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnstakeResponse {
    return { reward: Array.isArray(object?.reward) ? object.reward.map((e: any) => Coin.fromJSON(e)) : [] };
  },

  toJSON(message: MsgUnstakeResponse): unknown {
    const obj: any = {};
    if (message.reward) {
      obj.reward = message.reward.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.reward = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnstakeResponse>, I>>(object: I): MsgUnstakeResponse {
    const message = createBaseMsgUnstakeResponse();
    message.reward = object.reward?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgHarvestResponse(): MsgHarvestResponse {
  return { reward: [] };
}

export const MsgHarvestResponse = {
  encode(message: MsgHarvestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.reward) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgHarvestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHarvestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.reward.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgHarvestResponse {
    return { reward: Array.isArray(object?.reward) ? object.reward.map((e: any) => Coin.fromJSON(e)) : [] };
  },

  toJSON(message: MsgHarvestResponse): unknown {
    const obj: any = {};
    if (message.reward) {
      obj.reward = message.reward.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.reward = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgHarvestResponse>, I>>(object: I): MsgHarvestResponse {
    const message = createBaseMsgHarvestResponse();
    message.reward = object.reward?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

/** Msg defines the farm Msg service. */
export interface Msg {
  /** CreatePool defines a method for creating a new farm pool */
  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
  /** CreatePoolWithCommunityPool defines a method for creating a new farm pool */
  CreatePoolWithCommunityPool(request: MsgCreatePoolWithCommunityPool): Promise<MsgCreatePoolWithCommunityPoolResponse>;
  /** DestroyPool defines a method for destroying a existed farm pool */
  DestroyPool(request: MsgDestroyPool): Promise<MsgDestroyPoolResponse>;
  /** AdjustPool defines a method for adjusting the farm pool params */
  AdjustPool(request: MsgAdjustPool): Promise<MsgAdjustPoolResponse>;
  /** Stake defines a method for staking some lp token to a farm pool */
  Stake(request: MsgStake): Promise<MsgStakeResponse>;
  /**
   * Unstake defines a method for unstaking some lp token from a farm pool and
   * withdraw some reward
   */
  Unstake(request: MsgUnstake): Promise<MsgUnstakeResponse>;
  /** Harvest defines a method withdraw some reward from a farm pool */
  Harvest(request: MsgHarvest): Promise<MsgHarvestResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreatePool = this.CreatePool.bind(this);
    this.CreatePoolWithCommunityPool = this.CreatePoolWithCommunityPool.bind(this);
    this.DestroyPool = this.DestroyPool.bind(this);
    this.AdjustPool = this.AdjustPool.bind(this);
    this.Stake = this.Stake.bind(this);
    this.Unstake = this.Unstake.bind(this);
    this.Harvest = this.Harvest.bind(this);
  }
  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request("petrimod.farm.Msg", "CreatePool", data);
    return promise.then((data) => MsgCreatePoolResponse.decode(new _m0.Reader(data)));
  }

  CreatePoolWithCommunityPool(
    request: MsgCreatePoolWithCommunityPool,
  ): Promise<MsgCreatePoolWithCommunityPoolResponse> {
    const data = MsgCreatePoolWithCommunityPool.encode(request).finish();
    const promise = this.rpc.request("petrimod.farm.Msg", "CreatePoolWithCommunityPool", data);
    return promise.then((data) => MsgCreatePoolWithCommunityPoolResponse.decode(new _m0.Reader(data)));
  }

  DestroyPool(request: MsgDestroyPool): Promise<MsgDestroyPoolResponse> {
    const data = MsgDestroyPool.encode(request).finish();
    const promise = this.rpc.request("petrimod.farm.Msg", "DestroyPool", data);
    return promise.then((data) => MsgDestroyPoolResponse.decode(new _m0.Reader(data)));
  }

  AdjustPool(request: MsgAdjustPool): Promise<MsgAdjustPoolResponse> {
    const data = MsgAdjustPool.encode(request).finish();
    const promise = this.rpc.request("petrimod.farm.Msg", "AdjustPool", data);
    return promise.then((data) => MsgAdjustPoolResponse.decode(new _m0.Reader(data)));
  }

  Stake(request: MsgStake): Promise<MsgStakeResponse> {
    const data = MsgStake.encode(request).finish();
    const promise = this.rpc.request("petrimod.farm.Msg", "Stake", data);
    return promise.then((data) => MsgStakeResponse.decode(new _m0.Reader(data)));
  }

  Unstake(request: MsgUnstake): Promise<MsgUnstakeResponse> {
    const data = MsgUnstake.encode(request).finish();
    const promise = this.rpc.request("petrimod.farm.Msg", "Unstake", data);
    return promise.then((data) => MsgUnstakeResponse.decode(new _m0.Reader(data)));
  }

  Harvest(request: MsgHarvest): Promise<MsgHarvestResponse> {
    const data = MsgHarvest.encode(request).finish();
    const promise = this.rpc.request("petrimod.farm.Msg", "Harvest", data);
    return promise.then((data) => MsgHarvestResponse.decode(new _m0.Reader(data)));
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
