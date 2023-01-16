/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "irismod.record";

/** Content defines the detailed information for a record */
export interface Content {
  digest: string;
  digestAlgo: string;
  uri: string;
  meta: string;
}

/** Record defines the record standard */
export interface Record {
  txHash: string;
  contents: Content[];
  creator: string;
}

function createBaseContent(): Content {
  return { digest: "", digestAlgo: "", uri: "", meta: "" };
}

export const Content = {
  encode(message: Content, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.digest !== "") {
      writer.uint32(10).string(message.digest);
    }
    if (message.digestAlgo !== "") {
      writer.uint32(18).string(message.digestAlgo);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }
    if (message.meta !== "") {
      writer.uint32(34).string(message.meta);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Content {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.digest = reader.string();
          break;
        case 2:
          message.digestAlgo = reader.string();
          break;
        case 3:
          message.uri = reader.string();
          break;
        case 4:
          message.meta = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Content {
    return {
      digest: isSet(object.digest) ? String(object.digest) : "",
      digestAlgo: isSet(object.digestAlgo) ? String(object.digestAlgo) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
    };
  },

  toJSON(message: Content): unknown {
    const obj: any = {};
    message.digest !== undefined && (obj.digest = message.digest);
    message.digestAlgo !== undefined && (obj.digestAlgo = message.digestAlgo);
    message.uri !== undefined && (obj.uri = message.uri);
    message.meta !== undefined && (obj.meta = message.meta);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Content>, I>>(object: I): Content {
    const message = createBaseContent();
    message.digest = object.digest ?? "";
    message.digestAlgo = object.digestAlgo ?? "";
    message.uri = object.uri ?? "";
    message.meta = object.meta ?? "";
    return message;
  },
};

function createBaseRecord(): Record {
  return { txHash: "", contents: [], creator: "" };
}

export const Record = {
  encode(message: Record, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txHash !== "") {
      writer.uint32(10).string(message.txHash);
    }
    for (const v of message.contents) {
      Content.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Record {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txHash = reader.string();
          break;
        case 2:
          message.contents.push(Content.decode(reader, reader.uint32()));
          break;
        case 3:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Record {
    return {
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      contents: Array.isArray(object?.contents) ? object.contents.map((e: any) => Content.fromJSON(e)) : [],
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: Record): unknown {
    const obj: any = {};
    message.txHash !== undefined && (obj.txHash = message.txHash);
    if (message.contents) {
      obj.contents = message.contents.map((e) => e ? Content.toJSON(e) : undefined);
    } else {
      obj.contents = [];
    }
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Record>, I>>(object: I): Record {
    const message = createBaseRecord();
    message.txHash = object.txHash ?? "";
    message.contents = object.contents?.map((e) => Content.fromPartial(e)) || [];
    message.creator = object.creator ?? "";
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
