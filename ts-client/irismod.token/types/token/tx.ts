/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "irismod.token";

/** MsgIssueToken defines an SDK message for issuing a new token */
export interface MsgIssueToken {
  symbol: string;
  name: string;
  scale: number;
  minUnit: string;
  initialSupply: number;
  maxSupply: number;
  mintable: boolean;
  owner: string;
}

/** MsgIssueTokenResponse defines the Msg/IssueToken response type */
export interface MsgIssueTokenResponse {
}

/** MsgTransferTokenOwner defines an SDK message for transferring the token owner */
export interface MsgTransferTokenOwner {
  srcOwner: string;
  dstOwner: string;
  symbol: string;
}

/**
 * MsgTransferTokenOwnerResponse defines the Msg/TransferTokenOwner response
 * type
 */
export interface MsgTransferTokenOwnerResponse {
}

/** MsgEditToken defines an SDK message for editing a new token */
export interface MsgEditToken {
  symbol: string;
  name: string;
  maxSupply: number;
  mintable: string;
  owner: string;
}

/** MsgEditTokenResponse defines the Msg/EditToken response type */
export interface MsgEditTokenResponse {
}

/** MsgMintToken defines an SDK message for minting a new token */
export interface MsgMintToken {
  symbol: string;
  amount: number;
  to: string;
  owner: string;
}

/** MsgMintTokenResponse defines the Msg/MintToken response type */
export interface MsgMintTokenResponse {
}

/** MsgBurnToken defines an SDK message for burning some tokens */
export interface MsgBurnToken {
  symbol: string;
  amount: number;
  sender: string;
}

/** MsgBurnTokenResponse defines the Msg/BurnToken response type */
export interface MsgBurnTokenResponse {
}

function createBaseMsgIssueToken(): MsgIssueToken {
  return { symbol: "", name: "", scale: 0, minUnit: "", initialSupply: 0, maxSupply: 0, mintable: false, owner: "" };
}

export const MsgIssueToken = {
  encode(message: MsgIssueToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueToken();
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

  fromJSON(object: any): MsgIssueToken {
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

  toJSON(message: MsgIssueToken): unknown {
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

  fromPartial<I extends Exact<DeepPartial<MsgIssueToken>, I>>(object: I): MsgIssueToken {
    const message = createBaseMsgIssueToken();
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

function createBaseMsgIssueTokenResponse(): MsgIssueTokenResponse {
  return {};
}

export const MsgIssueTokenResponse = {
  encode(_: MsgIssueTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueTokenResponse();
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

  fromJSON(_: any): MsgIssueTokenResponse {
    return {};
  },

  toJSON(_: MsgIssueTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueTokenResponse>, I>>(_: I): MsgIssueTokenResponse {
    const message = createBaseMsgIssueTokenResponse();
    return message;
  },
};

function createBaseMsgTransferTokenOwner(): MsgTransferTokenOwner {
  return { srcOwner: "", dstOwner: "", symbol: "" };
}

export const MsgTransferTokenOwner = {
  encode(message: MsgTransferTokenOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.srcOwner !== "") {
      writer.uint32(10).string(message.srcOwner);
    }
    if (message.dstOwner !== "") {
      writer.uint32(18).string(message.dstOwner);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferTokenOwner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTokenOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.srcOwner = reader.string();
          break;
        case 2:
          message.dstOwner = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferTokenOwner {
    return {
      srcOwner: isSet(object.srcOwner) ? String(object.srcOwner) : "",
      dstOwner: isSet(object.dstOwner) ? String(object.dstOwner) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
    };
  },

  toJSON(message: MsgTransferTokenOwner): unknown {
    const obj: any = {};
    message.srcOwner !== undefined && (obj.srcOwner = message.srcOwner);
    message.dstOwner !== undefined && (obj.dstOwner = message.dstOwner);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferTokenOwner>, I>>(object: I): MsgTransferTokenOwner {
    const message = createBaseMsgTransferTokenOwner();
    message.srcOwner = object.srcOwner ?? "";
    message.dstOwner = object.dstOwner ?? "";
    message.symbol = object.symbol ?? "";
    return message;
  },
};

function createBaseMsgTransferTokenOwnerResponse(): MsgTransferTokenOwnerResponse {
  return {};
}

export const MsgTransferTokenOwnerResponse = {
  encode(_: MsgTransferTokenOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferTokenOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTokenOwnerResponse();
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

  fromJSON(_: any): MsgTransferTokenOwnerResponse {
    return {};
  },

  toJSON(_: MsgTransferTokenOwnerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferTokenOwnerResponse>, I>>(_: I): MsgTransferTokenOwnerResponse {
    const message = createBaseMsgTransferTokenOwnerResponse();
    return message;
  },
};

function createBaseMsgEditToken(): MsgEditToken {
  return { symbol: "", name: "", maxSupply: 0, mintable: "", owner: "" };
}

export const MsgEditToken = {
  encode(message: MsgEditToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.maxSupply !== 0) {
      writer.uint32(24).uint64(message.maxSupply);
    }
    if (message.mintable !== "") {
      writer.uint32(34).string(message.mintable);
    }
    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditToken();
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
          message.maxSupply = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.mintable = reader.string();
          break;
        case 5:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEditToken {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      name: isSet(object.name) ? String(object.name) : "",
      maxSupply: isSet(object.maxSupply) ? Number(object.maxSupply) : 0,
      mintable: isSet(object.mintable) ? String(object.mintable) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: MsgEditToken): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.name !== undefined && (obj.name = message.name);
    message.maxSupply !== undefined && (obj.maxSupply = Math.round(message.maxSupply));
    message.mintable !== undefined && (obj.mintable = message.mintable);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditToken>, I>>(object: I): MsgEditToken {
    const message = createBaseMsgEditToken();
    message.symbol = object.symbol ?? "";
    message.name = object.name ?? "";
    message.maxSupply = object.maxSupply ?? 0;
    message.mintable = object.mintable ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseMsgEditTokenResponse(): MsgEditTokenResponse {
  return {};
}

export const MsgEditTokenResponse = {
  encode(_: MsgEditTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditTokenResponse();
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

  fromJSON(_: any): MsgEditTokenResponse {
    return {};
  },

  toJSON(_: MsgEditTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditTokenResponse>, I>>(_: I): MsgEditTokenResponse {
    const message = createBaseMsgEditTokenResponse();
    return message;
  },
};

function createBaseMsgMintToken(): MsgMintToken {
  return { symbol: "", amount: 0, to: "", owner: "" };
}

export const MsgMintToken = {
  encode(message: MsgMintToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.amount !== 0) {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;
        case 2:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintToken {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      to: isSet(object.to) ? String(object.to) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: MsgMintToken): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.to !== undefined && (obj.to = message.to);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintToken>, I>>(object: I): MsgMintToken {
    const message = createBaseMsgMintToken();
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? 0;
    message.to = object.to ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseMsgMintTokenResponse(): MsgMintTokenResponse {
  return {};
}

export const MsgMintTokenResponse = {
  encode(_: MsgMintTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintTokenResponse();
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

  fromJSON(_: any): MsgMintTokenResponse {
    return {};
  },

  toJSON(_: MsgMintTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintTokenResponse>, I>>(_: I): MsgMintTokenResponse {
    const message = createBaseMsgMintTokenResponse();
    return message;
  },
};

function createBaseMsgBurnToken(): MsgBurnToken {
  return { symbol: "", amount: 0, sender: "" };
}

export const MsgBurnToken = {
  encode(message: MsgBurnToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.amount !== 0) {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;
        case 2:
          message.amount = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgBurnToken {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgBurnToken): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnToken>, I>>(object: I): MsgBurnToken {
    const message = createBaseMsgBurnToken();
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? 0;
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgBurnTokenResponse(): MsgBurnTokenResponse {
  return {};
}

export const MsgBurnTokenResponse = {
  encode(_: MsgBurnTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnTokenResponse();
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

  fromJSON(_: any): MsgBurnTokenResponse {
    return {};
  },

  toJSON(_: MsgBurnTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnTokenResponse>, I>>(_: I): MsgBurnTokenResponse {
    const message = createBaseMsgBurnTokenResponse();
    return message;
  },
};

/** Msg defines the oracle Msg service */
export interface Msg {
  /** IssueToken defines a method for issuing a new token */
  IssueToken(request: MsgIssueToken): Promise<MsgIssueTokenResponse>;
  /** EditToken defines a method for editing a token */
  EditToken(request: MsgEditToken): Promise<MsgEditTokenResponse>;
  /** MintToken defines a method for minting some tokens */
  MintToken(request: MsgMintToken): Promise<MsgMintTokenResponse>;
  /** BurnToken defines a method for burning some tokens */
  BurnToken(request: MsgBurnToken): Promise<MsgBurnTokenResponse>;
  /** TransferTokenOwner defines a method for minting some tokens */
  TransferTokenOwner(request: MsgTransferTokenOwner): Promise<MsgTransferTokenOwnerResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.IssueToken = this.IssueToken.bind(this);
    this.EditToken = this.EditToken.bind(this);
    this.MintToken = this.MintToken.bind(this);
    this.BurnToken = this.BurnToken.bind(this);
    this.TransferTokenOwner = this.TransferTokenOwner.bind(this);
  }
  IssueToken(request: MsgIssueToken): Promise<MsgIssueTokenResponse> {
    const data = MsgIssueToken.encode(request).finish();
    const promise = this.rpc.request("irismod.token.Msg", "IssueToken", data);
    return promise.then((data) => MsgIssueTokenResponse.decode(new _m0.Reader(data)));
  }

  EditToken(request: MsgEditToken): Promise<MsgEditTokenResponse> {
    const data = MsgEditToken.encode(request).finish();
    const promise = this.rpc.request("irismod.token.Msg", "EditToken", data);
    return promise.then((data) => MsgEditTokenResponse.decode(new _m0.Reader(data)));
  }

  MintToken(request: MsgMintToken): Promise<MsgMintTokenResponse> {
    const data = MsgMintToken.encode(request).finish();
    const promise = this.rpc.request("irismod.token.Msg", "MintToken", data);
    return promise.then((data) => MsgMintTokenResponse.decode(new _m0.Reader(data)));
  }

  BurnToken(request: MsgBurnToken): Promise<MsgBurnTokenResponse> {
    const data = MsgBurnToken.encode(request).finish();
    const promise = this.rpc.request("irismod.token.Msg", "BurnToken", data);
    return promise.then((data) => MsgBurnTokenResponse.decode(new _m0.Reader(data)));
  }

  TransferTokenOwner(request: MsgTransferTokenOwner): Promise<MsgTransferTokenOwnerResponse> {
    const data = MsgTransferTokenOwner.encode(request).finish();
    const promise = this.rpc.request("irismod.token.Msg", "TransferTokenOwner", data);
    return promise.then((data) => MsgTransferTokenOwnerResponse.decode(new _m0.Reader(data)));
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
