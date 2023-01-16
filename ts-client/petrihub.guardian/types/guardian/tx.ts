/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "petrihub.guardian";

/** MsgAddSuper defines the properties of add super account message */
export interface MsgAddSuper {
  description: string;
  address: string;
  addedBy: string;
}

/** MsgAddSuperResponse defines the Msg/AddSuper response type */
export interface MsgAddSuperResponse {
}

/** MsgDeleteSuper defines the properties of delete super account message */
export interface MsgDeleteSuper {
  address: string;
  deletedBy: string;
}

/** MsgDeleteSuperResponse defines the Msg/DeleteSuper response type */
export interface MsgDeleteSuperResponse {
}

function createBaseMsgAddSuper(): MsgAddSuper {
  return { description: "", address: "", addedBy: "" };
}

export const MsgAddSuper = {
  encode(message: MsgAddSuper, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.addedBy !== "") {
      writer.uint32(26).string(message.addedBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddSuper {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddSuper();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.addedBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddSuper {
    return {
      description: isSet(object.description) ? String(object.description) : "",
      address: isSet(object.address) ? String(object.address) : "",
      addedBy: isSet(object.addedBy) ? String(object.addedBy) : "",
    };
  },

  toJSON(message: MsgAddSuper): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description);
    message.address !== undefined && (obj.address = message.address);
    message.addedBy !== undefined && (obj.addedBy = message.addedBy);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddSuper>, I>>(object: I): MsgAddSuper {
    const message = createBaseMsgAddSuper();
    message.description = object.description ?? "";
    message.address = object.address ?? "";
    message.addedBy = object.addedBy ?? "";
    return message;
  },
};

function createBaseMsgAddSuperResponse(): MsgAddSuperResponse {
  return {};
}

export const MsgAddSuperResponse = {
  encode(_: MsgAddSuperResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddSuperResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddSuperResponse();
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

  fromJSON(_: any): MsgAddSuperResponse {
    return {};
  },

  toJSON(_: MsgAddSuperResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddSuperResponse>, I>>(_: I): MsgAddSuperResponse {
    const message = createBaseMsgAddSuperResponse();
    return message;
  },
};

function createBaseMsgDeleteSuper(): MsgDeleteSuper {
  return { address: "", deletedBy: "" };
}

export const MsgDeleteSuper = {
  encode(message: MsgDeleteSuper, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.deletedBy !== "") {
      writer.uint32(26).string(message.deletedBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSuper {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteSuper();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.deletedBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteSuper {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      deletedBy: isSet(object.deletedBy) ? String(object.deletedBy) : "",
    };
  },

  toJSON(message: MsgDeleteSuper): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.deletedBy !== undefined && (obj.deletedBy = message.deletedBy);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteSuper>, I>>(object: I): MsgDeleteSuper {
    const message = createBaseMsgDeleteSuper();
    message.address = object.address ?? "";
    message.deletedBy = object.deletedBy ?? "";
    return message;
  },
};

function createBaseMsgDeleteSuperResponse(): MsgDeleteSuperResponse {
  return {};
}

export const MsgDeleteSuperResponse = {
  encode(_: MsgDeleteSuperResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSuperResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteSuperResponse();
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

  fromJSON(_: any): MsgDeleteSuperResponse {
    return {};
  },

  toJSON(_: MsgDeleteSuperResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteSuperResponse>, I>>(_: I): MsgDeleteSuperResponse {
    const message = createBaseMsgDeleteSuperResponse();
    return message;
  },
};

/** Msg defines the guardian Msg service */
export interface Msg {
  /** AddSuper defines a method for adding a super account */
  AddSuper(request: MsgAddSuper): Promise<MsgAddSuperResponse>;
  /** DeleteSuper defines a method for deleting a super account */
  DeleteSuper(request: MsgDeleteSuper): Promise<MsgDeleteSuperResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddSuper = this.AddSuper.bind(this);
    this.DeleteSuper = this.DeleteSuper.bind(this);
  }
  AddSuper(request: MsgAddSuper): Promise<MsgAddSuperResponse> {
    const data = MsgAddSuper.encode(request).finish();
    const promise = this.rpc.request("petrihub.guardian.Msg", "AddSuper", data);
    return promise.then((data) => MsgAddSuperResponse.decode(new _m0.Reader(data)));
  }

  DeleteSuper(request: MsgDeleteSuper): Promise<MsgDeleteSuperResponse> {
    const data = MsgDeleteSuper.encode(request).finish();
    const promise = this.rpc.request("petrihub.guardian.Msg", "DeleteSuper", data);
    return promise.then((data) => MsgDeleteSuperResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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
