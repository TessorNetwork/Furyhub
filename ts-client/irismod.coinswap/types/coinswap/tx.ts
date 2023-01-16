/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Input, Output } from "./coinswap";

export const protobufPackage = "irismod.coinswap";

/** MsgAddLiquidity defines a msg for adding liquidity to a reserve pool */
export interface MsgAddLiquidity {
  maxToken: Coin | undefined;
  exactStandardAmt: string;
  minLiquidity: string;
  deadline: number;
  sender: string;
}

/** MsgAddLiquidityResponse defines the Msg/AddLiquidity response type */
export interface MsgAddLiquidityResponse {
  mintToken: Coin | undefined;
}

/**
 * MsgAddLiquidityUni defines a msg for adding liquidity unilaterally to a
 * reserve pool
 */
export interface MsgAddUnilateralLiquidity {
  counterpartyDenom: string;
  /** exact amount of token */
  exactToken: Coin | undefined;
  minLiquidity: string;
  deadline: number;
  sender: string;
}

/** MsgAddLiquidityUniResponse defines the Msg/AddLiquidityUni response type */
export interface MsgAddUnilateralLiquidityResponse {
  mintToken: Coin | undefined;
}

/** MsgRemoveLiquidity defines a msg for removing liquidity from a reserve pool */
export interface MsgRemoveLiquidity {
  withdrawLiquidity: Coin | undefined;
  minToken: string;
  minStandardAmt: string;
  deadline: number;
  sender: string;
}

/** MsgRemoveLiquidityResponse defines the Msg/RemoveLiquidity response type */
export interface MsgRemoveLiquidityResponse {
  withdrawCoins: Coin[];
}

/**
 * MsgRemoveUnilateralLiquidity defines a msg for removing liquidity
 * unilaterally to a reserve pool
 */
export interface MsgRemoveUnilateralLiquidity {
  counterpartyDenom: string;
  /** minimum amount of token */
  minToken: Coin | undefined;
  exactLiquidity: string;
  deadline: number;
  sender: string;
}

/**
 * MsgRemoveUnilateralLiquidityResponse defines the Msg/RemoveLiquidity response
 * type
 */
export interface MsgRemoveUnilateralLiquidityResponse {
  withdrawCoins: Coin[];
}

/** MsgSwapOrder defines a msg for swap order */
export interface MsgSwapOrder {
  input: Input | undefined;
  output: Output | undefined;
  deadline: number;
  isBuyOrder: boolean;
}

/** MsgSwapCoinResponse defines the Msg/SwapCoin response type */
export interface MsgSwapCoinResponse {
}

function createBaseMsgAddLiquidity(): MsgAddLiquidity {
  return { maxToken: undefined, exactStandardAmt: "", minLiquidity: "", deadline: 0, sender: "" };
}

export const MsgAddLiquidity = {
  encode(message: MsgAddLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxToken !== undefined) {
      Coin.encode(message.maxToken, writer.uint32(10).fork()).ldelim();
    }
    if (message.exactStandardAmt !== "") {
      writer.uint32(18).string(message.exactStandardAmt);
    }
    if (message.minLiquidity !== "") {
      writer.uint32(26).string(message.minLiquidity);
    }
    if (message.deadline !== 0) {
      writer.uint32(32).int64(message.deadline);
    }
    if (message.sender !== "") {
      writer.uint32(42).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxToken = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.exactStandardAmt = reader.string();
          break;
        case 3:
          message.minLiquidity = reader.string();
          break;
        case 4:
          message.deadline = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddLiquidity {
    return {
      maxToken: isSet(object.maxToken) ? Coin.fromJSON(object.maxToken) : undefined,
      exactStandardAmt: isSet(object.exactStandardAmt) ? String(object.exactStandardAmt) : "",
      minLiquidity: isSet(object.minLiquidity) ? String(object.minLiquidity) : "",
      deadline: isSet(object.deadline) ? Number(object.deadline) : 0,
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgAddLiquidity): unknown {
    const obj: any = {};
    message.maxToken !== undefined && (obj.maxToken = message.maxToken ? Coin.toJSON(message.maxToken) : undefined);
    message.exactStandardAmt !== undefined && (obj.exactStandardAmt = message.exactStandardAmt);
    message.minLiquidity !== undefined && (obj.minLiquidity = message.minLiquidity);
    message.deadline !== undefined && (obj.deadline = Math.round(message.deadline));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddLiquidity>, I>>(object: I): MsgAddLiquidity {
    const message = createBaseMsgAddLiquidity();
    message.maxToken = (object.maxToken !== undefined && object.maxToken !== null)
      ? Coin.fromPartial(object.maxToken)
      : undefined;
    message.exactStandardAmt = object.exactStandardAmt ?? "";
    message.minLiquidity = object.minLiquidity ?? "";
    message.deadline = object.deadline ?? 0;
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgAddLiquidityResponse(): MsgAddLiquidityResponse {
  return { mintToken: undefined };
}

export const MsgAddLiquidityResponse = {
  encode(message: MsgAddLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintToken !== undefined) {
      Coin.encode(message.mintToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintToken = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddLiquidityResponse {
    return { mintToken: isSet(object.mintToken) ? Coin.fromJSON(object.mintToken) : undefined };
  },

  toJSON(message: MsgAddLiquidityResponse): unknown {
    const obj: any = {};
    message.mintToken !== undefined && (obj.mintToken = message.mintToken ? Coin.toJSON(message.mintToken) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddLiquidityResponse>, I>>(object: I): MsgAddLiquidityResponse {
    const message = createBaseMsgAddLiquidityResponse();
    message.mintToken = (object.mintToken !== undefined && object.mintToken !== null)
      ? Coin.fromPartial(object.mintToken)
      : undefined;
    return message;
  },
};

function createBaseMsgAddUnilateralLiquidity(): MsgAddUnilateralLiquidity {
  return { counterpartyDenom: "", exactToken: undefined, minLiquidity: "", deadline: 0, sender: "" };
}

export const MsgAddUnilateralLiquidity = {
  encode(message: MsgAddUnilateralLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.counterpartyDenom !== "") {
      writer.uint32(10).string(message.counterpartyDenom);
    }
    if (message.exactToken !== undefined) {
      Coin.encode(message.exactToken, writer.uint32(18).fork()).ldelim();
    }
    if (message.minLiquidity !== "") {
      writer.uint32(26).string(message.minLiquidity);
    }
    if (message.deadline !== 0) {
      writer.uint32(32).int64(message.deadline);
    }
    if (message.sender !== "") {
      writer.uint32(42).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddUnilateralLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddUnilateralLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counterpartyDenom = reader.string();
          break;
        case 2:
          message.exactToken = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.minLiquidity = reader.string();
          break;
        case 4:
          message.deadline = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddUnilateralLiquidity {
    return {
      counterpartyDenom: isSet(object.counterpartyDenom) ? String(object.counterpartyDenom) : "",
      exactToken: isSet(object.exactToken) ? Coin.fromJSON(object.exactToken) : undefined,
      minLiquidity: isSet(object.minLiquidity) ? String(object.minLiquidity) : "",
      deadline: isSet(object.deadline) ? Number(object.deadline) : 0,
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgAddUnilateralLiquidity): unknown {
    const obj: any = {};
    message.counterpartyDenom !== undefined && (obj.counterpartyDenom = message.counterpartyDenom);
    message.exactToken !== undefined
      && (obj.exactToken = message.exactToken ? Coin.toJSON(message.exactToken) : undefined);
    message.minLiquidity !== undefined && (obj.minLiquidity = message.minLiquidity);
    message.deadline !== undefined && (obj.deadline = Math.round(message.deadline));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddUnilateralLiquidity>, I>>(object: I): MsgAddUnilateralLiquidity {
    const message = createBaseMsgAddUnilateralLiquidity();
    message.counterpartyDenom = object.counterpartyDenom ?? "";
    message.exactToken = (object.exactToken !== undefined && object.exactToken !== null)
      ? Coin.fromPartial(object.exactToken)
      : undefined;
    message.minLiquidity = object.minLiquidity ?? "";
    message.deadline = object.deadline ?? 0;
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgAddUnilateralLiquidityResponse(): MsgAddUnilateralLiquidityResponse {
  return { mintToken: undefined };
}

export const MsgAddUnilateralLiquidityResponse = {
  encode(message: MsgAddUnilateralLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintToken !== undefined) {
      Coin.encode(message.mintToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddUnilateralLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddUnilateralLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintToken = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddUnilateralLiquidityResponse {
    return { mintToken: isSet(object.mintToken) ? Coin.fromJSON(object.mintToken) : undefined };
  },

  toJSON(message: MsgAddUnilateralLiquidityResponse): unknown {
    const obj: any = {};
    message.mintToken !== undefined && (obj.mintToken = message.mintToken ? Coin.toJSON(message.mintToken) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddUnilateralLiquidityResponse>, I>>(
    object: I,
  ): MsgAddUnilateralLiquidityResponse {
    const message = createBaseMsgAddUnilateralLiquidityResponse();
    message.mintToken = (object.mintToken !== undefined && object.mintToken !== null)
      ? Coin.fromPartial(object.mintToken)
      : undefined;
    return message;
  },
};

function createBaseMsgRemoveLiquidity(): MsgRemoveLiquidity {
  return { withdrawLiquidity: undefined, minToken: "", minStandardAmt: "", deadline: 0, sender: "" };
}

export const MsgRemoveLiquidity = {
  encode(message: MsgRemoveLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawLiquidity !== undefined) {
      Coin.encode(message.withdrawLiquidity, writer.uint32(10).fork()).ldelim();
    }
    if (message.minToken !== "") {
      writer.uint32(18).string(message.minToken);
    }
    if (message.minStandardAmt !== "") {
      writer.uint32(26).string(message.minStandardAmt);
    }
    if (message.deadline !== 0) {
      writer.uint32(32).int64(message.deadline);
    }
    if (message.sender !== "") {
      writer.uint32(42).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawLiquidity = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.minToken = reader.string();
          break;
        case 3:
          message.minStandardAmt = reader.string();
          break;
        case 4:
          message.deadline = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveLiquidity {
    return {
      withdrawLiquidity: isSet(object.withdrawLiquidity) ? Coin.fromJSON(object.withdrawLiquidity) : undefined,
      minToken: isSet(object.minToken) ? String(object.minToken) : "",
      minStandardAmt: isSet(object.minStandardAmt) ? String(object.minStandardAmt) : "",
      deadline: isSet(object.deadline) ? Number(object.deadline) : 0,
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgRemoveLiquidity): unknown {
    const obj: any = {};
    message.withdrawLiquidity !== undefined
      && (obj.withdrawLiquidity = message.withdrawLiquidity ? Coin.toJSON(message.withdrawLiquidity) : undefined);
    message.minToken !== undefined && (obj.minToken = message.minToken);
    message.minStandardAmt !== undefined && (obj.minStandardAmt = message.minStandardAmt);
    message.deadline !== undefined && (obj.deadline = Math.round(message.deadline));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveLiquidity>, I>>(object: I): MsgRemoveLiquidity {
    const message = createBaseMsgRemoveLiquidity();
    message.withdrawLiquidity = (object.withdrawLiquidity !== undefined && object.withdrawLiquidity !== null)
      ? Coin.fromPartial(object.withdrawLiquidity)
      : undefined;
    message.minToken = object.minToken ?? "";
    message.minStandardAmt = object.minStandardAmt ?? "";
    message.deadline = object.deadline ?? 0;
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgRemoveLiquidityResponse(): MsgRemoveLiquidityResponse {
  return { withdrawCoins: [] };
}

export const MsgRemoveLiquidityResponse = {
  encode(message: MsgRemoveLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.withdrawCoins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveLiquidityResponse {
    return {
      withdrawCoins: Array.isArray(object?.withdrawCoins) ? object.withdrawCoins.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgRemoveLiquidityResponse): unknown {
    const obj: any = {};
    if (message.withdrawCoins) {
      obj.withdrawCoins = message.withdrawCoins.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.withdrawCoins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveLiquidityResponse>, I>>(object: I): MsgRemoveLiquidityResponse {
    const message = createBaseMsgRemoveLiquidityResponse();
    message.withdrawCoins = object.withdrawCoins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgRemoveUnilateralLiquidity(): MsgRemoveUnilateralLiquidity {
  return { counterpartyDenom: "", minToken: undefined, exactLiquidity: "", deadline: 0, sender: "" };
}

export const MsgRemoveUnilateralLiquidity = {
  encode(message: MsgRemoveUnilateralLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.counterpartyDenom !== "") {
      writer.uint32(10).string(message.counterpartyDenom);
    }
    if (message.minToken !== undefined) {
      Coin.encode(message.minToken, writer.uint32(18).fork()).ldelim();
    }
    if (message.exactLiquidity !== "") {
      writer.uint32(26).string(message.exactLiquidity);
    }
    if (message.deadline !== 0) {
      writer.uint32(32).int64(message.deadline);
    }
    if (message.sender !== "") {
      writer.uint32(42).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveUnilateralLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveUnilateralLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counterpartyDenom = reader.string();
          break;
        case 2:
          message.minToken = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.exactLiquidity = reader.string();
          break;
        case 4:
          message.deadline = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveUnilateralLiquidity {
    return {
      counterpartyDenom: isSet(object.counterpartyDenom) ? String(object.counterpartyDenom) : "",
      minToken: isSet(object.minToken) ? Coin.fromJSON(object.minToken) : undefined,
      exactLiquidity: isSet(object.exactLiquidity) ? String(object.exactLiquidity) : "",
      deadline: isSet(object.deadline) ? Number(object.deadline) : 0,
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgRemoveUnilateralLiquidity): unknown {
    const obj: any = {};
    message.counterpartyDenom !== undefined && (obj.counterpartyDenom = message.counterpartyDenom);
    message.minToken !== undefined && (obj.minToken = message.minToken ? Coin.toJSON(message.minToken) : undefined);
    message.exactLiquidity !== undefined && (obj.exactLiquidity = message.exactLiquidity);
    message.deadline !== undefined && (obj.deadline = Math.round(message.deadline));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveUnilateralLiquidity>, I>>(object: I): MsgRemoveUnilateralLiquidity {
    const message = createBaseMsgRemoveUnilateralLiquidity();
    message.counterpartyDenom = object.counterpartyDenom ?? "";
    message.minToken = (object.minToken !== undefined && object.minToken !== null)
      ? Coin.fromPartial(object.minToken)
      : undefined;
    message.exactLiquidity = object.exactLiquidity ?? "";
    message.deadline = object.deadline ?? 0;
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgRemoveUnilateralLiquidityResponse(): MsgRemoveUnilateralLiquidityResponse {
  return { withdrawCoins: [] };
}

export const MsgRemoveUnilateralLiquidityResponse = {
  encode(message: MsgRemoveUnilateralLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.withdrawCoins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveUnilateralLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveUnilateralLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveUnilateralLiquidityResponse {
    return {
      withdrawCoins: Array.isArray(object?.withdrawCoins) ? object.withdrawCoins.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgRemoveUnilateralLiquidityResponse): unknown {
    const obj: any = {};
    if (message.withdrawCoins) {
      obj.withdrawCoins = message.withdrawCoins.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.withdrawCoins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveUnilateralLiquidityResponse>, I>>(
    object: I,
  ): MsgRemoveUnilateralLiquidityResponse {
    const message = createBaseMsgRemoveUnilateralLiquidityResponse();
    message.withdrawCoins = object.withdrawCoins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgSwapOrder(): MsgSwapOrder {
  return { input: undefined, output: undefined, deadline: 0, isBuyOrder: false };
}

export const MsgSwapOrder = {
  encode(message: MsgSwapOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== undefined) {
      Input.encode(message.input, writer.uint32(10).fork()).ldelim();
    }
    if (message.output !== undefined) {
      Output.encode(message.output, writer.uint32(18).fork()).ldelim();
    }
    if (message.deadline !== 0) {
      writer.uint32(24).int64(message.deadline);
    }
    if (message.isBuyOrder === true) {
      writer.uint32(32).bool(message.isBuyOrder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.input = Input.decode(reader, reader.uint32());
          break;
        case 2:
          message.output = Output.decode(reader, reader.uint32());
          break;
        case 3:
          message.deadline = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.isBuyOrder = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSwapOrder {
    return {
      input: isSet(object.input) ? Input.fromJSON(object.input) : undefined,
      output: isSet(object.output) ? Output.fromJSON(object.output) : undefined,
      deadline: isSet(object.deadline) ? Number(object.deadline) : 0,
      isBuyOrder: isSet(object.isBuyOrder) ? Boolean(object.isBuyOrder) : false,
    };
  },

  toJSON(message: MsgSwapOrder): unknown {
    const obj: any = {};
    message.input !== undefined && (obj.input = message.input ? Input.toJSON(message.input) : undefined);
    message.output !== undefined && (obj.output = message.output ? Output.toJSON(message.output) : undefined);
    message.deadline !== undefined && (obj.deadline = Math.round(message.deadline));
    message.isBuyOrder !== undefined && (obj.isBuyOrder = message.isBuyOrder);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapOrder>, I>>(object: I): MsgSwapOrder {
    const message = createBaseMsgSwapOrder();
    message.input = (object.input !== undefined && object.input !== null) ? Input.fromPartial(object.input) : undefined;
    message.output = (object.output !== undefined && object.output !== null)
      ? Output.fromPartial(object.output)
      : undefined;
    message.deadline = object.deadline ?? 0;
    message.isBuyOrder = object.isBuyOrder ?? false;
    return message;
  },
};

function createBaseMsgSwapCoinResponse(): MsgSwapCoinResponse {
  return {};
}

export const MsgSwapCoinResponse = {
  encode(_: MsgSwapCoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapCoinResponse();
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

  fromJSON(_: any): MsgSwapCoinResponse {
    return {};
  },

  toJSON(_: MsgSwapCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapCoinResponse>, I>>(_: I): MsgSwapCoinResponse {
    const message = createBaseMsgSwapCoinResponse();
    return message;
  },
};

/** Msg defines the coinswap Msg service */
export interface Msg {
  /**
   * AddLiquidity defines a method for depositing some tokens to the liquidity
   * pool
   */
  AddLiquidity(request: MsgAddLiquidity): Promise<MsgAddLiquidityResponse>;
  /**
   * AddUnilateralLiquidity defines a method for depositing some tokens
   * unilaterally to the liquidity pool
   */
  AddUnilateralLiquidity(request: MsgAddUnilateralLiquidity): Promise<MsgAddUnilateralLiquidityResponse>;
  /**
   * RemoveLiquidity defines a method for withdraw some tokens from the
   * liquidity pool
   */
  RemoveLiquidity(request: MsgRemoveLiquidity): Promise<MsgRemoveLiquidityResponse>;
  /**
   * RemoveUnilateralLiquidity defines a method for withdraw some tokens
   * unilaterally from the liquidity pool
   */
  RemoveUnilateralLiquidity(request: MsgRemoveUnilateralLiquidity): Promise<MsgRemoveUnilateralLiquidityResponse>;
  /**
   * SwapCoin defines a method for swapping a token with the other token from
   * the liquidity pool
   */
  SwapCoin(request: MsgSwapOrder): Promise<MsgSwapCoinResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddLiquidity = this.AddLiquidity.bind(this);
    this.AddUnilateralLiquidity = this.AddUnilateralLiquidity.bind(this);
    this.RemoveLiquidity = this.RemoveLiquidity.bind(this);
    this.RemoveUnilateralLiquidity = this.RemoveUnilateralLiquidity.bind(this);
    this.SwapCoin = this.SwapCoin.bind(this);
  }
  AddLiquidity(request: MsgAddLiquidity): Promise<MsgAddLiquidityResponse> {
    const data = MsgAddLiquidity.encode(request).finish();
    const promise = this.rpc.request("irismod.coinswap.Msg", "AddLiquidity", data);
    return promise.then((data) => MsgAddLiquidityResponse.decode(new _m0.Reader(data)));
  }

  AddUnilateralLiquidity(request: MsgAddUnilateralLiquidity): Promise<MsgAddUnilateralLiquidityResponse> {
    const data = MsgAddUnilateralLiquidity.encode(request).finish();
    const promise = this.rpc.request("irismod.coinswap.Msg", "AddUnilateralLiquidity", data);
    return promise.then((data) => MsgAddUnilateralLiquidityResponse.decode(new _m0.Reader(data)));
  }

  RemoveLiquidity(request: MsgRemoveLiquidity): Promise<MsgRemoveLiquidityResponse> {
    const data = MsgRemoveLiquidity.encode(request).finish();
    const promise = this.rpc.request("irismod.coinswap.Msg", "RemoveLiquidity", data);
    return promise.then((data) => MsgRemoveLiquidityResponse.decode(new _m0.Reader(data)));
  }

  RemoveUnilateralLiquidity(request: MsgRemoveUnilateralLiquidity): Promise<MsgRemoveUnilateralLiquidityResponse> {
    const data = MsgRemoveUnilateralLiquidity.encode(request).finish();
    const promise = this.rpc.request("irismod.coinswap.Msg", "RemoveUnilateralLiquidity", data);
    return promise.then((data) => MsgRemoveUnilateralLiquidityResponse.decode(new _m0.Reader(data)));
  }

  SwapCoin(request: MsgSwapOrder): Promise<MsgSwapCoinResponse> {
    const data = MsgSwapOrder.encode(request).finish();
    const promise = this.rpc.request("irismod.coinswap.Msg", "SwapCoin", data);
    return promise.then((data) => MsgSwapCoinResponse.decode(new _m0.Reader(data)));
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
