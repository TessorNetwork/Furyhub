/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "irismod.coinswap";

/** Input defines the properties of order's input */
export interface Input {
  address: string;
  coin: Coin | undefined;
}

/** Output defines the properties of order's output */
export interface Output {
  address: string;
  coin: Coin | undefined;
}

export interface Pool {
  id: string;
  /** denom of base coin of the pool */
  standardDenom: string;
  /** denom of counterparty coin of the pool */
  counterpartyDenom: string;
  /** escrow account for deposit tokens */
  escrowAddress: string;
  /** denom of the liquidity pool coin */
  lptDenom: string;
}

/** Params defines token module's parameters */
export interface Params {
  fee: Coin | undefined;
  poolCreationFee: Coin | undefined;
  taxRate: string;
  unilateralLiquidityFee: string;
}

function createBaseInput(): Input {
  return { address: "", coin: undefined };
}

export const Input = {
  encode(message: Input, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Input {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Input {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: Input): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Input>, I>>(object: I): Input {
    const message = createBaseInput();
    message.address = object.address ?? "";
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
};

function createBaseOutput(): Output {
  return { address: "", coin: undefined };
}

export const Output = {
  encode(message: Output, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Output {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Output {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: Output): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Output>, I>>(object: I): Output {
    const message = createBaseOutput();
    message.address = object.address ?? "";
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
};

function createBasePool(): Pool {
  return { id: "", standardDenom: "", counterpartyDenom: "", escrowAddress: "", lptDenom: "" };
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.standardDenom !== "") {
      writer.uint32(18).string(message.standardDenom);
    }
    if (message.counterpartyDenom !== "") {
      writer.uint32(26).string(message.counterpartyDenom);
    }
    if (message.escrowAddress !== "") {
      writer.uint32(34).string(message.escrowAddress);
    }
    if (message.lptDenom !== "") {
      writer.uint32(42).string(message.lptDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.standardDenom = reader.string();
          break;
        case 3:
          message.counterpartyDenom = reader.string();
          break;
        case 4:
          message.escrowAddress = reader.string();
          break;
        case 5:
          message.lptDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pool {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      standardDenom: isSet(object.standardDenom) ? String(object.standardDenom) : "",
      counterpartyDenom: isSet(object.counterpartyDenom) ? String(object.counterpartyDenom) : "",
      escrowAddress: isSet(object.escrowAddress) ? String(object.escrowAddress) : "",
      lptDenom: isSet(object.lptDenom) ? String(object.lptDenom) : "",
    };
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.standardDenom !== undefined && (obj.standardDenom = message.standardDenom);
    message.counterpartyDenom !== undefined && (obj.counterpartyDenom = message.counterpartyDenom);
    message.escrowAddress !== undefined && (obj.escrowAddress = message.escrowAddress);
    message.lptDenom !== undefined && (obj.lptDenom = message.lptDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = createBasePool();
    message.id = object.id ?? "";
    message.standardDenom = object.standardDenom ?? "";
    message.counterpartyDenom = object.counterpartyDenom ?? "";
    message.escrowAddress = object.escrowAddress ?? "";
    message.lptDenom = object.lptDenom ?? "";
    return message;
  },
};

function createBaseParams(): Params {
  return { fee: undefined, poolCreationFee: undefined, taxRate: "", unilateralLiquidityFee: "" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    if (message.poolCreationFee !== undefined) {
      Coin.encode(message.poolCreationFee, writer.uint32(18).fork()).ldelim();
    }
    if (message.taxRate !== "") {
      writer.uint32(26).string(message.taxRate);
    }
    if (message.unilateralLiquidityFee !== "") {
      writer.uint32(34).string(message.unilateralLiquidityFee);
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
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.poolCreationFee = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.taxRate = reader.string();
          break;
        case 4:
          message.unilateralLiquidityFee = reader.string();
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
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
      poolCreationFee: isSet(object.poolCreationFee) ? Coin.fromJSON(object.poolCreationFee) : undefined,
      taxRate: isSet(object.taxRate) ? String(object.taxRate) : "",
      unilateralLiquidityFee: isSet(object.unilateralLiquidityFee) ? String(object.unilateralLiquidityFee) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    message.poolCreationFee !== undefined
      && (obj.poolCreationFee = message.poolCreationFee ? Coin.toJSON(message.poolCreationFee) : undefined);
    message.taxRate !== undefined && (obj.taxRate = message.taxRate);
    message.unilateralLiquidityFee !== undefined && (obj.unilateralLiquidityFee = message.unilateralLiquidityFee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.fee = (object.fee !== undefined && object.fee !== null) ? Coin.fromPartial(object.fee) : undefined;
    message.poolCreationFee = (object.poolCreationFee !== undefined && object.poolCreationFee !== null)
      ? Coin.fromPartial(object.poolCreationFee)
      : undefined;
    message.taxRate = object.taxRate ?? "";
    message.unilateralLiquidityFee = object.unilateralLiquidityFee ?? "";
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
