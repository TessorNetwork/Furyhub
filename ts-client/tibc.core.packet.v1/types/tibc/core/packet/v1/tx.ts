/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Height } from "../../client/v1/client";
import { CleanPacket, Packet } from "./packet";

export const protobufPackage = "tibc.core.packet.v1";

/** MsgRecvPacket receives incoming TIBC packet */
export interface MsgRecvPacket {
  packet: Packet | undefined;
  proofCommitment: Uint8Array;
  proofHeight: Height | undefined;
  signer: string;
}

/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponse {
}

/** MsgAcknowledgement receives incoming TIBC acknowledgement */
export interface MsgAcknowledgement {
  packet: Packet | undefined;
  acknowledgement: Uint8Array;
  proofAcked: Uint8Array;
  proofHeight: Height | undefined;
  signer: string;
}

/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponse {
}

/** MsgRecvPacket receives incoming TIBC packet */
export interface MsgCleanPacket {
  cleanPacket: CleanPacket | undefined;
  signer: string;
}

/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgCleanPacketResponse {
}

/** MsgRecvPacket receives incoming TIBC packet */
export interface MsgRecvCleanPacket {
  cleanPacket: CleanPacket | undefined;
  proofCommitment: Uint8Array;
  proofHeight: Height | undefined;
  signer: string;
}

/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvCleanPacketResponse {
}

function createBaseMsgRecvPacket(): MsgRecvPacket {
  return { packet: undefined, proofCommitment: new Uint8Array(), proofHeight: undefined, signer: "" };
}

export const MsgRecvPacket = {
  encode(message: MsgRecvPacket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofCommitment.length !== 0) {
      writer.uint32(18).bytes(message.proofCommitment);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofCommitment = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRecvPacket {
    return {
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
      proofCommitment: isSet(object.proofCommitment) ? bytesFromBase64(object.proofCommitment) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgRecvPacket): unknown {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofCommitment !== undefined
      && (obj.proofCommitment = base64FromBytes(
        message.proofCommitment !== undefined ? message.proofCommitment : new Uint8Array(),
      ));
    message.proofHeight !== undefined
      && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecvPacket>, I>>(object: I): MsgRecvPacket {
    const message = createBaseMsgRecvPacket();
    message.packet = (object.packet !== undefined && object.packet !== null)
      ? Packet.fromPartial(object.packet)
      : undefined;
    message.proofCommitment = object.proofCommitment ?? new Uint8Array();
    message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
      ? Height.fromPartial(object.proofHeight)
      : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgRecvPacketResponse(): MsgRecvPacketResponse {
  return {};
}

export const MsgRecvPacketResponse = {
  encode(_: MsgRecvPacketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacketResponse();
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

  fromJSON(_: any): MsgRecvPacketResponse {
    return {};
  },

  toJSON(_: MsgRecvPacketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecvPacketResponse>, I>>(_: I): MsgRecvPacketResponse {
    const message = createBaseMsgRecvPacketResponse();
    return message;
  },
};

function createBaseMsgAcknowledgement(): MsgAcknowledgement {
  return {
    packet: undefined,
    acknowledgement: new Uint8Array(),
    proofAcked: new Uint8Array(),
    proofHeight: undefined,
    signer: "",
  };
}

export const MsgAcknowledgement = {
  encode(message: MsgAcknowledgement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    if (message.proofAcked.length !== 0) {
      writer.uint32(26).bytes(message.proofAcked);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.acknowledgement = reader.bytes();
          break;
        case 3:
          message.proofAcked = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAcknowledgement {
    return {
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
      acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array(),
      proofAcked: isSet(object.proofAcked) ? bytesFromBase64(object.proofAcked) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgAcknowledgement): unknown {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.acknowledgement !== undefined
      && (obj.acknowledgement = base64FromBytes(
        message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array(),
      ));
    message.proofAcked !== undefined
      && (obj.proofAcked = base64FromBytes(message.proofAcked !== undefined ? message.proofAcked : new Uint8Array()));
    message.proofHeight !== undefined
      && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAcknowledgement>, I>>(object: I): MsgAcknowledgement {
    const message = createBaseMsgAcknowledgement();
    message.packet = (object.packet !== undefined && object.packet !== null)
      ? Packet.fromPartial(object.packet)
      : undefined;
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    message.proofAcked = object.proofAcked ?? new Uint8Array();
    message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
      ? Height.fromPartial(object.proofHeight)
      : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgAcknowledgementResponse(): MsgAcknowledgementResponse {
  return {};
}

export const MsgAcknowledgementResponse = {
  encode(_: MsgAcknowledgementResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgementResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgementResponse();
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

  fromJSON(_: any): MsgAcknowledgementResponse {
    return {};
  },

  toJSON(_: MsgAcknowledgementResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAcknowledgementResponse>, I>>(_: I): MsgAcknowledgementResponse {
    const message = createBaseMsgAcknowledgementResponse();
    return message;
  },
};

function createBaseMsgCleanPacket(): MsgCleanPacket {
  return { cleanPacket: undefined, signer: "" };
}

export const MsgCleanPacket = {
  encode(message: MsgCleanPacket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cleanPacket !== undefined) {
      CleanPacket.encode(message.cleanPacket, writer.uint32(10).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCleanPacket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCleanPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cleanPacket = CleanPacket.decode(reader, reader.uint32());
          break;
        case 2:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCleanPacket {
    return {
      cleanPacket: isSet(object.cleanPacket) ? CleanPacket.fromJSON(object.cleanPacket) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgCleanPacket): unknown {
    const obj: any = {};
    message.cleanPacket !== undefined
      && (obj.cleanPacket = message.cleanPacket ? CleanPacket.toJSON(message.cleanPacket) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCleanPacket>, I>>(object: I): MsgCleanPacket {
    const message = createBaseMsgCleanPacket();
    message.cleanPacket = (object.cleanPacket !== undefined && object.cleanPacket !== null)
      ? CleanPacket.fromPartial(object.cleanPacket)
      : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgCleanPacketResponse(): MsgCleanPacketResponse {
  return {};
}

export const MsgCleanPacketResponse = {
  encode(_: MsgCleanPacketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCleanPacketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCleanPacketResponse();
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

  fromJSON(_: any): MsgCleanPacketResponse {
    return {};
  },

  toJSON(_: MsgCleanPacketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCleanPacketResponse>, I>>(_: I): MsgCleanPacketResponse {
    const message = createBaseMsgCleanPacketResponse();
    return message;
  },
};

function createBaseMsgRecvCleanPacket(): MsgRecvCleanPacket {
  return { cleanPacket: undefined, proofCommitment: new Uint8Array(), proofHeight: undefined, signer: "" };
}

export const MsgRecvCleanPacket = {
  encode(message: MsgRecvCleanPacket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cleanPacket !== undefined) {
      CleanPacket.encode(message.cleanPacket, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofCommitment.length !== 0) {
      writer.uint32(18).bytes(message.proofCommitment);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvCleanPacket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvCleanPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cleanPacket = CleanPacket.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofCommitment = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRecvCleanPacket {
    return {
      cleanPacket: isSet(object.cleanPacket) ? CleanPacket.fromJSON(object.cleanPacket) : undefined,
      proofCommitment: isSet(object.proofCommitment) ? bytesFromBase64(object.proofCommitment) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgRecvCleanPacket): unknown {
    const obj: any = {};
    message.cleanPacket !== undefined
      && (obj.cleanPacket = message.cleanPacket ? CleanPacket.toJSON(message.cleanPacket) : undefined);
    message.proofCommitment !== undefined
      && (obj.proofCommitment = base64FromBytes(
        message.proofCommitment !== undefined ? message.proofCommitment : new Uint8Array(),
      ));
    message.proofHeight !== undefined
      && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecvCleanPacket>, I>>(object: I): MsgRecvCleanPacket {
    const message = createBaseMsgRecvCleanPacket();
    message.cleanPacket = (object.cleanPacket !== undefined && object.cleanPacket !== null)
      ? CleanPacket.fromPartial(object.cleanPacket)
      : undefined;
    message.proofCommitment = object.proofCommitment ?? new Uint8Array();
    message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
      ? Height.fromPartial(object.proofHeight)
      : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgRecvCleanPacketResponse(): MsgRecvCleanPacketResponse {
  return {};
}

export const MsgRecvCleanPacketResponse = {
  encode(_: MsgRecvCleanPacketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvCleanPacketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvCleanPacketResponse();
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

  fromJSON(_: any): MsgRecvCleanPacketResponse {
    return {};
  },

  toJSON(_: MsgRecvCleanPacketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecvCleanPacketResponse>, I>>(_: I): MsgRecvCleanPacketResponse {
    const message = createBaseMsgRecvCleanPacketResponse();
    return message;
  },
};

/** Msg defines the tibc/packet Msg service. */
export interface Msg {
  /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
  RecvPacket(request: MsgRecvPacket): Promise<MsgRecvPacketResponse>;
  /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
  Acknowledgement(request: MsgAcknowledgement): Promise<MsgAcknowledgementResponse>;
  /** CleanPacket defines a rpc handler method for MsgCleanPacket. */
  CleanPacket(request: MsgCleanPacket): Promise<MsgCleanPacketResponse>;
  /** RecvCleanPacket defines a rpc handler method for MsgRecvCleanPacket. */
  RecvCleanPacket(request: MsgRecvCleanPacket): Promise<MsgRecvCleanPacketResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RecvPacket = this.RecvPacket.bind(this);
    this.Acknowledgement = this.Acknowledgement.bind(this);
    this.CleanPacket = this.CleanPacket.bind(this);
    this.RecvCleanPacket = this.RecvCleanPacket.bind(this);
  }
  RecvPacket(request: MsgRecvPacket): Promise<MsgRecvPacketResponse> {
    const data = MsgRecvPacket.encode(request).finish();
    const promise = this.rpc.request("tibc.core.packet.v1.Msg", "RecvPacket", data);
    return promise.then((data) => MsgRecvPacketResponse.decode(new _m0.Reader(data)));
  }

  Acknowledgement(request: MsgAcknowledgement): Promise<MsgAcknowledgementResponse> {
    const data = MsgAcknowledgement.encode(request).finish();
    const promise = this.rpc.request("tibc.core.packet.v1.Msg", "Acknowledgement", data);
    return promise.then((data) => MsgAcknowledgementResponse.decode(new _m0.Reader(data)));
  }

  CleanPacket(request: MsgCleanPacket): Promise<MsgCleanPacketResponse> {
    const data = MsgCleanPacket.encode(request).finish();
    const promise = this.rpc.request("tibc.core.packet.v1.Msg", "CleanPacket", data);
    return promise.then((data) => MsgCleanPacketResponse.decode(new _m0.Reader(data)));
  }

  RecvCleanPacket(request: MsgRecvCleanPacket): Promise<MsgRecvCleanPacketResponse> {
    const data = MsgRecvCleanPacket.encode(request).finish();
    const promise = this.rpc.request("tibc.core.packet.v1.Msg", "RecvCleanPacket", data);
    return promise.then((data) => MsgRecvCleanPacketResponse.decode(new _m0.Reader(data)));
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
