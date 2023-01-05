/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "petrimod.token";

/** Token defines a standard for the fungible token */
export interface Token {
  symbol: string;
  name: string;
  scale: number;
  minUnit: string;
  initialSupply: number;
  maxSupply: number;
  mintable: boolean;
  owner: string;
}

/** Params defines token module's parameters */
export interface Params {
  tokenTaxRate: string;
  issueTokenBaseFee: Coin | undefined;
  mintTokenFeeRatio: string;
}

function createBaseToken(): Token {
  return { symbol: "", name: "", scale: 0, minUnit: "", initialSupply: 0, maxSupply: 0, mintable: false, owner: "" };
}

export const Token = {
  encode(message: Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.scale !== 0) {
      writer.uint32(24).uint32(message.scale);
    }
    if (message.minUnit !== "") {
      writer.uint32(34).string(message.minUnit);
    }
    if (message.initialSupply !== 0) {
      writer.uint32(40).uint64(message.initialSupply);
    }
    if (message.maxSupply !== 0) {
      writer.uint32(48).uint64(message.maxSupply);
    }
    if (message.mintable === true) {
      writer.uint32(56).bool(message.mintable);
    }
    if (message.owner !== "") {
      writer.uint32(66).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Token {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.scale = reader.uint32();
          break;
        case 4:
          message.minUnit = reader.string();
          break;
        case 5:
          message.initialSupply = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.maxSupply = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.mintable = reader.bool();
          break;
        case 8:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Token {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      name: isSet(object.name) ? String(object.name) : "",
      scale: isSet(object.scale) ? Number(object.scale) : 0,
      minUnit: isSet(object.minUnit) ? String(object.minUnit) : "",
      initialSupply: isSet(object.initialSupply) ? Number(object.initialSupply) : 0,
      maxSupply: isSet(object.maxSupply) ? Number(object.maxSupply) : 0,
      mintable: isSet(object.mintable) ? Boolean(object.mintable) : false,
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: Token): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.name !== undefined && (obj.name = message.name);
    message.scale !== undefined && (obj.scale = Math.round(message.scale));
    message.minUnit !== undefined && (obj.minUnit = message.minUnit);
    message.initialSupply !== undefined && (obj.initialSupply = Math.round(message.initialSupply));
    message.maxSupply !== undefined && (obj.maxSupply = Math.round(message.maxSupply));
    message.mintable !== undefined && (obj.mintable = message.mintable);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Token>, I>>(object: I): Token {
    const message = createBaseToken();
    message.symbol = object.symbol ?? "";
    message.name = object.name ?? "";
    message.scale = object.scale ?? 0;
    message.minUnit = object.minUnit ?? "";
    message.initialSupply = object.initialSupply ?? 0;
    message.maxSupply = object.maxSupply ?? 0;
    message.mintable = object.mintable ?? false;
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseParams(): Params {
  return { tokenTaxRate: "", issueTokenBaseFee: undefined, mintTokenFeeRatio: "" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenTaxRate !== "") {
      writer.uint32(10).string(message.tokenTaxRate);
    }
    if (message.issueTokenBaseFee !== undefined) {
      Coin.encode(message.issueTokenBaseFee, writer.uint32(18).fork()).ldelim();
    }
    if (message.mintTokenFeeRatio !== "") {
      writer.uint32(26).string(message.mintTokenFeeRatio);
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
          message.tokenTaxRate = reader.string();
          break;
        case 2:
          message.issueTokenBaseFee = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.mintTokenFeeRatio = reader.string();
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
      tokenTaxRate: isSet(object.tokenTaxRate) ? String(object.tokenTaxRate) : "",
      issueTokenBaseFee: isSet(object.issueTokenBaseFee) ? Coin.fromJSON(object.issueTokenBaseFee) : undefined,
      mintTokenFeeRatio: isSet(object.mintTokenFeeRatio) ? String(object.mintTokenFeeRatio) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.tokenTaxRate !== undefined && (obj.tokenTaxRate = message.tokenTaxRate);
    message.issueTokenBaseFee !== undefined
      && (obj.issueTokenBaseFee = message.issueTokenBaseFee ? Coin.toJSON(message.issueTokenBaseFee) : undefined);
    message.mintTokenFeeRatio !== undefined && (obj.mintTokenFeeRatio = message.mintTokenFeeRatio);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.tokenTaxRate = object.tokenTaxRate ?? "";
    message.issueTokenBaseFee = (object.issueTokenBaseFee !== undefined && object.issueTokenBaseFee !== null)
      ? Coin.fromPartial(object.issueTokenBaseFee)
      : undefined;
    message.mintTokenFeeRatio = object.mintTokenFeeRatio ?? "";
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
