/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Content } from "./record";

export const protobufPackage = "irismod.record";

/** MsgCreateRecord defines an SDK message for creating a new record */
export interface MsgCreateRecord {
  contents: Content[];
  creator: string;
}

/** MsgCreateRecordResponse defines the Msg/CreateRecord response type */
export interface MsgCreateRecordResponse {
  id: string;
}

function createBaseMsgCreateRecord(): MsgCreateRecord {
  return { contents: [], creator: "" };
}

export const MsgCreateRecord = {
  encode(message: MsgCreateRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contents) {
      Content.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contents.push(Content.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MsgCreateRecord {
    return {
      contents: Array.isArray(object?.contents) ? object.contents.map((e: any) => Content.fromJSON(e)) : [],
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: MsgCreateRecord): unknown {
    const obj: any = {};
    if (message.contents) {
      obj.contents = message.contents.map((e) => e ? Content.toJSON(e) : undefined);
    } else {
      obj.contents = [];
    }
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateRecord>, I>>(object: I): MsgCreateRecord {
    const message = createBaseMsgCreateRecord();
    message.contents = object.contents?.map((e) => Content.fromPartial(e)) || [];
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgCreateRecordResponse(): MsgCreateRecordResponse {
  return { id: "" };
}

export const MsgCreateRecordResponse = {
  encode(message: MsgCreateRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRecordResponse {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: MsgCreateRecordResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateRecordResponse>, I>>(object: I): MsgCreateRecordResponse {
    const message = createBaseMsgCreateRecordResponse();
    message.id = object.id ?? "";
    return message;
  },
};

/** Msg defines the oracle Msg service */
export interface Msg {
  /** CreateRecord defines a method for creating a new record */
  CreateRecord(request: MsgCreateRecord): Promise<MsgCreateRecordResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateRecord = this.CreateRecord.bind(this);
  }
  CreateRecord(request: MsgCreateRecord): Promise<MsgCreateRecordResponse> {
    const data = MsgCreateRecord.encode(request).finish();
    const promise = this.rpc.request("irismod.record.Msg", "CreateRecord", data);
    return promise.then((data) => MsgCreateRecordResponse.decode(new _m0.Reader(data)));
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
