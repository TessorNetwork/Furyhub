/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";

export const protobufPackage = "tibc.core.client.v1";

/**
 * MsgUpdateClient defines an sdk.Msg to update a TIBC client state using
 * the given header.
 */
export interface MsgUpdateClient {
  /** client unique identifier */
  chainName: string;
  /** header to update the light client */
  header:
    | Any
    | undefined;
  /** signer address */
  signer: string;
}

/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponse {
}

function createBaseMsgUpdateClient(): MsgUpdateClient {
  return { chainName: "", header: undefined, signer: "" };
}

export const MsgUpdateClient = {
  encode(message: MsgUpdateClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.header !== undefined) {
      Any.encode(message.header, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainName = reader.string();
          break;
        case 2:
          message.header = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateClient {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      header: isSet(object.header) ? Any.fromJSON(object.header) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgUpdateClient): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.header !== undefined && (obj.header = message.header ? Any.toJSON(message.header) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateClient>, I>>(object: I): MsgUpdateClient {
    const message = createBaseMsgUpdateClient();
    message.chainName = object.chainName ?? "";
    message.header = (object.header !== undefined && object.header !== null)
      ? Any.fromPartial(object.header)
      : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgUpdateClientResponse(): MsgUpdateClientResponse {
  return {};
}

export const MsgUpdateClientResponse = {
  encode(_: MsgUpdateClientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClientResponse();
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

  fromJSON(_: any): MsgUpdateClientResponse {
    return {};
  },

  toJSON(_: MsgUpdateClientResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateClientResponse>, I>>(_: I): MsgUpdateClientResponse {
    const message = createBaseMsgUpdateClientResponse();
    return message;
  },
};

/** Msg defines the tibc/client Msg service. */
export interface Msg {
  /** UpdateClient defines a rpc handler method for MsgUpdateClient. */
  UpdateClient(request: MsgUpdateClient): Promise<MsgUpdateClientResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UpdateClient = this.UpdateClient.bind(this);
  }
  UpdateClient(request: MsgUpdateClient): Promise<MsgUpdateClientResponse> {
    const data = MsgUpdateClient.encode(request).finish();
    const promise = this.rpc.request("tibc.core.client.v1.Msg", "UpdateClient", data);
    return promise.then((data) => MsgUpdateClientResponse.decode(new _m0.Reader(data)));
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
