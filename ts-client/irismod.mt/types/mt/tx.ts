/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "irismod.mt";

/** MsgIssueDenom defines an SDK message for creating a new denom. */
export interface MsgIssueDenom {
  name: string;
  data: Uint8Array;
  sender: string;
}

/** MsgIssueDenomResponse defines the Msg/IssueDenom response type. */
export interface MsgIssueDenomResponse {
}

/**
 * MsgTransferDenom defines an SDK message for transferring an denom to
 * recipient.
 */
export interface MsgTransferDenom {
  id: string;
  sender: string;
  recipient: string;
}

/** MsgTransferDenomResponse defines the Msg/TransferDenom response type. */
export interface MsgTransferDenomResponse {
}

/** MsgMintMT defines an SDK message for creating a new MT. */
export interface MsgMintMT {
  id: string;
  denomId: string;
  amount: number;
  data: Uint8Array;
  sender: string;
  recipient: string;
}

/** MsgMintMTResponse defines the Msg/MintMT response type. */
export interface MsgMintMTResponse {
}

/** MsgEditMT defines an SDK message for editing an MT. */
export interface MsgEditMT {
  id: string;
  denomId: string;
  data: Uint8Array;
  sender: string;
}

/** MsgEditMTResponse defines the Msg/EditMT response type. */
export interface MsgEditMTResponse {
}

/** MsgTransferMT defines an SDK message for transferring an MT to recipient. */
export interface MsgTransferMT {
  id: string;
  denomId: string;
  amount: number;
  sender: string;
  recipient: string;
}

/** MsgTransferMTResponse defines the Msg/TransferMT response type. */
export interface MsgTransferMTResponse {
}

/** MsgBurnMT defines an SDK message for burning an MT. */
export interface MsgBurnMT {
  id: string;
  denomId: string;
  amount: number;
  sender: string;
}

/** MsgBurnMTResponse defines the Msg/BurnMT response type. */
export interface MsgBurnMTResponse {
}

function createBaseMsgIssueDenom(): MsgIssueDenom {
  return { name: "", data: new Uint8Array(), sender: "" };
}

export const MsgIssueDenom = {
  encode(message: MsgIssueDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
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

  fromJSON(object: any): MsgIssueDenom {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgIssueDenom): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.data !== undefined
      && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueDenom>, I>>(object: I): MsgIssueDenom {
    const message = createBaseMsgIssueDenom();
    message.name = object.name ?? "";
    message.data = object.data ?? new Uint8Array();
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgIssueDenomResponse(): MsgIssueDenomResponse {
  return {};
}

export const MsgIssueDenomResponse = {
  encode(_: MsgIssueDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueDenomResponse();
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

  fromJSON(_: any): MsgIssueDenomResponse {
    return {};
  },

  toJSON(_: MsgIssueDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueDenomResponse>, I>>(_: I): MsgIssueDenomResponse {
    const message = createBaseMsgIssueDenomResponse();
    return message;
  },
};

function createBaseMsgTransferDenom(): MsgTransferDenom {
  return { id: "", sender: "", recipient: "" };
}

export const MsgTransferDenom = {
  encode(message: MsgTransferDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferDenom();
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
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferDenom {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: MsgTransferDenom): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferDenom>, I>>(object: I): MsgTransferDenom {
    const message = createBaseMsgTransferDenom();
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseMsgTransferDenomResponse(): MsgTransferDenomResponse {
  return {};
}

export const MsgTransferDenomResponse = {
  encode(_: MsgTransferDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferDenomResponse();
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

  fromJSON(_: any): MsgTransferDenomResponse {
    return {};
  },

  toJSON(_: MsgTransferDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferDenomResponse>, I>>(_: I): MsgTransferDenomResponse {
    const message = createBaseMsgTransferDenomResponse();
    return message;
  },
};

function createBaseMsgMintMT(): MsgMintMT {
  return { id: "", denomId: "", amount: 0, data: new Uint8Array(), sender: "", recipient: "" };
}

export const MsgMintMT = {
  encode(message: MsgMintMT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.amount !== 0) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    if (message.sender !== "") {
      writer.uint32(42).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(50).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintMT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintMT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        case 3:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.data = reader.bytes();
          break;
        case 5:
          message.sender = reader.string();
          break;
        case 6:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintMT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: MsgMintMT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.data !== undefined
      && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintMT>, I>>(object: I): MsgMintMT {
    const message = createBaseMsgMintMT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.amount = object.amount ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseMsgMintMTResponse(): MsgMintMTResponse {
  return {};
}

export const MsgMintMTResponse = {
  encode(_: MsgMintMTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintMTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintMTResponse();
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

  fromJSON(_: any): MsgMintMTResponse {
    return {};
  },

  toJSON(_: MsgMintMTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintMTResponse>, I>>(_: I): MsgMintMTResponse {
    const message = createBaseMsgMintMTResponse();
    return message;
  },
};

function createBaseMsgEditMT(): MsgEditMT {
  return { id: "", denomId: "", data: new Uint8Array(), sender: "" };
}

export const MsgEditMT = {
  encode(message: MsgEditMT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditMT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditMT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        case 4:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEditMT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgEditMT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.data !== undefined
      && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditMT>, I>>(object: I): MsgEditMT {
    const message = createBaseMsgEditMT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.data = object.data ?? new Uint8Array();
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgEditMTResponse(): MsgEditMTResponse {
  return {};
}

export const MsgEditMTResponse = {
  encode(_: MsgEditMTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditMTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditMTResponse();
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

  fromJSON(_: any): MsgEditMTResponse {
    return {};
  },

  toJSON(_: MsgEditMTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditMTResponse>, I>>(_: I): MsgEditMTResponse {
    const message = createBaseMsgEditMTResponse();
    return message;
  },
};

function createBaseMsgTransferMT(): MsgTransferMT {
  return { id: "", denomId: "", amount: 0, sender: "", recipient: "" };
}

export const MsgTransferMT = {
  encode(message: MsgTransferMT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.amount !== 0) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(42).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferMT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferMT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        case 3:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.sender = reader.string();
          break;
        case 5:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferMT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: MsgTransferMT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferMT>, I>>(object: I): MsgTransferMT {
    const message = createBaseMsgTransferMT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.amount = object.amount ?? 0;
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseMsgTransferMTResponse(): MsgTransferMTResponse {
  return {};
}

export const MsgTransferMTResponse = {
  encode(_: MsgTransferMTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferMTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferMTResponse();
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

  fromJSON(_: any): MsgTransferMTResponse {
    return {};
  },

  toJSON(_: MsgTransferMTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferMTResponse>, I>>(_: I): MsgTransferMTResponse {
    const message = createBaseMsgTransferMTResponse();
    return message;
  },
};

function createBaseMsgBurnMT(): MsgBurnMT {
  return { id: "", denomId: "", amount: 0, sender: "" };
}

export const MsgBurnMT = {
  encode(message: MsgBurnMT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.amount !== 0) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnMT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnMT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        case 3:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnMT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgBurnMT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnMT>, I>>(object: I): MsgBurnMT {
    const message = createBaseMsgBurnMT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.amount = object.amount ?? 0;
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgBurnMTResponse(): MsgBurnMTResponse {
  return {};
}

export const MsgBurnMTResponse = {
  encode(_: MsgBurnMTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnMTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnMTResponse();
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

  fromJSON(_: any): MsgBurnMTResponse {
    return {};
  },

  toJSON(_: MsgBurnMTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnMTResponse>, I>>(_: I): MsgBurnMTResponse {
    const message = createBaseMsgBurnMTResponse();
    return message;
  },
};

/** Msg defines the mt Msg service. */
export interface Msg {
  /** IssueDenom defines a method for issuing a denom. */
  IssueDenom(request: MsgIssueDenom): Promise<MsgIssueDenomResponse>;
  /** TransferDenom defines a method for transferring a denom. */
  TransferDenom(request: MsgTransferDenom): Promise<MsgTransferDenomResponse>;
  /**
   * MintMT defines a method for creating a new MT or minting amounts of an
   * existing MT
   */
  MintMT(request: MsgMintMT): Promise<MsgMintMTResponse>;
  /** EditMT defines a method for editing an MT. */
  EditMT(request: MsgEditMT): Promise<MsgEditMTResponse>;
  /** TransferMT defines a method for transferring an MT. */
  TransferMT(request: MsgTransferMT): Promise<MsgTransferMTResponse>;
  /** BurnMT defines a method for burning an MT. */
  BurnMT(request: MsgBurnMT): Promise<MsgBurnMTResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.IssueDenom = this.IssueDenom.bind(this);
    this.TransferDenom = this.TransferDenom.bind(this);
    this.MintMT = this.MintMT.bind(this);
    this.EditMT = this.EditMT.bind(this);
    this.TransferMT = this.TransferMT.bind(this);
    this.BurnMT = this.BurnMT.bind(this);
  }
  IssueDenom(request: MsgIssueDenom): Promise<MsgIssueDenomResponse> {
    const data = MsgIssueDenom.encode(request).finish();
    const promise = this.rpc.request("irismod.mt.Msg", "IssueDenom", data);
    return promise.then((data) => MsgIssueDenomResponse.decode(new _m0.Reader(data)));
  }

  TransferDenom(request: MsgTransferDenom): Promise<MsgTransferDenomResponse> {
    const data = MsgTransferDenom.encode(request).finish();
    const promise = this.rpc.request("irismod.mt.Msg", "TransferDenom", data);
    return promise.then((data) => MsgTransferDenomResponse.decode(new _m0.Reader(data)));
  }

  MintMT(request: MsgMintMT): Promise<MsgMintMTResponse> {
    const data = MsgMintMT.encode(request).finish();
    const promise = this.rpc.request("irismod.mt.Msg", "MintMT", data);
    return promise.then((data) => MsgMintMTResponse.decode(new _m0.Reader(data)));
  }

  EditMT(request: MsgEditMT): Promise<MsgEditMTResponse> {
    const data = MsgEditMT.encode(request).finish();
    const promise = this.rpc.request("irismod.mt.Msg", "EditMT", data);
    return promise.then((data) => MsgEditMTResponse.decode(new _m0.Reader(data)));
  }

  TransferMT(request: MsgTransferMT): Promise<MsgTransferMTResponse> {
    const data = MsgTransferMT.encode(request).finish();
    const promise = this.rpc.request("irismod.mt.Msg", "TransferMT", data);
    return promise.then((data) => MsgTransferMTResponse.decode(new _m0.Reader(data)));
  }

  BurnMT(request: MsgBurnMT): Promise<MsgBurnMTResponse> {
    const data = MsgBurnMT.encode(request).finish();
    const promise = this.rpc.request("irismod.mt.Msg", "BurnMT", data);
    return promise.then((data) => MsgBurnMTResponse.decode(new _m0.Reader(data)));
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
